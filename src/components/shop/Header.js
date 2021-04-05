import { Link } from 'react-router-dom';
const Header = ({ basketState }) => {
  return (
    <div id="header">
      <Link to="/">Log Out</Link>
      <p style={{ margin: '0.1em 1em' }}> | </p>
      <Link to="/basket">Cart ({basketState.length})</Link>
    </div>
  );
};

export default Header;
