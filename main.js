const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("#ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputVel = input.value;

  if (inputVel.length < 5) {
    alert("iltimos malumotni toliq krting");
  } else {
    addList(inputVel);
  }

  input.value = "";
});

function addList(data) {
  console.log(data, "data");

  const li = document.createElement("li");
  const img = document.createElement("img");

  li.textContent = data;
  li.addEventListener("click", () => {
    li.classList.toggle("line");
  });
  img.src =
    "https://cdn.pixabay.com/photo/2012/04/13/00/21/button-31222_640.png";

  img.addEventListener("click", () => {
    ul.removeChild(li);
  });

  li.appendChild(img);
  ul.appendChild(li);
}
