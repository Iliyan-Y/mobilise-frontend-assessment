import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const LogIn = ({ setUser }) => {
  let [userName, setUserName] = useState('');
  let [currentPassword, setPassword] = useState('');
  let [show, setShow] = useState(false);
  let history = useHistory();

  function validateUserName(value) {
    let lastCharIndex = value.length - 1;
    if (value[lastCharIndex] === ' ' || value[0] === ' ') {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(btoa(currentPassword));
    if (show) return;
    window.sessionStorage.setItem('user', userName);
    setUser(userName);
    history.push('/shop');
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
          <h3 style={{ marginLeft: '41%' }}>Sign In</h3>
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
            value={userName}
            onChange={(e) => {
              validateUserName(e.target.value);
              setUserName(e.target.value);
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="unchecked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            id="LoginBtn"
          >
            Log in
          </Button>{' '}
          <br />
          <a id="regLink" href="">
            register now!
          </a>
        </Form.Item>

        <Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>{' '}
          <br />
          <a className="login-form-forgot" href="">
            Resend verification email
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LogIn;
