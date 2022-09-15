const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware

const BUY_CAKE  = "BUY_CAKE"
const BUY_ICECREAM  = "BUY_ICECREAM"

const initialCakesState = {
    noOfCakes: 10,
}

const initialIceCreamsState = {
    iceCreams:20
}

function buyCake(){
    return {
        type: BUY_CAKE,
        info :"first redux action for cake"
    }
}

function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info :"first redux action for ice"
    }
}

const cakesReducer = (state=initialCakesState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state, noOfCakes: state.noOfCakes-1
        }
        default: return state
    }
}

const creamsReducer = (state=initialIceCreamsState, action) =>{
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state, iceCreams: state.iceCreams-1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakesReducer,
    iceCream: creamsReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger))

const unsubscribe = store.subscribe(()=>{
    // console.log('updated state..:', store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()


//###### redux logger - logs all the info of redux actions
//npm install "redux-logger"
//createStore(reducer, applyMiddleWare(logger))
//const applyMiddleWare = redux.applyMiddleWare
//const reduxLogger = require('redux-logger')
//const logger = reduxLogger.createlogger
//const logger = 