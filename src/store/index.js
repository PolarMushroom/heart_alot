import { createStore } from 'redux';
import reducer from './reducer/index'

const index = createStore(reducer);

export default index;