import { createStore, combineReducers } from "redux";
import MYTEST from "./testreducer";


const store = combineReducers(MYTEST);
export default createStore(store);