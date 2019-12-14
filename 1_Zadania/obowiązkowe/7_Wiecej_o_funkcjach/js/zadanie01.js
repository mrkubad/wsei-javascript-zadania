
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Zadeklarowanie funckji sortArray
function sortArray() {

    //Stworzenie tablicy, która zwiera liczby całkowite 41,3,6 ...
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Wywołanie operacji sortowania z funkcją jako argument
    points.sort(function (a, b) {
        //Zwrócenie różnicy pomiędzy kolejnymi elementami tablicy
        return a - b;
    });

    //Zwrócenie posortowanej tablicy points
    return points;
}

//Wywołanie funkcji sortArray
sortArray();
