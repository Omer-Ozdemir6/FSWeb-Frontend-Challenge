import data from "../../data.json";


const initialState = data.profiles


const profileReducer = (state=initialState,action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default profileReducer;