import React from "react";
import { connect } from "react-redux";

import { toogleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./CartIcon.styles.scss";

function CartIcon({ toogleCartHidden, itemCount }) {
  return (
    <div className="cart-icon" onClick={toogleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToPrpos = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToPrpos
)(CartIcon);