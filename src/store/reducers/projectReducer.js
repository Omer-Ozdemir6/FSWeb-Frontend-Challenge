import data from "../../data.json";

const initialState = { projects: data.projects}

const projectReducer = (state = initialState, action) => {
       switch(action.type) {
        default:
            return state;
    }
}
export default projectReducer;