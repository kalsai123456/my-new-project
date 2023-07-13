function dongY()
{
    alert("Yes. you are right ");
}
function khongThem(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('No').style.left = x + 'px';
    document.getElementById('No').style.top = y + 'px';
}