// import { type } from "@testing-library/user-event/dist/type";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = ()=>({type: INCREMENT});
export const decrement = ()=>({type: DECREMENT});

const initialState = {count:0, someData:{name:'raj'}};

export const counter = (state = initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state, count : state.count + 1};
        case DECREMENT:
            return{...state, count : state.count - 1};
        default:
            return state
    }
}
export default counter;
