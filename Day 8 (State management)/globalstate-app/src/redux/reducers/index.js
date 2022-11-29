import { combineReducers } from 'redux'

import CounterReducer from './counterReducer'
import DataReducer from './dataReducer'
const allReducer = combineReducers({
    counter: CounterReducer,
    DataReducer: DataReducer
})

export default allReducer