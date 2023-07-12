let userName = prompt("Who there",'');
if (userName == 'Admin'){
    let pass = prompt('password?','');
    if (pass == "123456789") {
        alert('Welcome');
    } else if (pass == null) {
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (userName == null) {
    alert('Canceled.');
} else {
    alert(" I don't know you");
}