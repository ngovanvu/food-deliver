import React from "react";
import productImg from "../../../assets/images/product_2.1.jpg";
import "../../../styles/produce-card.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/shopping-cart/cartSlice";

import { toast } from 'react-toastify';
const ProductCard = (props) => {
  const { id, title, price, image01 } = props.item;
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
    toast.success("product added to the cart")
  }
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product__img" className="w-50" />
      </div>
      <div className="product__content">
        {/* //! quan trong */}
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex align-item-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
