import { combineReducers } from 'redux';
import PostReducers from './postReducers';

const Rootreducers = combineReducers({
    posts: PostReducers
})


export default Rootreducers;
