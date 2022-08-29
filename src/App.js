import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1';
import { Sum, Sub } from './Calc';
import Demo3 from "./Demo3"
import { useState } from 'react';
import Rod from './Rod';
import Knapsack01 from './Knapsack01';
import Knapsack01Example from './Knapsack01Example';
import Knapsack01Unbounded from './Knapsack01Unbounded';

function App() {
  let [buckets, setBuckets] = useState([
    20, 18, 12, 10, 8
  ])
  let [balls, setBalls] = useState([
    2.5, 2, 1, 0.8, 0.5
  ])

  return (
    <div className="App">
      <div className="container">
        <h1>
          {/* <BucketsList /> */}
          {/* <Demo3 /> */}
          {/* <Rod /> */}
          {/* <Knapsack01Example /> */}
          <Knapsack01Unbounded />
          {/* <span>Sum is {Sum(1, 2)}</span>
          <span>Sub is {Sub(11, 2)}</span> */}
        </h1>
      </div>

    </div>
  );
}

export default App;
