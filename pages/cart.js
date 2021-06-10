import React from "react";
import { useContext } from "react";
import Link from "next/link";
import { Context } from "../context/index";

const Cart = () => {
  const items = useContext(Context);
  const products = items.state.items;
  const {  dispatch } = useContext(Context);

  return (
    <>
      <div className="container pt-4 ">
        <div className="row m-auto">
          <h1>Cart items</h1>
          <hr />
        </div>
        <div className="row">
        {
          products.map((product) => (
            <div className="col-12 col-md-4" key={product.id}>
              <div className="card mb-4">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="itemimage"
                  style={{ width: "100%", height: "400px" }}
                />
                <div className="card-body">
                  <h5 className="card-title"> {product.title} </h5>
                  <h5 className="card-title"> {product.price} L.E </h5>
                  <input type="number" className="col-2 mx-3"  />
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: product,
                      })
                    }
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/thanks">
        <button className="" className ={ `${(products.length != 0) ? "d-block btn btn-success " :"d-none"  }` } >confirm order</button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
