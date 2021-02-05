// frontend/reducers/errors_reducer.jsx

import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReducer from "./reviews_error_reducer";


const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviewErrors: reviewErrorsReducer 
});

export default errorsReducer;