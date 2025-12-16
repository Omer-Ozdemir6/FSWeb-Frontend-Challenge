import data from "../../data.json";

const initialState = data.headers; 

const headersReducer = (state = initialState, action) => {
     switch(action.type) {
        default:
            return state;
    }
};

export default headersReducer;