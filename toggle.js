//For Main Menu
const navMenu = document.querySelector(".nav-menu-btn");
const nav = document.querySelector("nav");
const topBarTitle = document.querySelector('h2');

// For SubMenu
const conBtn = document.querySelector(".con-submenu-btn");
const showConSub = document.querySelector("div.con");

const intBtn = document.querySelector(".int-submenu-btn");
const showIntSub = document.querySelector("div.int");

const workBtn = document.querySelector(".work-submenu-btn");
const showWorkSub = document.querySelector("div.work");

const userBtn = document.querySelector(".user-submenu-btn");
const showUserSub = document.querySelector("div.userSub");


// Open Main Menu
var click = false;
navMenu.onclick = function() {
	nav.classList.toggle('show-menu');
	if(!click) {
		click = true;
		topBarTitle.textContent = "Recruitment"
	} else {
		click = false;
		topBarTitle.textContent = "Talent Point"
	}
}

// Dropdowntoggles for submenu
conBtn.onclick = function() {
	showConSub.classList.toggle("show-sub");
	conBtn.classList.toggle("rotate-x");
};
intBtn.onclick = function() {
	showIntSub.classList.toggle("show-sub");
	intBtn.classList.toggle("rotate-x");
};
workBtn.onclick = function() {
	showWorkSub.classList.toggle("show-sub");
	workBtn.classList.toggle("rotate-x");
};
userBtn.onclick = function() {
	showUserSub.classList.toggle("show-sub");
	userBtn.classList.toggle("flip-up");
};