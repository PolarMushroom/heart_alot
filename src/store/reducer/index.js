import language from './language'
import { combineReducers } from 'redux';
import globalLoading from './globalLoading';

let reducer = combineReducers({
    language,
    globalLoading
});

export default reducer;