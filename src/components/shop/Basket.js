const Basket = ({ user }) => {
  if (!user) return 'Please log In';
  return <h1>I'm Basket</h1>;
};

export default Basket;
