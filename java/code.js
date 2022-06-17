function Area() {
    let length = parseInt(document
        .getElementById("length").value);

    let width = parseInt(document
        .getElementById("width").value);

    let height = parseInt(document
        .getElementById("height").value);

    console.log(typeof(side1));
    let s = (length + width + height) / 2;

    let area = Math.sqrt(s * ((s - length) 
            * (s - width) * (s - height)));

  let area1 = area.toFixed(2)

    document.getElementById(
        "display").innerHTML = area1;
}