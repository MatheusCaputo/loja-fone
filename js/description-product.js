const $like = document.querySelector(".-like");
const $stars = document.querySelectorAll(".star");
const positionLast = $stars.length - 1;

$like.addEventListener("click", handleClick);

$stars.forEach(function($star, key) {
  if (key == 0) {
    $star.addEventListener("click", firstStar);
  }

  if (key > 0 && key <= positionLast) {
    $star.addEventListener("click", function() {
      middleStars(key);
    });
  }

  if (key == positionLast) {
    $star.addEventListener("click", lastStar);
  }
});

function handleClick() {
  this.classList.toggle("-active");
}

function firstStar() {
  $stars.forEach(function($star) {
    $star.classList.remove("-active");
  });

  this.classList.toggle("-active");
}

function middleStars(index) {
  $stars.forEach(function($star, key) {
    $star.classList.remove("-active");
    if (key <= index) {
      $star.classList.add("-active");
    }
  });
}

function lastStar() {
  $stars.forEach(function($star) {
    $star.classList.add("-active");
  });
}
