import intialState from "./state";

export const reducerIncrese = (state = intialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case "SUBSTARC":
            return {
                ...state,
                counter: state.counter - action.payload
            }
            case"USERINPUT":
            return{
                ...state,
                counter:state.counter+action.payload
            }
            case"yechizi":
            return{
                ...state,
                getProdutsByCategory:action.payload
            }
        default:
            return {
                ...state
            }
    }
}