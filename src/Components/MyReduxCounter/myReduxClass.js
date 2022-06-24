import React from "react";
import { store } from "../../Store/reduxCounterStore";
import { connect } from "react-redux";

// Importing Store allows us to access the reducer in defaultStore
class MyReduxClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "MyReduxClass",
      forceStateChange: 0
    };
  }

  render() {
    console.log("MyReduxClass", store.getState().reduxCounter);
    console.log("These are the props passed to myReduxClass", this.props);
    console.log("These are the state passed to myReduxClass", store.getState());

    return (
      <div id="myReduxClass">
        <header>MyReduxClass</header>
        <header> Using "this.props": {this.props.reduxCounter}</header>
        <header>
          Using store.getState().stocks.value :{store.getState().reduxCounter}
        </header>
        <button
          onClick={() => {
            store.dispatch({ type: "reduxCounter/incremented" });
          }}
        >
          {" "}
          Increase
        </button>
        <button
          onClick={() => {
            store.dispatch({ type: "reduxCounter/decremented" });
          }}
        >
          Decrease
        </button>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    reduxCounter: state.reduxCounter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incremented: () => dispatch({ type: "incremented" }),
    decremented: () => dispatch({ type: "decremented" })
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(MyReduxClass);
