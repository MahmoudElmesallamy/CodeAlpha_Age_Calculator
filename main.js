function calculateAge () {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

       if ( !day || !month || !year ){
        document.getElementById("result").innerText = "Please Enter a valid data of birth.";
        return;
    }
    else if (day > 31 || day < 1) {
        document.getElementById("result").innerText = "Please Enter a valid data of birth.";
        return;
    }
    else if (month > 12 || month < 1) {
        document.getElementById("result").innerText = "Please Enter a valid data of birth.";
        return;
    }
    else if (year > 2024 || year < 1900) {
        document.getElementById("result").innerText = "Please Enter a valid data of birth.";
        return;
    }

    const birthDate = new Date(year,month -1 ,day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is: ${age}`;
}
