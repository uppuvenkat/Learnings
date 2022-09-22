import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
//router
import {Routes, Route} from 'react-router-dom'


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

//useCallback - optimisation - retrun cached function
import ContainerComponentCallback from './components/UseCallBack/ContainerComponent'

//useMemo - ptimisation - retrun cached result
import Counter from './components/UseMemo/Counter'

//useRef
import FocusInput from './components/UseRef/FocusInput'
import TimerClass from './components/UseRef/TimerClass'
import TimerHookUseRef from './components/UseRef/TimerHookUseRef'

//customHook - for reusing existing code
import DocTitleOne from './components/CustomHook/DocTitleOne'
import DocTitleTwo from './components/CustomHook/DocTitleTwo'


//ReactRedux
import CakeContainer from './ReactRedux/CakeContainer'
import store from "./ReactRedux/Store";
import {Provider}  from 'react-redux'

//react redux hooks
import HooksCakeContainer from './ReactRedux/HooksCakeContainer'

import IceCreamContainer from './ReactRedux/IceCreamContainer'
import NewCakeContainer from './ReactRedux/NewCakeContainer'

import ItemContainer from './ReactRedux/ItemContainer'
import UserContainer from './ReactRedux/AsyncAction/UserContainer'
import { Home } from "./Router/Home";
// import { About } from "./Router/About";
import { Navbar } from "./Router/Navbar";
import { OrderSummary } from "./Router/OrderSummary";
import { NoMatch } from "./Router/NoMatch";
import { Products } from "./Router/Products";
import { Featured } from "./Router/Featured";
import { NewProduct } from "./Router/NewProduct";
import { User } from "./Router/Users";
import { UserDetails } from "./Router/UserDetails";
import { Admin } from "./Router/Admin";
import { Profile } from "./Router/Profile";
import { AuthProvider } from "./Router/Auth";
import { Login } from "./Router/Login";
import { RequireAuth } from "./Router/RequireAuth";

const LazyAbout = React.lazy(()=> import('./Router/About'))
//Router



class App extends React.Component {
  componentDidMount() {
    // axios.get("http://localhost:9000/users").then((res) => {
    //   console.log(res.data);
    // });
  }

  render() {
    return (
      <Provider store={store} >
        <div className="App">
          {/* <HooksCakeContainer /> */}
          {/* <CakeContainer />
          <IceCreamContainer />
          <NewCakeContainer />
          <ItemContainer cake />
          <ItemContainer /> */}
          {/* <UserContainer /> */}
          <AuthProvider >
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="about" element={<About />} /> */}
              <Route path="about" element={
                <React.Suspense fallback='Loading...'>
                  <LazyAbout />
                </React.Suspense>} 
              />
              <Route path="order-summary" element={<OrderSummary />} />
              <Route path="products" element={<Products />} >
                <Route index element={<Featured />} />
                <Route path="featured" element={<Featured />} />
                <Route path="new" element={<NewProduct />} />
              </Route>
              <Route path="users" element={<User />} />
              <Route path="users/:id" element={<UserDetails />} />
              <Route path="users/admin" element={<Admin />} />
              <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </AuthProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
