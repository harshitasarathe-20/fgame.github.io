

function submit() {
var valuea = parseInt(document.getElementById('btn111').value, 10);
var valueb = parseInt(document.getElementById('btn222').value, 10);
var valuec = parseInt(document.getElementById('btn333').value, 10);
var valued = parseInt(document.getElementById('btn444').value, 10);
var valuee = parseInt(document.getElementById('btn555').value, 10);

         if (valuea == 4 && valueb == 1 && valuec == 2 && valued == 5 && valuee == 3) 
        { 
          
             swal({
                 title: 'Correct!',
                 icon: "success",
                 showClass: {
                     popup: 'animate__animated animate__fadeInDown'
                 },
                 hideClass: {
                     popup: 'animate__animated animate__fadeOutUp'
                 }
             }); 

        console.log("vvvvvvvvvvvvvvvvv");
         }

        else 
        {
             swal({
                 title: 'Incorrect!',
                
                 icon: "error",
                 button: 'Try Again',
                 showClass: {
                     popup: 'animate__animated animate__fadeInDown'
                 },
                 hideClass: {
                     popup: 'animate__animated animate__fadeOutUp'
                 }
             }); 

        console.log("wronggggggggg");
        }

    
}

