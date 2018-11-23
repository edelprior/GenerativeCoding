const password = document.getElementById("pw");



password.addEventListener('keyup', function (evt) {
    if (this.value.length > 10) {
        this.style.color = 'green';
        
    }
    else {
        this.style.color = 'red';
    }
    
    
});











//function checkPasswordLength()  {
//    let password = document.getElementById('password');
//    let goodColor = "#66cc66";
//    let badColor = "#ff6666";
//    let okayColor = "#ffa500";
//
//
//    if(password.length > 6) {
//    password.style.backgroundColor = badColor;
//    
//    }
//    
//    else if (password.length>7 && password.length<10) {
//    password.style.backgroundColor = okayColor;
//             
//    }
//    
//    else {
//    password.style.backgroundColor = goodColor;
//        
//    }
//}