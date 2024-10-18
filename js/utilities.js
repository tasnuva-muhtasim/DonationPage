document.getElementById(id).addEventListener('click',function(event){
event.preventDefault();
const  addmoney = document.getElementById(id).value;
const addMoneyNumber = parseFloat(addmoney);
return addMoneyNumber;

});