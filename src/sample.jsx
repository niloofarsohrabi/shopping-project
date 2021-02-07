import React,{ useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increaseAction,decreseAction,dynamicInput} from './stateManagment/action'
export const Sample = () => {
    
    const stateFromStore = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const increseNumber = () => {
        console.log("click");
        dispatch(increaseAction({value:1}));
    }
    const decreseNumber = () => {
        console.log("click decrese");
        dispatch(decreseAction({value:1}));
    }
    const dynamicNumber=()=>{
       dispatch(dynamicInput({value:userInput}))

    }
    const [userInput,setUserInput]=useState(0);
    return (
        <div>
            <lable>Counter:{stateFromStore}</lable>
            <button onClick={() => increseNumber()}>+</button>
            <button onClick={() => decreseNumber()}>-</button>
            <div>
                <input onChange={(e)=>setUserInput(Number(e.target.value))}></input>
                <button onClick={()=>dynamicNumber()}>add mount</button>
            </div> 

        </div>
    )
}
