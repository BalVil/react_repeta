import { useReducer } from 'react';
import styles from './Counter.module.css';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    // якщо примітив:
    // return state + action.payload;
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    // якщо примітив:
    // return state - action.payload;
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  return (
    <div className={styles.container}>
      <p className={styles.value}>{state.count}</p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      >
        Increase
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      >
        Decrease
      </button>
    </div>
  );
}
