import { useParams, Link } from "react-router-dom";

import classes from "../components/MainNavigation.module.css";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      <div className={classes.header}>
        <li className={classes.list}>
          <Link to=".." relative="path">
            Back
          </Link>
        </li>
      </div>
    </>
  );
}

export default ProductDetailPage;
