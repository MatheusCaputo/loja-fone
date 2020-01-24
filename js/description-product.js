const $like = document.querySelector(".-like");
const $stars = document.querySelectorAll(".star");

$like.addEventListener("click", handleClick);

$stars.forEach(function($star) {
  $star.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("-active");
}
