document.getElementById('phone-plus').addEventListener('click', function(){
    getInputValue('phone', true);
 })
 document.getElementById('case-plus').addEventListener('click', function(){
    getInputValue('case', true);
 })
 document.getElementById('phone-minus').addEventListener('click', function(){
    getInputValue('phone', false);
 })
 document.getElementById('case-minus').addEventListener('click', function(){
    getInputValue('case', false);
 })
 document.getElementById('check-out').addEventListener('click', function(){
    calculation();

 })
 function getInputValue(input, isPlus){
    const inputField = document.getElementById(input+'-number');
    let inputNumber = parseInt(inputField.value);
    if(isPlus){
       inputNumber++;
    }else if(inputNumber>0){
       inputNumber--; 
    }
    inputField.value=inputNumber;
    const mainPrice = document.getElementById(input+'-price');
    let priceOfProduct = mainPrice.innerText;
    let price;
    if(input=='phone'){
       price = 1219 * parseInt(inputField.value);
    }else{
       price = 59 * parseInt(inputField.value);
    }
    mainPrice.innerText =price;
 } 
 function calculation(){
    const phonePrice = document.getElementById('phone-price').innerText;
    const casePrice =document.getElementById('case-price').innerText;
    const subtotal = parseFloat(phonePrice)+ parseFloat(casePrice);
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = subtotal/10;
    document.getElementById('price-total').innerText = subtotal - subtotal/10;
 }