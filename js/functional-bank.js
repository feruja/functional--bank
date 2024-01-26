// function doubleIt(num){
//   const result = num*2;
//   return result
// }
// const first = doubleIt(5);
// const second = doubleIt(7);


function getInputValue(){
  const depositInput =  document.getElementById('deposit-input');
  const PreviousDepositValue = parseFloat (depositInput.value);
// clear input field
depositInput.value = '';

  return PreviousDepositValue ;
}



// deposit handle event add 
document.getElementById('deposit-btn').addEventListener('click',function(){

  // const depositInput =  document.getElementById('deposit-input');
  // const PreviousDepositValue = parseFloat (depositInput.value);

  const PreviousDepositValue = getInputValue();

// Deposit 
const depositTotal = document.getElementById('deposit-total');
const depositAmount = parseFloat (depositTotal.innerText);
const newDepositTotal = PreviousDepositValue + depositAmount;
depositTotal.innerText = newDepositTotal;
// balance 
const balanceAmount = document.getElementById('balance-total');
 const PreviousBalanceTotal= parseFloat (balanceAmount.innerText);
//  console.log(PreviousBalanceTotal);
 const newBalanceTotal = PreviousBalanceTotal + newDepositTotal; 
 console.log(newBalanceTotal);
 balanceAmount .innerText = newBalanceTotal;
// clear input field
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

  
 const balanceAmount = document.getElementById('balance-total');
 const PreviousBalanceTotal= parseFloat (balanceAmount.innerText);
//  console.log(PreviousBalanceTotal);
 const newBalanceTotal = PreviousBalanceTotal - newWithdrawTotal; 
 console.log(newBalanceTotal);
 balanceAmount .innerText = newBalanceTotal;
  
  // clear withdraw amonut 
  withdrawField.value = '';
  });




