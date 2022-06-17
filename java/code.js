function Area() {
    var length = parseInt(document
        .getElementById("length").value);

    var width = parseInt(document
        .getElementById("width").value);

    var height = parseInt(document
        .getElementById("height").value);

    console.log(typeof(side1));
    var s = (length + width + height) / 2;

    var area = Math.sqrt(s * ((s - length) 
            * (s - width) * (s - height)));

    document.getElementById(
        "display").innerHTML = area;
}