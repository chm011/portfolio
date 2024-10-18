//given 
console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

//find the link to the current page
let navLinks = $$('nav a')

let currentLink = navLinks.find(
    (a) => a.host === location.host && a.pathname === location.pathname, 
);

//add current class to page links
if(currentLink) {
    currentLink?.classList.add('current');
}

//adding the navigation menu
let pages = [
    {url: '', title: 'Main'},
    {url: 'projects/', title: 'Projects'},
    {url: 'resume/', title: 'Resume'},
    {url: 'contacts', title: 'Contacts'}
]

let nav = document.createElement('nav');
document.body.prepend(nav);

//finding the home page
const ARE_WE_HOME = document.documentElement.classList.contains('home');

//Add links to nav
for (let p of pages) {
    let url = p.url;
    let title = p.title;
    //TODO create link and add it to nav
}

url = !ARE_WE_HOME && !url.startsWith('http') ? '../' + url : url;


//create link and add it to nav
let a = document.createElement('a');
a.href = url;
a.textContent = title;
nav.append(a);

//highlight current page
a.classList.toggle(
    'current',
    a.host === location.host && a.pathname === location.pathname
  );


//opening external links in a new tab
if (a.host !== location.host) {
    a.target = '_blank';
  }
}