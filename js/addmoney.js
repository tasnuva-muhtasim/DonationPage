document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-add-money');
    if(isNaN(addMoney) || addMoney<=0){
        alert('Failed to add money');
        return;
    }
    

 const balances = getTextFieldValueById('amount-noakhali');

 const newBalance = balances+addMoney;
 
document.getElementById('amount-noakhali').innerText = newBalance;


const mainBalance= getTextFieldValueById('main-amount');
const newMainBalance= mainBalance-addMoney;
document.getElementById('main-amount').innerText = newMainBalance;


})

// addmone for feni

document.getElementById('btn-feni-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-feni-add-money');
    if(isNaN(addMoney) || addMoney<=0){
        alert('Failed to add money');
        return;
    }
    

 const balances = getTextFieldValueById('amount-feni');

 const newBalance = balances+addMoney;
 
document.getElementById('amount-feni').innerText = newBalance;


const mainBalance= getTextFieldValueById('main-amount');
const newMainBalance= mainBalance-addMoney;
document.getElementById('main-amount').innerText = newMainBalance;


})

// quota
document.getElementById('btn-quota-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-quota-add-money');
    if(isNaN(addMoney) || addMoney<=0){
        alert('Failed to add money');
        return;
    }
    

 const balances = getTextFieldValueById('amount-quota');

 const newBalance = balances+addMoney;
 
document.getElementById('amount-quota').innerText = newBalance;


const mainBalance= getTextFieldValueById('main-amount');
const newMainBalance= mainBalance-addMoney;
document.getElementById('main-amount').innerText = newMainBalance;


})