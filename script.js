const featuresDropDown = document.getElementById("features-down-arrow-link");
const companyDropDown = document.getElementById("company-down-arrow-link");
const arrowdownimgs = document.getElementsByClassName("down-arrow");

const mobileFeatures = document.getElementById(
  "mobile-features-down-arrow-link"
);
const mobileCompany = document.getElementById("mobile-company-down-arrow-link");

const dropdownfeatures = document.getElementsByClassName("dropdown")[0];
const dropdowncompany = document.getElementsByClassName("dropdown")[1];

const dropDownMobileFeatures = document.getElementsByClassName("mobile-ul")[0];
const dropDownMobileCompany = document.getElementsByClassName("mobile-ul")[1];

const dropDownFeatures = () => {
  arrowdownimgs[0].src = "images/icon-arrow-up.svg";
  dropdownfeatures.classList.toggle("open-features");
  if (!dropdownfeatures.classList.contains("open-features")) {
    arrowdownimgs[0].src = "images/icon-arrow-down.svg";
  }
};

const dropDownCompany = () => {
  arrowdownimgs[1].src = "images/icon-arrow-up.svg";
  dropdowncompany.classList.toggle("open-company");
  if (!dropdowncompany.classList.contains("open-company")) {
    arrowdownimgs[1].src = "images/icon-arrow-down.svg";
  }
};

const mobileDropDownFeatures = () => {
  arrowdownimgs[2].src = "images/icon-arrow-up.svg";
  dropDownMobileFeatures.classList.toggle("open-mobile-features");
  if (!dropDownMobileFeatures.classList.contains("open-mobile-features")) {
    arrowdownimgs[2].src = "images/icon-arrow-down.svg";
  }
};

const mobileDropDownCompany = () => {
  arrowdownimgs[3].src = "images/icon-arrow-up.svg";
  dropDownMobileCompany.classList.toggle("open-mobile-company");
  if (!dropDownMobileCompany.classList.contains("open-mobile-company")) {
    arrowdownimgs[3].src = "images/icon-arrow-down.svg";
  }
};

featuresDropDown.addEventListener("click", dropDownFeatures);
companyDropDown.addEventListener("click", dropDownCompany);

mobileFeatures.addEventListener("click", mobileDropDownFeatures);
mobileCompany.addEventListener("click", mobileDropDownCompany);

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

const navToggle = () => {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
};

btn.addEventListener("click", navToggle);
