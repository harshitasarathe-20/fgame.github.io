let rotateAngle = 0;


function rotate() {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", rotateAngle)
    rotateAngle = rotateAngle + 3;
    var shape = document.getElementById('line').style.transform = "rotate(" + rotateAngle + "deg)";
    var shape = document.getElementById('molecules').style.transform = "rotate(" + rotateAngle + "deg)";


}


function rotateR() {
    rotateAngle = rotateAngle - 3;
    var shape = document.getElementById('line').style.transform = "rotate(" + rotateAngle + "deg)";
    var shape = document.getElementById('molecules').style.transform = "rotate(" + rotateAngle + "deg)";


}

let angle = 0;

function rotateL() {
    angle = angle + -3;
    var shape = document.getElementById('line').style.transform = "rotate(" + angle + "deg)";
    var shape = document.getElementById('molecules').style.transform = "rotate(" + angle + "deg)";


}

function rotateLeft() {
    angle = angle - -3;
    var shape = document.getElementById('line').style.transform = "rotate(" + angle + "deg)";
    var shape = document.getElementById('molecules').style.transform = "rotate(" + angle + "deg)";


}

function rotateFinal() {
    console.log("finalllllllllllllllllllllllllll", rotateAngle, angle)
    let finalRotate = rotateAngle + angle
    var shape = document.getElementById('line').style.transform = 'rotate(0deg)';
    var shape = document.getElementById('molecules').style.transform = 'rotate(0deg)';
    console.log("finalllllllllllllllllllllllllll", shape)
}
function increaseValue1() {

    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    var value = parseInt(document.getElementById('number').value, 10); // H
    var value1 = parseInt(document.getElementById('num').value, 10); // O
    var value2 = parseInt(document.getElementById('no').value, 10); // H2O

    value = isNaN(value) ? 0 : value;
    if (value > 2)
        return;

    value++;
    
    document.getElementById('number').value = value;

    if (value == 1) {
        rotateL();
        var x = document.getElementById('h1').style.visibility = "visible";
        var y = document.getElementById('hyd1').style.visibility = "visible";
        var z = document.getElementById('hyd11').style.visibility = "visible";
    }
    else if (value == 2) {
        rotateL();
        var x = document.getElementById('h2').style.visibility = "visible";
        var y = document.getElementById('hyd2').style.visibility = "visible";
        var z = document.getElementById('hyd22').style.visibility = "visible";
    }
    else if (value == 3) {
        rotateL();
        var x = document.getElementById('h3').style.visibility = "visible";
        var y = document.getElementById('hyd3').style.visibility = "visible";
        var z = document.getElementById('hyd33').style.visibility = "visible";
    }
    else {
        rotateL();
        var x = document.getElementById('h4').style.display = "inline";
    }
    if (value == 2 && value1 == 1 && value2 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('number').value = value
        rotateFinal()
        return
    }
}

function decreaseValue1() {
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx11111")
    var value = parseInt(document.getElementById('number').value, 10); // H
    var value1 = parseInt(document.getElementById('num').value, 10); // O
    var value2 = parseInt(document.getElementById('no').value, 10); // H2O

    value = isNaN(value) ? 0 : value;
    if (value < 1)
        return;
    value--;

    

    document.getElementById('number').value = value;
    if (value == 2) {
        rotateLeft();
        var x = document.getElementById('h3').style.visibility = "hidden";
        var z = document.getElementById('hyd3').style.visibility = "hidden";
        var y = document.getElementById('hyd33').style.visibility = "hidden";

    }
    else if (value == 1) {
        rotateLeft();
        var x = document.getElementById('h2').style.visibility = "hidden";
        var z = document.getElementById('hyd2').style.visibility = "hidden";
        var y = document.getElementById('hyd22').style.visibility = "hidden";
    }
    else if (value == 0) {
        rotateLeft();
        var x = document.getElementById('h1').style.visibility = "hidden";
        var z = document.getElementById('hyd1').style.visibility = "hidden";
        var y = document.getElementById('hyd11').style.visibility = "hidden";
    }
    else {
        rotateLeft();
    }

    if (value == 2 && value1 == 1 && value2 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('number').value = value
        rotateFinal()
        return
    }
}




function increaseValue2() {
    // console.log("222222222222222222222222222222222222222")
    var value = parseInt(document.getElementById('num').value, 10);//O
    var value1 = parseInt(document.getElementById('number').value, 10); // H
    var value2 = parseInt(document.getElementById('no').value, 10);//H2O

    value = isNaN(value) ? 0 : value;
    if (value > 2)
        return;

    value++;
   
    document.getElementById('num').value = value;

    if (value == 1) {
        rotateL();
        var x = document.getElementById('o1').style.visibility = "visible";
        var y = document.getElementById('oxy1').style.visibility = "visible";
        var z = document.getElementById('oxy11').style.visibility = "visible";
    }
    else if (value == 2) {
        rotateL();
        var x = document.getElementById('o2').style.visibility = "visible";
        var y = document.getElementById('oxy2').style.visibility = "visible";
        var z = document.getElementById('oxy22').style.visibility = "visible";
    }
    else if (value == 3) {
        rotateL();
        var x = document.getElementById('o3').style.visibility = "visible";
        var y = document.getElementById('oxy3').style.visibility = "visible";
        var z = document.getElementById('oxy33').style.visibility = "visible";
    }
    else {
        rotateL();
        var x = document.getElementById('o4').style.visibility = "visible";
    }

    if (value == 1 && value1 == 2 && value2 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('num').value = value
        rotateFinal()
        return
    }
}

