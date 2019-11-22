function prepareCalc() {
    let h = window.innerHeight -20;
    let w = window.innerWidth-20;
    let b = (h * w );
    let a = Math.floor(b*.75);
    let randdict = {};
    randomPos = calculate(randdict, h, w, 0,a);
    addingToList(randomPos);
    return false;
}

function addPhoto(x, y) {
    var z = document.createElement("IMG");
    z.setAttribute("src", "static/spec.png");
    z.setAttribute("width", "20");
    z.setAttribute("height", "20");
    z.setAttribute("alt", "Star_Cord"+x.toString()+"_"+y.toString());
    $("img").last().offset({top: y, left: x});
    //$("img").last().css();
    document.body.appendChild(z)
}

function addingToList(test) {
    for (x = 0; x < Object.keys(test).length; x++) {
        if (Number(test[x])) {
            //console.log(x);
            addPhoto(x, test[x]);
        }
    }

}

function calculate(randdict, h, w, n,a) {
    while (n < a) {
        let tempX = Math.floor(Math.random() * w);
        let tempY = Math.floor(Math.random() * h);
        if (randdict[tempX] !== tempY) {
            randdict[tempX] = tempY;
            n++
        }
    }
    return randdict;
}