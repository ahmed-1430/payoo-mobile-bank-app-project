const pinNumber = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const selectedBank = document.getElementById('select-bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const newBalance = availableBalance + addAmount;
    
  
    if(accountNumber.length < 11){
        alert('Invalid Account Number')
        return;
    } else if(pinNumber !== addPin){
        alert('Invalid Pin Number');
        return;
    }


    document.getElementById('available-balance').innerText = newBalance;
    
})
document.getElementById('cashout-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('acc-number').value
    const cashOutAmount = parseInt(document.getElementById('Cashout-amount').value)
    const cashoutPin = parseInt(document.getElementById('cashout-pin').value)
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    const newBalance = availableBalance - cashOutAmount;
    document.getElementById('available-balance').innerText = newBalance
})



// toggling
    document.getElementById('add-form').style.display ='none'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'
// Add Money
document.getElementById('add-btn').addEventListener('click', function(){
    document.getElementById('add-form').style.display ='block'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'   
})
// Cashout
document.getElementById('cashout-btn').addEventListener('click', function(){
    document.getElementById('Cashout-form').style.display ='block'
    document.getElementById('add-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'

})
// Transfer Money
document.getElementById('transfer-btn').addEventListener('click', function(){
    document.getElementById('transfer-form').style.display ='block'
    document.getElementById('add-form').style.display ='none'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'
})
// Get Bonous
document.getElementById('get-bonous-btn').addEventListener('click', function(){
    document.getElementById('bonous-form').style.display ='block'
    document.getElementById('add-form').style.display ='none'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'
})
// Pay Bill
document.getElementById('PayBill-btn').addEventListener('click', function(){
    document.getElementById('bill-form').style.display ='block'    
    document.getElementById('add-form').style.display ='none'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('history-form').style.display ='none'
})
// Transactions History
document.getElementById('transactions-btn').addEventListener('click', function(){
    document.getElementById('history-form').style.display ='block'
     document.getElementById('add-form').style.display ='none'
    document.getElementById('Cashout-form').style.display ='none'
    document.getElementById('transfer-form').style.display ='none'
    document.getElementById('bonous-form').style.display ='none'
    document.getElementById('bill-form').style.display ='none'
})