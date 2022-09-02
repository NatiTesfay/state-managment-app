import { UP_ACTION,UPDATE_COUNTER,DOWN_ACTION,RESTART_COUNTER,MULTIPLY_COUNTER } from "../actions/counter-type";

export const upAction = ()=>{
return{type:UP_ACTION};
};
export const dateAction = (data)=>{
return{type:UPDATE_COUNTER,payload:data};
};
export const downAction = ()=>{
    return{type:DOWN_ACTION};
};
export const restartAction = ()=>{
    return{type:RESTART_COUNTER};
;}
export const multiAction = ()=>{
    return{type:MULTIPLY_COUNTER};
;}


