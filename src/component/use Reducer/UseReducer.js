import React, { useReducer } from 'react'

function UseReducer() {
let initialState=0;

const reducer=(state, action) =>{
switch(action.type){
    case "Add": {
    return state + action.payload;
    }
    
    case "Subtract":{

    } return state - action.payload;
}
}

const[state,dispatch]=useReducer(reducer, initialState);
const[count, setCount]=React.useState(0);

return(
<div>
<div>UseReducer</div>
<div>{state}</div>
<div>
<button onClick={ ()=>{
    dispatch({type: "Add", payload: 5});
}}>Add

</button>
<button onClick={ ()=>{
    dispatch({type: "Subtract", payload: 2});
}}>Subtract

</button>
</div>
</div>


)
}

export default UseReducer
