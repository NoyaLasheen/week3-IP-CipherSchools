let type = document.querySelector('header');
console.log(type);

let classSelector = document.querySelector('.header-content');
console.log(classSelector);

let idSelector = document.querySelector('#header');
console.log(idSelector);

let decendent = document.querySelector('.header-content p');
console.log(decendent);

let All = document.querySelectorAll('main p');
console.log(All);

let bg = document
.querySelectorAll('main p')
.forEach((item) => (item.style.backgroundColor = 'blue'));

let color = document
.querySelectorAll('main p:last-child')
.forEach((item) => (item.style.color = 'white'));

// Older MeEthods
let oldtype = document.getElementsByTagName("header");
console.log(oldtype);

let oldclass = document.getElementsByClassName("header-content");
console.log(oldclass);

let oldid = document.getElementById('header');
console.log(oldid);

// Modifying classes in JS
let className = document.querySelector('header').className;
console.log(className)

let classList = document.querySelector('header').classList;
console.log(classList)

let methodone = document.querySelector('main p').classList.add('newclass')

// let methodtwo = document.querySelector('main p').classList.remove('newclass')

let methodthree = document.querySelector('main p').classList.replace('newclass', 'oldclass');

// Modifying elments & attributes in JS

let attribute = document.querySelector('img').attributes;
console.log(attribute);

let hasattribute = document.querySelector('img').hasAttribute('src');
console.log(hasattribute);

let getattribute = document.querySelector('img').getAttribute('src');
console.log(getattribute);

let setattribute = document
.querySelector('img')
.setAttribute('src', 'https://www.w3schools.com/html/img_food.jpg');

let removeattribute = document
.querySelector('img')
.removeAttribute('src', 'https://www.w3schools.com/html/img_food.jpg');





