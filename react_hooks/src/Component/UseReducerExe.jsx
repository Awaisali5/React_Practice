import React from 'react'
import { useReducer } from 'react'

const UseReducerExe = () => {


function reducer(state,action){

    switch (action.type) {
        case 'incremented_age': {
          return {
            name: state.name,
            age: state.age + 1
          };
        }
        case 'decremented_age' :{
            return {
                name: state.name,
                age: state.age -1
            };
        }
        case 'changed_name': {
          return {
            name: action.nextName,
            age: state.age
          };
        }
      }
      throw Error('Unknown action: ' + action.type);
    }
    



 
const  initialState={name: 'Awais Ali', age: 22};


    const [state, dispatch]=useReducer(reducer,initialState);

    function handleButtonClick() {
        dispatch({ type: 'incremented_age' });

      }

      function handleButtonClick_Decreament() {
        dispatch({ type: 'decremented_age' });
        
      }
    
      function handleInputChange(e) {
        dispatch({
          type: 'changed_name',
          nextName: e.target.value
        }); 
      }



  return (
    <div>UseReducerExe


<input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>

      <button onClick={handleButtonClick_Decreament}>
        Decrement age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </div>
  )

}


export default UseReducerExe