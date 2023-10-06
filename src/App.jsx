import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const [isValueChanged, setIsValueChanged] = useState(false);

  useEffect(() => {
    setIsValueChanged(true);
    const timeoutId = setTimeout(() => {
      setIsValueChanged(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [count]);

  return (
    <>
      <p className={isValueChanged ? 'pluse' : 'value'}>{count}</p>
      <div className='actions'>
        <button className='btn' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button className='btn' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
