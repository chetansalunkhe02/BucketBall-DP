let weightsIncluded = []
let Knapsack01 = (weights, values, W, noOfWeights) => {
  // base condition
  if (noOfWeights == 0 || W == 0) {
    return 0
  }
  // choice diagram
  if (weights[noOfWeights - 1] <= W) {
    let weightIncluded = Math.max(
      (values[noOfWeights - 1] + Knapsack01(weights, values, W - weights[noOfWeights - 1], noOfWeights - 1)),
      Knapsack01(weights, values, W, noOfWeights - 1)
    )
    console.log("weightIncluded", weightIncluded)
    // weightsIncluded.push(weightIncluded)
    return weightIncluded
  }
  else if (weights[noOfWeights - 1] > W) {
    return Knapsack01(weights, values, W, noOfWeights - 1)
  }
}

let Knapsack01Example = () => {
  let W = 7 // weight knapsack can have
  let weights = [1, 3, 4, 17]
  let values = [1, 4, 5, 22]
  let noOfWeights = weights.length // size of array of wt[]
  return (
    <>
      {/* <span>Hello Sir,</span> */}
      <p>Knapsack01Example solution is = {Knapsack01(weights, values, W, noOfWeights)}</p>
      <p>weightsIncluded = {weightsIncluded.map(wm => { return wm + ',' })}</p>
    </>
  )
}

export default Knapsack01Example;