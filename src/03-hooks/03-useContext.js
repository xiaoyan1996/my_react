import React, { useContext, useReducer } from "react";

const colorContext = React.createContext("gray");
console.log('****', colorContext);
function Bar() {
  const {color} = useContext(colorContext);
  console.log('>>>', color);
  return <div>{color}</div>;
}
function Foo() {
  return <Bar />;
}

export default function App() {
  return (
    <colorContext.Provider value={{ color: 'red' }}>
      <Foo />
      <Counter />
    </colorContext.Provider>
  );
}

const initialState = {count: 0};

function reducer(state, action) {
  console.log('??', state, action);
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}