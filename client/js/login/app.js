import '../login/view';

$(function() { //ready on load

    if (location.pathname.substring(location.pathname.lastIndexOf("/") + 1) != "admin.php"){
        const pressed = [];
        const secretCode = 'admin';

        window.addEventListener('keyup', (e) => {
            console.log(e.key);
            pressed.push(e.key);//pushes keyup into array.
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
                if (pressed.join('').includes(secretCode)) {
                window.location.replace("login.php");
                }
        });
    }

});//ready on load END
