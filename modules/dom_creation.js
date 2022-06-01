function initialPageLoad() {
  const content = document.getElementById("content");

  const restaurantImage = document.createElement("img");
  restaurantImage.src = "../src/restaurant.jpeg";
  content.appendChild(restaurantImage);

  const headline = document.createElement("h1");
  headline.innerHTML = "Welcome to our restaurant!";
  content.appendChild(headline);

  const copy = document.createElement("p");
  copy.innerHTML = "Never opened, established in 2020.";
  content.appendChild(copy);
}

module.exports.initialPageLoad = initialPageLoad;
