import React from "react";
import { connect } from "react-redux";
import store from "../../Store/store.js";
import { increaseStock, decreaseStock } from "../../Slices/BuyStockSlice";

class BuyStockClass extends React.Component {
  render() {
    const { stocks, increaseStock, decreaseStock } = this.props;
    console.log("BuyStockClass", stocks);
    return (
      <section>
        <h1>BuyStockClass (Using Redux) </h1>
        <header> Using "this.props.stock": {this.props.stocks}</header>
        <header>Using shorthand "stocks": {stocks}</header>
        <header>
          Using store.getState().stocks.value : {store.getState().stocks.value}
        </header>
        {this.props.isLoadingStockAmount ? (
          this.props.renderSpinner
        ) : (
          <>
            <button onClick={() => increaseStock()}>+</button>
            <span>{stocks}</span>
            <button onClick={() => decreaseStock()}>-</button>
          </>
        )}
      </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    stocks: state.stocks.value
  };
};

const mapDispatchToProps = { increaseStock, decreaseStock };

export default connect(mapStatetoProps, mapDispatchToProps)(BuyStockClass);
