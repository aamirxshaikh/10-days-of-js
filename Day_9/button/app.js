let btn = document.getElementById("btn");

let count = 0;

btn.addEventListener("click", function () {
  count++;

  btn.innerHTML = count;
});
