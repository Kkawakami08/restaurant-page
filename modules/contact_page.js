function contactPageLoad() {
  content.innerHTML = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  content.appendChild(contactContainer);

  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "Need to get you some granola?";
  contactContainer.appendChild(contactHeader);

  const phoneHeader = document.createElement("h3");
  phoneHeader.textContent = "Call us at:";
  contactContainer.appendChild(phoneHeader);

  const phoneNumber = document.createElement("h4");
  phoneNumber.textContent = "555-555-5555";
  contactContainer.appendChild(phoneNumber);
}

module.exports.contactPageLoad = contactPageLoad;
