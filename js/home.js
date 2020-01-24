const $btnAdd = document.querySelector(".-second");
let valorInicial = 10;

$btnAdd.addEventListener("click", handleClick);

function handleClick() {
  const $cart = document.querySelector(".-last");

  $cart.textContent = `Carrinho (${++valorInicial})`;
}
