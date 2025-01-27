const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2000);

function getData() {
  header.innerHTML = '<img src="/src/img/GcIdMnnXwAAORDM.jpg" alt="" />';
  title.innerHTML = "Your choice will be the best";
  excerpt.innerHTML =
    "little funny chickens are funny but, they get angry at any time";
  profile_img.innerHTML = '<img src="/src/img/252.jpg" alt="" />';
  name.innerHTML = "Junayd A.";
  date.innerHTML = "Jan 25, 2025";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
