import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'

export function APP() {
    const [text, setText] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        console.log('>>useEffect');
        setTimeout(() => {
            setText(input + 'copy');
        }, 600);

        return () => {
            // 清除
            console.log('>>useEffect clean');
        }
    },[input])

    const onClick = useCallback(() => {
        setText(input);
        console.log('>>onClick');
    }, [input])

    const onChange = useCallback((e) => {
        console.log(e.target.value)
        setInput(e.target.value);
        console.log('>>onChange');
    }, [])

    const getText = useMemo(() => () => {
        return 'xiaocai'
    }, [])

    console.log('render');

    return (<>
        <div>{text}</div>
        <input onChange={onChange}></input>
        <button onClick={onClick}>click</button>
    </>)
}

export function App() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        alert("count: " + count);
      }, 3000);
    }, [count]);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>增加 count</button>
        <button onClick={() => setCount(count - 1)}>减少 count</button>
      </div>
    );
  }

  export default function App2() {
    const count = useRef(0);
  
    const showCount = () => {
      alert("count: " + count.current);
    };
  
    const handleClick = number => {
      count.current = count.current + number;
      setTimeout(showCount, 3000);
    };
  
    console.log('>>render');
    return (
      <div>
        <p>You clicked {count.current} times</p>
        <button onClick={() => handleClick(1)}>增加 count</button>
        <button onClick={() => handleClick(-1)}>减少 count</button>
      </div>
    );
  }
