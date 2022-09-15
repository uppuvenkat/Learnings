const redux = require('redux')
const BUY_CAKE  = "BUY_CAKE"
const BUY_ICECREAM  = "BUY_ICECREAM"

const initialState = {
    noOfCakes: 10,
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

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state, noOfCakes: state.noOfCakes-1
        }
        case BUY_ICECREAM: return {
            ...state, iceCreams: state.iceCreams-1
        }
        default: return state
    }
}

const store = redux.createStore(reducer)

const unsubscribe = store.subscribe(()=>{
    console.log('updated state..:', store.getState());
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()