import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamreducer from './iceCream/iceCreamReducer'

const rootReducer  = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamreducer
})

export default rootReducer
