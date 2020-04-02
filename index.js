(function() {
  let randomarr = JSON.parse(localStorage.getItem('randomArray'));
  if (!randomarr) {
    randomarr = randomArray(20, 0, 200, 2);
    localStorage.setItem('randomArray', JSON.stringify(randomarr));
  }
  console.log(randomarr);
})();

function randomArray(count, from, to, radix) {
  const array = new Array(count).fill(null);
  return array.map(nul =>
    parseInt(Math.random() * (to - from) + from).toString(radix)
  );
}

function transformToX(e) {
  return e.split('').map(ei => 2 * parseInt(ei) - 1);
}
