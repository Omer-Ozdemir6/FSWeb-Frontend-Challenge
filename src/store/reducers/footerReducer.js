import data from "../../data.json";

const initialState = data.footer; 

const footerReducer = (state = initialState, action) => {
     switch(action.type) {
        default:
            return state;
    }
};

export default footerReducer;