function decreaseValue2() {
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2d")
    var value = parseInt(document.getElementById('num').value, 10); //O
    var value1 = parseInt(document.getElementById('number').value, 10); // H
    var value2 = parseInt(document.getElementById('no').value, 10); //H2O

    value = isNaN(value) ? 0 : value;
    if (value < 1)
        return;
    value--;
    
    document.getElementById('num').value = value;
    if (value == 2) {
        rotateLeft();
        var x = document.getElementById('o3').style.visibility = "hidden";
        var y = document.getElementById('oxy3').style.visibility = "hidden";
        var z = document.getElementById('oxy33').style.visibility = "hidden";

    }
    else if (value == 1) {
        rotateLeft();
        var x = document.getElementById('o2').style.visibility = "hidden";
        var y = document.getElementById('oxy2').style.visibility = "hidden";
        var z = document.getElementById('oxy22').style.visibility = "hidden";
    }
    else if (value == 0) {
        rotateLeft();
        var x = document.getElementById('o1').style.visibility = "hidden";
        var y = document.getElementById('oxy1').style.visibility = "hidden";
        var z = document.getElementById('oxy11').style.visibility = "hidden";
    }
    else {
        rotateLeft();
    }
    if (value == 1 && value1 == 2 && value2 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('num').value = value
        rotateFinal()
        return
    }
}

function increaseValue3() {
    var value = parseInt(document.getElementById('no').value, 10); //H2O
    var value1 = parseInt(document.getElementById('number').value, 10); // H
    var value2 = parseInt(document.getElementById('num').value, 10); // 0

    value = isNaN(value) ? 0 : value;
    /*value > 2 ? value = 2 : '';*/
    if (value > 2)
        return;

    value++;
  
    document.getElementById('no').value = value;
    if (value == 1) {
        rotate();
        var x = document.getElementById('m1').style.visibility = "visible";
        var y = document.getElementById('w1').style.visibility = "visible";
        var m = document.getElementById('w11').style.visibility = "visible";
        var n = document.getElementById('w111').style.visibility = "visible";
    }
    else if (value == 2) {
        rotate();
        var x = document.getElementById('m2').style.visibility = "visible";
        var y = document.getElementById('w2').style.visibility = "visible";
        var m = document.getElementById('w22').style.visibility = "visible";
        var n = document.getElementById('w222').style.visibility = "visible";
    }
    else if (value == 3) {
        rotate();
        var x = document.getElementById('m3').style.visibility = "visible";
        var m = document.getElementById('w3').style.visibility = "visible";
        var y = document.getElementById('w33').style.visibility = "visible";
        var n = document.getElementById('w333').style.visibility = "visible";
    }
    else {
        rotate();

    }
    if (value == 2 && value1 == 2 && value2 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('no').value = value
        rotateFinal()
        return
    }

}

function decreaseValue3() {

    var value = parseInt(document.getElementById('no').value, 10); // H2O
    var value1 = parseInt(document.getElementById('number').value, 10); // H
    var value2 = parseInt(document.getElementById('num').value, 10); // 0

    value = isNaN(value) ? 0 : value;

    if (value < 1)
        return;

    value--;
   
    document.getElementById('no').value = value;
    if (value == 2) {
        rotateR();
        var x = document.getElementById('m3').style.visibility = "hidden";
        var y = document.getElementById('w3').style.visibility = "hidden";
        var z = document.getElementById('w33').style.visibility = "hidden";
        var m = document.getElementById('w333').style.visibility = "hidden";
    }
    else if (value == 1) {
        rotateR();
        var x = document.getElementById('m2').style.visibility = "hidden";
        var y = document.getElementById('w2').style.visibility = "hidden";
        var z = document.getElementById('w22').style.visibility = "hidden";
        var m = document.getElementById('w222').style.visibility = "hidden";
    }
    else if (value == 0) {
        rotateR();
        var x = document.getElementById('m1').style.visibility = "hidden";
        var y = document.getElementById('w1').style.visibility = "hidden";
        var z = document.getElementById('w11').style.visibility = "hidden";
        var m = document.getElementById('w111').style.visibility = "hidden";
    }
    else {
        rotateR();

    }
    if (value == 2 && value1 == 2 && value2 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value, value1, value2)
        document.getElementById('no').value = value
        rotateFinal()
        return
    }



}



    function submit() {
        var value = parseInt(document.getElementById('no').value, 10); // H2O
        var value1 = parseInt(document.getElementById('number').value, 10); // H
        var value2 = parseInt(document.getElementById('num').value, 10); // O

        if(value == 2 && value1 == 2 && value2 == 1){
           
            right();
            var val = document.getElementById('nxt').style.visibility = "visible"; //NEXT BUTTON
           
        }
        else {
            wrong();

        }

    }

function right() {
    swal({
        title: "Good Job!",
        text: "Water(H2O) is a polar inorganic, transparent, tasteless, odorless, and nearly colorless chemical substance.The bulk of the world’s water use is for agriculture, industry, and electricity.",
        icon: "correct.jpg",
        button: "OK",
    });
}

function wrong() {
    swal({
        icon: 'incorrect.jpg',
        title: 'Incorrect',
        text: 'Try Again!',
        button:"OK"
    });
}
