import {combineReducers} from "redux"
import skillsReducer from "./skillsReducer";
import profileReducer from "./profileReducer";
import projectReducer from "./projectReducer";
import footerReducer from "./footerReducer";



const rootReducer = combineReducers({
    skillsState: skillsReducer,
    profileState: profileReducer,
    projectState:projectReducer,
    footerState:footerReducer,
})

export default rootReducer;