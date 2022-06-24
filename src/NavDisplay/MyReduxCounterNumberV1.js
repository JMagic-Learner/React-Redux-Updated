import React, { StrictMode } from "react";
import { connect } from "react-redux";
class MyReduxCounterNumberV1 extends React.Component {
  render() {
    return <span>{this.props.reduxCounter}</span>;
  }
}
const mapStateToProps = (state, ownProps) => ({
  reduxCounter: state.reduxCounter.value
});

export default connect(mapStateToProps, null)(MyReduxCounterNumberV1);
