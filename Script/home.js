document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const selectedBank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const newBalance = availableBalance + addAmount;
    const pinNumber = 1234;
  
    if(accountNumber.length < 11){
        alert('Invalid Account Number')
        return;
    } else if(pinNumber !== addPin){
        alert('Invalid Pin Number');
        return;
    }


    document.getElementById('available-balance').innerText = newBalance;
    
})

// toggling
document.getElementById('add-form').addEventListener('click', function(){
    document.getElementById('add-form').style.display = 'block'

})