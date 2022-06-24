import React, { StrictMode } from "react";
import { store } from "../Store/reduxCounterStore";
import { connect } from "react-redux";
class MyReduxCounterNumber extends React.Component {
  render() {
    return <span>{this.props.reduxCounter}</span>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  reduxCounter: state.reduxCounter.value
});

export default connect(mapStateToProps, null)(MyReduxCounterNumber);
