import React, { StrictMode } from "react";
import { withCounterContext } from "../Context/counterContext";
import { connect } from "react-redux";
class CounterNumber extends React.Component {
  render() {
    console.log("CounterNumber Navigation Display Props", this.props);
    return <span>{this.props.count}</span>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  count: state.counter.value
});

export default connect(mapStateToProps, null)(CounterNumber);
