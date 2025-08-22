document.getElementById('loginBtn').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('MobileNumber').value;
    const pinNumberValue = document.getElementById('pinNumber').value;
    const convertedNumber = parseInt(mobileNumberValue);
    const convertedPin = parseInt(pinNumberValue)



    if(convertedNumber === mobileNumber && convertedPin === pinNumber){
        window.location.href="./home.html"
    }else{
        alert('Invalid Credentials')
    }

})