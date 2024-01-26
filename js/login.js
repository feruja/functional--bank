document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    // get pass 
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    if(userEmail=='sontan@gamil.com' && userPass == 'pass' ){
        window.location.href= 'bnking.html';

        // new html file add korte  window.location.href = 'new file name';
    }
})


