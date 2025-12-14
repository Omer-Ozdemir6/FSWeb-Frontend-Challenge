import {combineReducers} from "redux"
import skillsReducer from "./skillsReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";



const rootReducer = combineReducers({
    skillsState: skillsReducer,
    profileState: profileReducer,
    projectState:projectReducer
})

export default rootReducer;