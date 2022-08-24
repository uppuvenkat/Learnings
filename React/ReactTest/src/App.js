import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//#######useState
//hook counter example
import HookCounter from "./components/HookCounter";
//hook increament and decrement and exact state updation example
import HookCounterTwo from "./components/HookCounterTwo";
//Object updation in hook
import HookCounterThree from "./components/HookCounterThree";
//Array updation in hook
import HookCounterFour from "./components/HookCounterFour";

//#######useEffect
//didmount
import UseEffectCounterOne from "./components/UseEffectCounterOne";
//didupdate
import UseEffectCounterMouseHover from "./components/UseEffectCounterMouseHover";
//unmount/unsubsribe
import UseEffectUnmount from "./components/UseEffectUnmount";
//Timer - as incorrect dependency
import UseEffectTimer from "./components/UseEffectTimer";
//data fetching
import UseEffectDataFetching from "./components/UseEffectDataFetching";
//data fetching by id
import UseEffectDataFetchingById from "./components/UseEffectDataFetchingById";
//data fetching by button click
import UseEffectDataFetchingByButtonClick from "./components/UseEffectDataFetchingByButtonClick";

//useContext
//tedious way of consumption described in ComponentD
//simpler way of consumption described in ComponentC
import ComponentA from "./components/Context/ComponentA";

//UseReducer 
//for normal state - local state only
import UseReducerCounterOne from "./components/UseReducer/UseReducerCounterOne";
//for complex state - local state only
import UseReducerCounterTwo from "./components/UseReducer/UseReducerCounterTwo";

//useReducer and useContext for global state
import ContainerComponent from "./components/UseReducserAndUseContext/ContainerComponent";

//UseState Vs UseReducer
//UseState
import UseStateDataFetching from './components/UseStateVsUseReducer/UseStateDataFetching'
//UseReducer
import UseReducerDataFetching from './components/UseStateVsUseReducer/UseReducerDataFetching'


class App extends React.Component {
  componentDidMount() {
    console.log("lll");
    axios.get("http://localhost:9000/users").then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <UseReducerDataFetching />
      </div>
    );
  }
}

export default App;
