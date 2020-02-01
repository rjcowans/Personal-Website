let h = 0;
let w = 0;
function adjustPlanets() {
    h = window.innerHeight -20;
    w = window.innerWidth - 50;
    $(".GitHub").offset({top:h/2-50, left: 20});
    $("#wrapGitHub").offset({top:(h/2) + 160,left: -80});
    $(".AboutButton").offset({top:h-200,left: w/2 });
    $("#wrapAboutMe").offset({top:h-100,left: (w/2)-125});
    $(".Intro").offset({top:(h/2) - 400,left:w/2 - 200 });
    $("#wrapIntro").offset({top:(h/2) -55, left: w/2 - 200 });
    $(".contactButton").offset({top:(h/2) - 50,left: w - 200 });
    $("#wrapContact").offset({top:(h/2)-10,left: w -300 });
    arcem();
}

function arcem() {
    new CircleType(document.getElementById("wrapGitHub")).dir(-1).radius(125);
    new CircleType(document.getElementById("wrapAboutMe")).dir(-1).radius(100);
    new CircleType(document.getElementById("wrapIntro")).dir(-1).radius(200);
    new CircleType(document.getElementById("wrapContact")).dir(-1).radius(88);
}