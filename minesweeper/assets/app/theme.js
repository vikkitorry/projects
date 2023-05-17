const changeTheme = function() {
  const body = document.querySelector('body');
  const dark = document.querySelector('.dark');
  const light = document.querySelector('.light');
  dark.addEventListener('click', () => {
    if (!dark.classList.contains('active-btn')) {
      light.classList.remove('active-btn');
      dark.classList.add('active-btn');
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark')
    }
  });
  light.addEventListener('click', () => {
    if (!light.classList.contains('active-btn')) {
      dark.classList.remove('active-btn');
      light.classList.add('active-btn');
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light')
    }
  });
}

export {changeTheme};