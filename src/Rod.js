function Rod() {
  let n = 8 // length N
  let length = [1, 2, 3, 4, 5, 6, 7, 8]
  let price = [1, 5, 8, 9, 10, 17, 17, 20]
  // if (length[i - 1] <= j) {
  //   t[i][j] = max(price[i - 1] + t[i][j - length[i - 1]])
  // }
  return (
    <>
      <span>Rod cutting (Knpasack unbounded) </span>
      <p>N = {n}</p>
      <p>Length = {length.map((l) => { return l + ',' })}</p>
      <p>price = {price.map(p => { return p + ',' })}</p>
      <p>Ans by first look == 17 + 5 = 22</p>
    </>
  );
}

export default Rod;
