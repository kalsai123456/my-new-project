function kiem_tra(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let BMI = weight / ( height * height )
    let result = ""
    if (BMI < 16)
        result = "Gầy độ 3. Cần ăn nhiều thêm"
    else if (BMI < 17)
        result = "Gầy độ 2."
    else if (BMI <18.5)
        result = "Gầy độ 1."
    else if (BMI <25)
        result = "Bình thường."
    else if (BMI <30)
        result = "Thừa cân."
    else if (BMI <35)
        result = "Béo phì độ 1."
    else if (BMI <40)
        result = "Béo phì độ 2."
    else
        result = "Béo phì độ 3"
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + BMI + ". Bạn" + "<b>" + result + "</b>";
}