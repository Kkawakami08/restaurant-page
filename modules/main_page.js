function mainPageLoad() {
  content.innerHTML = "";

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  content.appendChild(homeContainer);
  //hero image
  const heroImg = document.createElement("img");
  heroImg.src = "../src/hero-lola.png";
  heroImg.classList.add("hero-img");
  homeContainer.appendChild(heroImg);

  //about section
  const about = document.createElement("div");
  about.classList.add("about");
  homeContainer.appendChild(about);

  const aboutTitle = document.createElement("h2");
  aboutTitle.innerHTML = "ABOUT LOLA'S GRANOLAS";
  about.appendChild(aboutTitle);

  const aboutContent = document.createElement("p");
  aboutContent.innerHTML =
    "Lola always loved to eat granola, so she decided to make a shop to share with everyone.";
  about.appendChild(aboutContent);
}

module.exports.mainPageLoad = mainPageLoad;
