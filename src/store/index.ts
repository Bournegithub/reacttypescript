import { createStore, combineReducers } from 'redux';
import userInfo from './reducers/userInfo';
// createStore方法是用来创建store的，combineReducers方法是用来合并多个reducer的

// 创建根reducer，利用combineReducers合并多个reducer，此处还未定义reducer，所以暂空
const rootReducer = combineReducers({
    userInfo,
})

const store = createStore(rootReducer);

// 抛出store
export default store;