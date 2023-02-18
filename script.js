const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

var count = 0;

incrementEl.addEventListener("click", () => {
  console.log("incre");
  count++;
  counterEl.innerText = count;
});
decrementEl.addEventListener("click", () => {
  console.log("decre");
  count--;
  counterEl.innerText = count;
});
