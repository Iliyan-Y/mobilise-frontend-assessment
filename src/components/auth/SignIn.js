import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignIn = ({ setUser }) => {
  let [username, setUsername] = useState('');
  let [currentPassword, setPassword] = useState('');
  let [show, setShow] = useState(false);
  let history = useHistory();
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');

  function validateUserName(value) {
    let lastCharIndex = value.length - 1;
    if (value[lastCharIndex] === ' ' || value[0] === ' ') {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const onFinish = (values) => {
    if (show) return;
    let body = {
      username,
      password: currentPassword,
      firstName,
      lastName,
    };
    axios
      .post('api/users', body)
      .then((res) => {
        window.sessionStorage.setItem('user', res.data);
        setUser(res.data);
        history.push('/shop');
      })
      .catch((err) => {
        console.error(err.message);
        alert('Something went wrong please try again later');
      });
  };

  return (
    <div style={{ background: 'lightgrey', height: '100vh' }}>
      <Form
        id="loginForm"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <h3 style={{ marginLeft: '41%' }}>Sign Up</h3>
        </Form.Item>

        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username or email address"
            value={username}
            onChange={(e) => {
              validateUserName(e.target.value);
              setUsername(e.target.value);
            }}
          />
        </Form.Item>
        <p
          style={{
            color: 'red',
            margin: 0,
            padding: 0,
            display: show ? 'inline' : 'none',
          }}
        >
          White space is NOT allowed
        </p>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={currentPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="firstName">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item name="lastName">
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            id="LoginBtn"
          >
            Sign Up
          </Button>{' '}
          <br />
          <Link to="/">Log In</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
