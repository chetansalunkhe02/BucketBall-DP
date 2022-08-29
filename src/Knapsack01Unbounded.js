let weightsIncluded = []
let Knapsack01 = (weights, values, W, noOfWeights) => {
  // base condition
  if (noOfWeights == 0 || W == 0) {
    return 0
  }
  // choice diagram
  if (weights[noOfWeights - 1] <= W) {
    // weight is selected and then add its value
    let selectedValue = values[noOfWeights - 1]
    let nextSelectedValue = Knapsack01(weights, values, W - weights[noOfWeights - 1], noOfWeights - 1)
    return Math.max(
      (selectedValue + nextSelectedValue),
      Knapsack01(weights, values, W, noOfWeights - 1)
    )

  }
  else if (weights[noOfWeights - 1] > W) {
    let elseKnapsack = Knapsack01(weights, values, W, noOfWeights - 1)
    return elseKnapsack
  }
}

let Knapsack01Unbounded = () => {
  let W = 7 // weight knapsack can have
  let weights = [1, 3, 4, 5]
  let values = [1, 4, 5, 7]
  let noOfWeights = weights.length // size of array of wt[]
  return (
    <>
      <p>Hello Sir,</p>
      <p>let W = 7</p>
      <p>let weights = [1, 3, 4, 5]</p>
      <p>let values = [1, 4, 5, 7]</p>
      <p>Knapsack Unbounded solution is = {Knapsack01(weights, values, W, noOfWeights)}</p>
      {/* <p>weightsIncluded = {weightsIncluded.map(wm => { return wm + ',' })}</p> */}
    </>
  )
}

export default Knapsack01Unbounded;