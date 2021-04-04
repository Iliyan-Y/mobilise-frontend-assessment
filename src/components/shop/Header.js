import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div id="header">
      <a href="#">Log Our</a>
      <p style={{ margin: '0.1em 1em' }}> | </p>
      <Link to="/basket">Cart (0)</Link>
    </div>
  );
};

export default Header;
