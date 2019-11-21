function prepareCalc() {
    let h = window.innerHeight;
    let w = window.innerWidth;
    let randdict = {};
    return calculate(randdict, h, w, 0);

}

function addPhoto(x, y) {
    cord = x.toString() + y.toString();
    var z = document.createElement("IMG");
    z.setAttribute("src", "static/spec.jpg");
    z.setAttribute("width", "304");
    z.setAttribute("height", "228");
    z.setAttribute("alt", "Testing");
    z.setAttribute("id", cord);
    $("img").last().offset({top: y, left: x});
    document.body.appendChild(z)
}

function addingToList() {
    for (x = 0; x < Object.keys(test).length; x++) {
        if (Number(test[x])) {
            //console.log(x);
            addPhoto(x, test[x]);
        }
    }

}

function calculate(randdict, h, w, n) {
    while (n < 1000) {
        let tempX = Math.floor(Math.random() * w);
        let tempY = Math.floor(Math.random() * h);
        if (randdict[tempX] !== tempY)
            randdict[tempX] = tempY;
        n++;
    }
    return randdict;
}