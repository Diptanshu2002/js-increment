let count = 0;
function increment() {
  count++;
  document.getElementById("count").innerText = count;
  console.log(count);
}
function saveFunc() {
  let saveEl = document.getElementById("savePreviousData");
  saveEl.innerText = `${count} - `;
  console.log(saveEl);
}
