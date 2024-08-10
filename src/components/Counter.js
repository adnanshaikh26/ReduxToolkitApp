import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterAction } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const increaseHandler = () => {
    dispatch(counterAction.increase(10));
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <>
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{showCounter && counter}</div>
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    </>
  );
};

export default Counter;
