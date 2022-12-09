const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка тёмной темы на уровне сист настроек
if (window.matchMedia && window.matchMedia("(prefers-color-sheme: dark)").matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
}

// 2. Проверка тёмной темы в локал стораж
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove("dark");
}


//Если меняются сист настройки, то меняем тему
window.matchMedia("(prefers-color-sheme: dark)")
      .addEventListener('change', (event) => {
            const newColorSheme = event.matches ? "dark" : "light";

            if (newColorSheme === 'dark') {
                btnDarkMode.classList.add('dark-mode-btn--active');
                document.body.classList.add("dark");
                localStorage.setItem('darkMode', 'dark')
            } else {
                btnDarkMode.classList.remove('dark-mode-btn--active');
                document.body.classList.remove("dark");
                localStorage.setItem('darkMode', 'light')
            }
        });

//включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }

}