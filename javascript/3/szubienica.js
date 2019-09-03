var haslo = "Bez pracy nie ma kołaczy"; //No pain no gain (bez bólu brak zysku)
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";

for (let i = 0; i < haslo.length; i++) {
    //haslo[i] - niebezpieczne - łańcuchy nie są traktowane jak tablice, 
    //dlatego niebezpieczne jest stosownie nawiasów kwadratowych do łańcuchów
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}

function wypisz_haslo() {
    document.getElementById("plansza_board").innerHTML = haslo1; //innerHTML (wewnętrznyHTML)
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function start() {

    var tresc_diva = "";

    for (let i = 0; i < 35; i++) {
        var element = "lit" + i;
        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if ((i + 1) % 7 == 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
    }

    document.getElementById("alfabet_alphabet").innerHTML = tresc_diva;


    wypisz_haslo();
}

function sprawdz(nr) {
    //alert(nr); //alert - alarm, wbudowana funkcja js, wyświetla okno dialogowe
    for (let i = 0; i < dlugosc; i++) {
        if (haslo.charAt(i)==litery[nr])
        {
            //haslo1[i] = litery[nr]; //niebezpieczne, ponieważ haslo1 to napis, a nie tablica
            haslo1.charAt(i) = litery[nr];
        }     
    }

    wypisz_haslo();
}
