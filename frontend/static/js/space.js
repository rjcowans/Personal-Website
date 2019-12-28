let h = 0;
let w = 0;
function adjustPlanets() {
    h = window.innerHeight -20;
    w = window.innerWidth - 20;
    $(".GitHub").offset({top:h/2,left: 20});
    $(".AboutButton").offset({top:h-150,left: w/2 });
    $(".Intro").offset({top:(h/2) - 400 ,left:w/2 - 200 });
    $(".contactButton").offset({top:(h/2) - 50,left: w - 200 });
    arcem();
}

function arcem() {
    new CircleType(document.getElementById("wrapGitHub")).radius(100);
}