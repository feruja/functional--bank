// add handle deposit button event 
document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the deposit amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = parseFloat(depositInput.value);
    const depositTotal = document.getElementById('deposit-total');
    const previoustDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositTotal =  previoustDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;
    // update balance amount 
    const balanceTotal = document.getElementById('balance-total');
    const PreviousBalanceTotal = parseFloat( balanceTotal.innerText);
    const newBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText=newBalanceTotal;

//    clear deposit amount 
    depositInput.value = '';
})
  
// get withdraw Amount
document.getElementById('withdraw-btn').addEventListener('click',function(){
const withdrawField = document.getElementById('withdraw-input');
const withdrawAmount=parseFloat (withdrawField.value) ;
const withdrawTotal = document.
// update withdraw Total
getElementById('withdraw-total');

const PreviousWithdrawTotal =parseFloat(withdrawTotal.innerText) ;
const newWithdrawTotal = PreviousWithdrawTotal + withdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

const balanceTotal = document.getElementById('balance-total');
    const PreviousBalanceTotal = parseFloat( balanceTotal.innerText);
    const newBalanceTotal = PreviousBalanceTotal - withdrawAmount;
    balanceTotal.innerText=newBalanceTotal

// clear withdraw amonut 
withdrawField.value = '';
});

