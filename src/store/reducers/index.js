import {combineReducers} from "redux"
import skillsReducer from "./skillsReducer";
import profileReducer from "./profileReducer";



const rootReducer = combineReducers({
    skillsState: skillsReducer,
    profileState: profileReducer
})

export default rootReducer;