$( function() {
//dzialanie przyciskow
  $("#pokazPanel").click(function(){
    $("#panelSterowania").css("display", "block"),
    $("#tekst").css("display", "none");
  });

  $("#wlacznik").click(function() {
    $("#swiatlo").hide()
  });

  $("#wylacznik").click(function() {
    $("#swiatlo").show()
  });

//modyfikowanie zarowki
  function ModyfikacjaZarowki(){
    var wartosc = $("#suwakZmianaKoloru").slider("value");
    var wartosc1 = $("#suwakZmianaJasnosci").slider("value");
    $("#swiatlo").css("background-color", "rgba(222, 184," + wartosc + "," + wartosc1 + ")");
    $("#swiatlo").css("box-shadow", "0 0 200px rgba(222, 184," + wartosc + "," + wartosc1 + ")");
  }

  $("#suwakZmianaKoloru").slider({
    range: "min",
    min: 40,
    max: 190,
    value: 135,
    slide: ModyfikacjaZarowki,
    change: ModyfikacjaZarowki
  });

  $("#suwakZmianaJasnosci").slider({
    range: "min",
    min: 0.00,
    max: 1.00,
    value: 1,
    step: 0.001,
    slide: ModyfikacjaZarowki,
    change: ModyfikacjaZarowki
  });
});

//telefon
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

if(detectMob() == true) {
    while(true){
      alert("Niestety ta strona nie jest dostępna na urządzeniach mobilnych.");
    }
}
