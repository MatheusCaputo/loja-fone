const $like = window.document.querySelector(".-like");
const $btnAdd = window.document.querySelector(".-second");
const $cart = window.document.querySelector(".-last");

$like.addEventListener("click", handleClick);
$btnAdd.addEventListener("click", handleAdd);

function handleClick() {
  console.log("Cliquei no coracao");
}

function handleAdd() {
  $cart.innerHTML = "Foi";
}
