import { combineReducers } from 'redux';
import AddRelatedPersonReducer from './AddRelatedPersonReducer';

const rootReducer = combineReducers({
    AddRelatedPerson : AddRelatedPersonReducer,
})
export default rootReducer