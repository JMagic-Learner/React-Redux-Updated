import React from "react";
import { connect } from "react-redux";

// FOR CONTEXT API
class BuyStockNumber extends React.Component {
  render() {
    console.log("BuyStockNumber props", this.props);

    return <span>{this.props.stocks}</span>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  stocks: state.stocks.value
});

export default connect(mapStateToProps, null)(BuyStockNumber);
