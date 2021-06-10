import React from "react";
import  { useContext } from "react";
import { Context } from "../../context/index";

export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { items: data },
  };
};

const Items = ({ items }) => {
  const {  dispatch } = useContext(Context);

  return (
    <div className="container pt-4">
      <div className="row">
        <h1>items</h1>
        <hr />
      </div>
      <div className="row">
        {items.map((item) => (
          <div className="col-12 col-md-4" key={item.id}>
            <div className="card mb-4">
              <img
                src={item.image}
                className="card-img-top"
                alt="itemimage"
                style={{ width: "100%", height: "400px" }}
              />
              <div className="card-body">
                <h5 className="card-title"> {item.title} </h5>
                <h5 className="card-title"> {item.price} </h5>
                
                  <button
                    className="btn btn-primary"
                    onClick={()=> 
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item
                      })
                    }
                  >
                    add to cart
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
