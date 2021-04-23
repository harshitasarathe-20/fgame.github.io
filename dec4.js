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




function increaseValue2() {
    // console.log("222222222222222222222222222222222222222")
    var value = parseInt(document.getElementById('num').value, 10);//nacl
    var value2 = parseInt(document.getElementById('no').value, 10);//na
    var value3 = parseInt(document.getElementById('numb').value, 10); //clo2

    value = isNaN(value) ? 0 : value;
    if (value > 2)
        return;

    value++;

    document.getElementById('num').value = value;

    if (value == 1) {
        rotateL();
        var x = document.getElementById('o1').style.visibility = "visible";
        var y = document.getElementById('b1').style.visibility = "visible";
        var z = document.getElementById('b11').style.visibility = "visible";
        //var o = document.getElementById('b111').style.visibility = "visible";
        //var n = document.getElementById('b1111').style.visibility = "visible";
    }
    else if (value == 2) {
        rotateL();
        var x = document.getElementById('o2').style.visibility = "visible";
        var y = document.getElementById('b2').style.visibility = "visible";
        var z = document.getElementById('b22').style.visibility = "visible";
       // var o = document.getElementById('b222').style.visibility = "visible";
        //var n = document.getElementById('b2222').style.visibility = "visible";
    }
    else if (value == 3) {
        rotateL();
        var x = document.getElementById('o3').style.visibility = "visible";
        var y = document.getElementById('b3').style.visibility = "visible";
        var z = document.getElementById('b33').style.visibility = "visible";
       // var o = document.getElementById('b333').style.visibility = "visible";
       // var n = document.getElementById('b3333').style.visibility = "visible";
    }
    else {
        rotateL();
        var x = document.getElementById('o4').style.visibility = "visible";
    }
    if (value == 2 && value2 == 2 && value3 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('num').value = value
        rotateFinal()
        return
    }
}

function decreaseValue2() {
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2d")
    var value = parseInt(document.getElementById('num').value, 10); //nacl
  
    var value2 = parseInt(document.getElementById('no').value, 10); //na
    var value3 = parseInt(document.getElementById('numb').value, 10); //cl2

    value = isNaN(value) ? 0 : value;
    if (value < 1)
        return;
    value--;

    document.getElementById('num').value = value;
    if (value == 2) {
        rotateLeft();
        var x = document.getElementById('o3').style.visibility = "hidden";
        var y = document.getElementById('b3').style.visibility = "hidden";
        var z = document.getElementById('b33').style.visibility = "hidden";
        //var o = document.getElementById('b333').style.visibility = "hidden";
       // var n = document.getElementById('b3333').style.visibility = "hidden";

    }
    else if (value == 1) {
        rotateLeft();
        var x = document.getElementById('o2').style.visibility = "hidden";
        var y = document.getElementById('b2').style.visibility = "hidden";
        var z = document.getElementById('b22').style.visibility = "hidden";
       // var o = document.getElementById('b222').style.visibility = "hidden";
       // var n = document.getElementById('b2222').style.visibility = "hidden";
    }
    else if (value == 0) {
        rotateLeft();
        var x = document.getElementById('o1').style.visibility = "hidden";
        var y = document.getElementById('b1').style.visibility = "hidden";
        var z = document.getElementById('b11').style.visibility = "hidden";
        //var o = document.getElementById('b111').style.visibility = "hidden";
        //var n = document.getElementById('b1111').style.visibility = "hidden";
    }
    else {
        rotateLeft();
    }
    if (value == 2 &&  value2 == 2 && value3 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('num').value = value
        rotateFinal()
        return
    }
}

function increaseValue3() {
    var value = parseInt(document.getElementById('no').value, 10); //na
   
    var value2 = parseInt(document.getElementById('num').value, 10); //nacl
    var value3 = parseInt(document.getElementById('numb').value, 10); //cl2

    value = isNaN(value) ? 0 : value;
    
    if (value > 2)
        return;

    value++;

    document.getElementById('no').value = value;
    if (value == 1) {
        rotate();
        var x = document.getElementById('m1').style.visibility = "visible";
        var y = document.getElementById('c1').style.visibility = "visible";
       // var m = document.getElementById('c11').style.visibility = "visible";
        //var n = document.getElementById('c111').style.visibility = "visible";

    }
    else if (value == 2) {
        rotate();
        var x = document.getElementById('m2').style.visibility = "visible";
        var y = document.getElementById('c2').style.visibility = "visible";
        //var m = document.getElementById('c22').style.visibility = "visible";
        //var n = document.getElementById('c222').style.visibility = "visible";

    }
    else if (value == 3) {
        rotate();
        var x = document.getElementById('m3').style.visibility = "visible";
        var m = document.getElementById('c3').style.visibility = "visible";
        //var y = document.getElementById('c33').style.visibility = "visible";
        //var n = document.getElementById('c333').style.visibility = "visible";

    }
    else {
        rotate();

    }
    if (value == 2 && value2 == 2 && value3 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('no').value = value
        rotateFinal()
        return
    }

}

