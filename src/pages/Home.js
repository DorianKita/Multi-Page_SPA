import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    setTimeout(() => navigate("/products"), 5000);
  }

  return (
    <>
      <h1>My home page</h1>
      <p>
        Check our <Link to="products">Products</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate to products.</button>
    </>
  );
}

export default HomePage;
