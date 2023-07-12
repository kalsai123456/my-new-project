let year = parseInt(prompt("nhap nam"));
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if(year % 400 == 0) {
            alert(year + "la nam nhuan");
        } else
        { alert(year + "la nam khong nhuan");
    }
    } else {
            alert(year + "la nam nhuan");
    }
}   else {
    alert(year + "la nam khong nhuan");
}