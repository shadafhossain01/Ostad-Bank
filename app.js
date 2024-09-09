 let formBtn=document.querySelector("#form-btn");

 formBtn.addEventListener("click",function(){

  let login=document.querySelector(".login-sec");

 login.style.display="none";


 let bankSec=document.querySelector(".bank-sec");

 bankSec.style.display="block";


 })


 let depositBtn=document.querySelector("#db-btn");

 depositBtn.addEventListener("click",function(){

     let dbInput=document.querySelector("#deposit-ammount").value;
      let dbNumber=parseFloat(dbInput);

     let dbText=document.querySelector(".deposit-text").innerText;
     let dbTextNumber=parseFloat(dbText);

 let total=dbNumber+dbTextNumber;

 document.querySelector(".deposit-text").innerText=total;

 document.querySelector("#deposit-ammount").value="";


 let balanceText=document.querySelector(".balance-text").innerText;
 let balanceTextNumber=parseFloat(balanceText);

 let balanceTotal=balanceTextNumber+dbNumber;

 document.querySelector(".balance-text").innerText=balanceTotal;

 })






 let widthdrawBtn=document.querySelector("#wth-btn");

 widthdrawBtn.addEventListener("click",function(){

    let widInput=document.querySelector("#withdraw-ammount").value;
    let widNumber=parseFloat(widInput);


    let widText=document.querySelector(".withdraw-text").innerText;
     let widTextNumber=parseFloat(widText);
    
     let total=widNumber+widTextNumber;



     document.querySelector(".withdraw-text").innerText=total;

     document.querySelector("#withdraw-ammount").value="";


     let balanceText=document.querySelector(".balance-text").innerText;
     let balanceTextNumber=parseFloat(balanceText);

     let balanceTotal=balanceTextNumber-widNumber;

     document.querySelector(".balance-text").innerText=balanceTotal;
    


 })