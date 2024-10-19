console.log('IT’S ALIVE!'); // Check if script is running

// Utility function to select elements
function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

//Automatic current page link
let navLinks = $$("nav a")
let currentLink = navLinks.find(
    (a) => a.host === location.host && a.pathname === location.pathname,
  );
 if (currentLink) {
    currrentLink?.classList.add('current');
 }

//Automatic Navigation Menu
let pages = [
    { url: '', title: 'Home' },
    { url: '/portfolio/projects/index.html', title: 'Projects' },
    { url: 'resume/', title: 'Resume' },
    { url: 'contacts/', title: 'Contacts' },
    { url: 'https://github.com/chm011', title: 'Github Profile' }
  ];
  
let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
    let url = p.url;
    let title = p.title; //TODO create link and add it to nav
}

//Create link adn add it to nav
//nav.insertAdjacentHTML('beforeend', `<a href="${url}">${title}</a>`);
let a = document.createElement('a');
a.href = url;
a.textContent = title;
nav.append(a); 

//Are we home
const ARE_WE_HOME = document.documentElement.classList.contains('home');
if (!ARE_WE_HOME && !url.startsWith('http')) {
    url = '../' + url;
  }
  

// Highlight the current page link
a.classList.toggle(
    'current',
    a.host === location.host && a.pathname === location.pathname,
  );

// Open external links in a new tab
if (a.host !== location.host) {
    a.target = '_blank';
  }


// Insert the theme switcher into the body
document.body.insertAdjacentHTML(
  'beforeend', // Use 'beforeend' to prevent overwriting <nav>
  `
  <label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem;">
    Theme:
    <select id="theme-switcher">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>`
);

// Function to set the color scheme
function setColorScheme(scheme) {
  document.documentElement.style.setProperty('color-scheme', scheme);
}

// Handle theme switching
const select = document.querySelector('#theme-switcher');

if (select) {
  const savedScheme = localStorage.getItem('colorScheme');
  if (savedScheme) {
    setColorScheme(savedScheme);
    select.value = savedScheme;
  }

  select.addEventListener('input', function (event) {
    const scheme = event.target.value;
    setColorScheme(scheme);
    console.log('Color scheme changed to', scheme);
    localStorage.setItem('colorScheme', scheme);
  });
}
