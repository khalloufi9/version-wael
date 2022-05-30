import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
// import UserReducer from "../reducer/userReducer";
import EquipeReducer from "../reducer/equipeReducer";
import joueurReducer from "../reducer/joueurReducer";
import terrainReducer from "../reducer/terrainReducer";
import arbitreReducer from "../reducer/arbitreReducer";
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  // user: UserReducer,
  equipe: EquipeReducer,joueurReducer,terrainReducer,arbitreReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
