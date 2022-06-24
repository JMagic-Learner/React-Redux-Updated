import React from "react";
import { connect } from "react-redux";
import store from "../../Store/store.js"; // Where reducers are combined, importing slices
import { increase, decrease } from "../../Slices/CounterSlice";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "CounterClass"
    };
  }

  render() {
    console.log("CounterClass", store.getState().counter.value);
    // console.log(store); // The global store
    // console.log(store.getState()); // This is the value of the state
    const { count, increase, decrease } = this.props;
    console.log(this.props);
    return (
      <section>
        <h1> Counter Class Component (using Redux) </h1>
        <header> Using "this.props.count": {this.props.count}</header>
        <header>
          Using shorthand "{count}": {count}
        </header>
        <header>
          Using store.getState().counter.value :{store.getState().counter.value}
        </header>

        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
        {/* <button onClick={increase} >+</button><button onClick={decrease}>-</button> */}
        {/* <button onClick={this.hanldeAlert}>Alert after 5 s</button> */}
      </section>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    count: state.counter.value
  };
};

const mapDispatchToProps = { increase, decrease };

export default connect(mapStatetoProps, mapDispatchToProps)(Counter);
