import React from "react";

/* REACT-BOOTSTRAP */
import { Card } from "react-bootstrap";

/* REACT ROUTER */
import { Link } from "react-router-dom";

/* COMPONENTS */
import Rating from "./Rating";

function Product({ product }) {
  return (
    <Card 
    className="my-3  rounded" 
    style={{
       height: "100%",
       border: '3px solid rgba(201, 76, 76, 0.3)',
       }}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={`https://back-com.onrender.com/${product.image}/`}
          style={{ height: "200px", objectFit: "cover" }}
        />
      </Link>

      <Card.Body
        className="p-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"#f8e825"}
          />
        </Card.Text>
        <div className="mintPrice" 
        style={{
          position: 'static',
          border: '3px solid #73AD21',
          textAlign:'center'
          }}>
          <Card.Text as="h3">${product.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
