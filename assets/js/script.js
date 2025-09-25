'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// ⏰ Update Arizona Time in Real-Time
function updateArizonaTime() {
  const now = new Date();

  const options = {
    timeZone: "America/Phoenix",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat([], options);
  const timeElement = document.getElementById("local-time");

  if (timeElement) {
    timeElement.textContent = formatter.format(now);
  }
}

// Initial call
updateArizonaTime();

// Update every second
setInterval(updateArizonaTime, 1000);

// 💬 Update Quotes in Real-Time

document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    "Without data, you're just another person with an opinion. - W. Edwards Deming",
    "Data is the new oil. - Clive Humby",
    "In God we trust, all others must bring data. - W. Edwards Deming",
    "The goal is to turn data into information, and information into insight. - Carly Fiorina",
    "Numbers have an important story to tell. They rely on you to give them a voice. - Stephen Few",
    "Most people use statistics the way a drunk person uses a lamppost; more for support than illumination.",
    "A Problem Well Stated is Half Solved - Charles Kettering",
    "In god we trust. All others must bring data - W. Edwards Deming",
    "Information is the oil of the 21st century, and analytics is the combustion engine. - Peter Sondergaard, Senior Vice President and Global Head of Research at Gartner, Inc.",
    "No data is clean, but most is useful. - Dean Abbott, Co-founder and Chief Data Scientist at SmarterHQ",
    "It is a capital mistake to theorize before one has data. - Sherlock Holmes in 'A study in Scarlet' by Arthur Conan Doyle",
    "Too often we forget that genius, too, depends upon the data within its reach, that even Archimedes could not have devised Edison’s inventions. - Ernest Dimnet",
    "With data collection, ‘the sooner the better’ is always the best answer. - Marissa Mayer, IT executive and co-founder of Lumi Labs",
    "Contact data ages like fish, not wine... it gets worse as it gets older, not better",
    "Torture the data, and it will confess to anything. - Ronald Coase",
    "The data analysis motto: If at first, you don’t succeed; call it version 1.0",
    "A SQL query walks into a bar, walks up to two tables, and asks, “Can I join you?”",
    "Why should you take a data scientist with you into the jungle? Answer: They can take care of Python problems",
    "If you can't explain it to a six-year-old, you don't understand it well enough. - Albert Einstein",
    "The question is not: 'What are the findings?' but 'Why is the data messy'",
    ""
  ];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("data-quote").innerText = randomQuote;
});
