const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//select the anchors 
let navigation = document.querySelectorAll('a');
//select each item in anchor and link it to text content 
navigation[0].textContent= siteContent['nav']['nav-item-1'];
navigation[1].textContent= siteContent['nav']['nav-item-2'];
navigation[2].textContent= siteContent['nav']['nav-item-3'];
navigation[3].textContent= siteContent['nav']['nav-item-4'];
navigation[4].textContent= siteContent['nav']['nav-item-5'];
navigation[5].textContent= siteContent['nav']['nav-item-6']; 
// select the h1 
let ctaTxt= document.querySelector('.cta h1');
ctaTxt.textContent=siteContent['cta']['h1'];
// select the button
let ctaBtn=document.querySelector('.cta button');
ctaBtn.textContent=siteContent['cta']['button'];
//select the image
let ctaImg=document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent['cta']['img-src']);
//main-content
//select h4
let mainH4=document.querySelectorAll('.main-content h4');
mainH4[0].textContent=siteContent['main-content']['features-h4'];
mainH4[1].textContent=siteContent['main-content']['about-h4'];
mainH4[2].textContent=siteContent['main-content']['services-h4'];
mainH4[3].textContent=siteContent['main-content']['product-h4'];
mainH4[4].textContent=siteContent['main-content']['vision-h4'];
//select p tags
let mainP=document.querySelectorAll('.main-content p');
mainP[0].textContent=siteContent['main-content']['features-content'];
mainP[1].textContent=siteContent['main-content']['about-content'];
mainP[2].textContent=siteContent['main-content']['services-content'];
mainP[3].textContent=siteContent['main-content']['product-content'];
mainP[4].textContent=siteContent['main-content']['vision-content'];
let mainImg=document.getElementById('middle-img');
//add image
mainImg.setAttribute('src',siteContent['main-content']['middle-img-src'])
// contact section
//get h4
let contactHeader=document.querySelector('.contact h4');
contactHeader.textContent=siteContent['contact']['contact-h4'];
//get p
let contactContent=document.querySelectorAll('.contact p');
contactContent[0].textContent=siteContent['contact']['address'];
contactContent[1].textContent=siteContent['contact']['phone'];
contactContent[2].textContent=siteContent['contact']['email'];
// footer
let copys=document.querySelector('footer p');
copys.textContent=siteContent['footer']['copyright'];
// change text green 
navigation.forEach(currentValue=>{
currentValue.style.color="green"
})
// add 2 nav items

const newA=document.createElement('a');

newA.textContent="Learn more";
const nav1=document.querySelector('nav');
newA.style.color="green";
nav1.append(newA);

// button 2 
const firstA=document.createElement('a');

firstA.textContent="Great Idea";
const navs=document.querySelector('nav');
firstA.style.color="green";
navs.prepend(firstA);