function decreaseValue3() {

    var value = parseInt(document.getElementById('no').value, 10); // na
    
    var value2 = parseInt(document.getElementById('num').value, 10); // nacl
    var value3 = parseInt(document.getElementById('numb').value, 10); //cl2

    value = isNaN(value) ? 0 : value;

    if (value < 1)
        return;

    value--;

    document.getElementById('no').value = value;
    if (value == 2) {
        rotateR();
        var x = document.getElementById('m3').style.visibility = "hidden";
        var y = document.getElementById('c3').style.visibility = "hidden";
        //var z = document.getElementById('c33').style.visibility = "hidden";
        //var n = document.getElementById('c333').style.visibility = "hidden";

    }
    else if (value == 1) {
        rotateR();
        var x = document.getElementById('m2').style.visibility = "hidden";
        var y = document.getElementById('c2').style.visibility = "hidden";
        //var z = document.getElementById('c22').style.visibility = "hidden";
        //var n = document.getElementById('c222').style.visibility = "hidden";

    }
    else if (value == 0) {
        rotateR();
        var x = document.getElementById('m1').style.visibility = "hidden";
        var y = document.getElementById('c1').style.visibility = "hidden";
        //var z = document.getElementById('c11').style.visibility = "hidden";
        //var n = document.getElementById('c111').style.visibility = "hidden";


    }
    else {
        rotateR();

    }
    if (value == 2 && value2 == 2 && value3 == 1) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('no').value = value
        rotateFinal()
        return
    }


}


function increaseValue4() {
    // console.log("222222222222222222222222222222222222222")
    var value3 = parseInt(document.getElementById('num').value, 10);//nacl
   
    var value2 = parseInt(document.getElementById('no').value, 10);//na
    var value = parseInt(document.getElementById('numb').value, 10); //cl2

    value = isNaN(value) ? 0 : value;
    if (value > 2)
        return;

    value++;

    document.getElementById('numb').value = value;

    if (value == 1) {
        rotate();
        var x = document.getElementById('n1').style.visibility = "visible";
        var y = document.getElementById('d1').style.visibility = "visible";
        var z = document.getElementById('d11').style.visibility = "visible";
    }
    else if (value == 2) {
        rotate();
        var x = document.getElementById('n2').style.visibility = "visible";
        var y = document.getElementById('d2').style.visibility = "visible";
        var z = document.getElementById('d22').style.visibility = "visible";
    }
    else if (value == 3) {
        rotate();
        var x = document.getElementById('n3').style.visibility = "visible";
        var y = document.getElementById('d3').style.visibility = "visible";
        var z = document.getElementById('d33').style.visibility = "visible";
    }
    else {
        rotate();
        var x = document.getElementById('o4').style.visibility = "visible";
    }
    if (value == 1 && value2 == 2 && value3 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('numb').value = value
        rotateFinal()
        return
    }
}

function decreaseValue4() {
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx2d")
    var value3 = parseInt(document.getElementById('num').value, 10); //nacl

    var value2 = parseInt(document.getElementById('no').value, 10); //na
    var value = parseInt(document.getElementById('numb').value, 10); //cl2

    value = isNaN(value) ? 0 : value;
    if (value < 1)
        return;
    value--;

    document.getElementById('numb').value = value;
    if (value == 2) {
        rotateR();
        var x = document.getElementById('n3').style.visibility = "hidden";
        var y = document.getElementById('d3').style.visibility = "hidden";
        var z = document.getElementById('d33').style.visibility = "hidden";

    }
    else if (value == 1) {
        rotateR();
        var x = document.getElementById('n2').style.visibility = "hidden";
        var y = document.getElementById('d2').style.visibility = "hidden";
        var z = document.getElementById('d22').style.visibility = "hidden";
    }
    else if (value == 0) {
        rotateR();
        var x = document.getElementById('n1').style.visibility = "hidden";
        var y = document.getElementById('d1').style.visibility = "hidden";
        var z = document.getElementById('d11').style.visibility = "hidden";
    }
    else {
        rotateR();
    }
    if (value == 1 && value2 == 2 && value3 == 2) {
        console.log("xxxxxxxxxxxxxxxxxxxx", value,  value2)
        document.getElementById('numb').value = value
        rotateFinal()
        return
    }
}




function submit() {
    var value = parseInt(document.getElementById('no').value, 10); // na
   
    var value2 = parseInt(document.getElementById('num').value, 10); // nacl
    var value3 = parseInt(document.getElementById('numb').value, 10);//cl2

    if (value == 2  && value2 == 2 && value3 == 1) {
        right();
        var val = document.getElementById('nxt').style.visibility = "visible";
    }
    else {
        wrong();
    }

}
function right() {
    swal({
        title: "Good Job!",
        text: "Keep Going!",
        icon: "correct.jpg",
        button: "OK",
    });
}

function wrong() {
    swal({
        icon: 'incorrect.jpg',
        title: 'Incorrect',
        text: 'Try Again!',
        footer: '<a href>Why do I have this issue?</a>'
    });
}