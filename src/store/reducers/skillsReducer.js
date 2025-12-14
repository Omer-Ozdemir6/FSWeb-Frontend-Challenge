import data from "../../data.json";

const initialState = {
    data: data.skills
}

const skillsReducer = (state=initialState,action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default skillsReducer;