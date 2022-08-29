function Knapsack01() {
  let W = 7 // length W
  let wt = [1, 3, 4, 5]
  let val = [1, 4, 5, 7]
  // if (length[i - 1] <= j) {
  //   t[i][j] = max(price[i - 1] + t[i][j - length[i - 1]])
  // }
  return (
    <>
      <span>Knapsack 01 </span>
      <p>W = {W}</p>
      <p>wt = {wt.map((a) => { return a + ',' })}</p>
      <p>val = {val.map(b => { return b + ',' })}</p>
    </>
  );
}

export default Knapsack01;
