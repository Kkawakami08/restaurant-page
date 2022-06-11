function mainPageLoad() {
  //header
  const header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  const circleImage = document.createElement("img");
  circleImage.src = "../src/circle-lola.png";
  circleImage.classList.add("circle-img");
  header.appendChild(circleImage);

  const restaurantName = document.createElement("h1");
  restaurantName.innerHTML = "LOLA'S GRANOLAS";
  header.appendChild(restaurantName);

  //page selection
  const pageSelect = document.createElement("div");
  pageSelect.classList.add("page-select");
  header.appendChild(pageSelect);

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "MENU";
  menuBtn.classList.add("page-select-btn");
  pageSelect.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "CONTACT";
  contactBtn.classList.add("page-select-btn");
  pageSelect.appendChild(contactBtn);

  //hero image
  const heroImg = document.createElement("img");
  heroImg.src = "../src/hero-lola.png";
  heroImg.classList.add("hero-img");
  content.appendChild(heroImg);

  //about section
  const about = document.createElement("div");
  about.classList.add("about");
  content.appendChild(about);

  const aboutTitle = document.createElement("h2");
  aboutTitle.innerHTML = "ABOUT LOLA'S GRANOLAS";
  about.appendChild(aboutTitle);

  const aboutContent = document.createElement("p");
  aboutContent.innerHTML =
    "Lola always loved to eat granola, so she decided to make a shop to share with everyone.";
  about.appendChild(aboutContent);
}

module.exports.mainPageLoad = mainPageLoad;
