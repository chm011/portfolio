console.log('IT’S ALIVE!'); // Check if script is running

// Utility function to select elements
function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// Normalize paths to avoid trailing slash issues
function normalizePath(path) {
  return path.replace(/\/+$/, '').replace(/^\/index\.html$/, '');
}

// Check if we are on the home page
const ARE_WE_HOME = normalizePath(location.pathname) === '';

// Array of pages for the navigation menu
let pages = [
  { url: '../index.html', title: 'Home' },
  { url: '../projects/index.html', title: 'Projects' },
  { url: '../resume/index.html', title: 'Resume' },
  { url: '../contacts/index.html', title: 'Contacts' },
  { url: 'https://github.com/chm011', title: 'Github Profile' }
];

// Create the <nav> element and add it to the body
console.log('Creating <nav> element...');
let nav = document.createElement('nav');
document.body.prepend(nav);
console.log('<nav> element created and added to the body.');

// Add links to the <nav>
for (let p of pages) {
  let url = p.url;
  let title = p.title;

  console.log(`Creating link: ${title} -> ${url}`);

  // Create <a> element
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  nav.append(a); // Add link to <nav>

  // Highlight the current page link
  if (
    a.host === location.host &&
    normalizePath(a.pathname) === normalizePath(location.pathname)
  ) {
    console.log(`Marking ${title} as current`);
    a.classList.add('current');
  }

  // Open external links in a new tab
  if (a.host !== location.host) {
    a.target = '_blank';
  }
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
