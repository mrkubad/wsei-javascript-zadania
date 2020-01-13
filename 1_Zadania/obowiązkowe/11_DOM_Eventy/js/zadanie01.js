document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// Po pierwszym przeniesieniu do znacznika <head> elementy nie były załadowane, przez co JS zwracał error.
// Po dodaniu eventu DOMContentLoaded, skrypt działa, bo wszystkie zakcje zawarte w callbacku tego eventu są wykonywane po załadowaniu DOM'a
// Po przeniesieniu na koniec pliku, żadnych zmian gdyż nad wszystkim czuwa event DOMContentLaoded