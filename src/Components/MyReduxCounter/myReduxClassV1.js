import React from "react";
import store from "../../Store/store";
import { connect } from "react-redux";
import { incrementV1, decrementV1 } from "../../Slices/ReduxCounterSlice";
// Importing Store allows us to access the reducer in defaultStore
class MyReduxClassV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "MyReduxClass"
    };
  }

  render() {
    console.log("MyReduxClass", store.getState().reduxCounter.value);
    // console.log("These are the props passed to myReduxClass", this.props);
    // console.log("These are the state passed to myReduxClass", store.getState());
    const { reduxCounter, incrementV1, decrementV1 } = this.props;
    return (
      <div id="myReduxClass">
        <h1>MyReduxClassV1, using reduxCounterSlice</h1>
        <header> {reduxCounter} </header>
        {/* <header> Using "this.props": {this.props.reduxCounter}</header>
        <header>
          Using store.getState().stocks.value :{store.getState().reduxCounter}
        </header> */}
        <button onClick={() => incrementV1()}>+</button>
        <button onClick={() => decrementV1()}>-</button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    reduxCounter: state.reduxCounter.value
  };
};

const mapDispatchToProps = { incrementV1, decrementV1 };

export default connect(mapStatetoProps, mapDispatchToProps)(MyReduxClassV1);
