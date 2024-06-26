import { Link } from "react-router-dom";

import classes from "../components/MainNavigation.module.css";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <div className={classes.header}>
        <ul className={classes.list}>
          {PRODUCTS.map((item) => (
            <li key={item.id}>
              <Link to={`/products/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductsPage;
