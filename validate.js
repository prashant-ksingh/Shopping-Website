

function validate(){
    let nameInput=document.getElementById("name").value;
    let emailInput=document.getElementById("email").value;
    let palace=document.getElementById("palace").value;
    let textAreaInput=document.getElementById("textAreaRemark").value;
    let tnCI=document.getElementById("agree_terms").checked;


    let error=true;


    if(nameInput.length>=3){
        document.getElementById("name-valid").style.display="block";
        document.getElementById("name-invalid").style.display="none";
    }
    else{
        document.getElementById("name-invalid").style.display="block";
        document.getElementById("name-valid").style.display="none";
        error=false;
        
    }
    if(emailInput && emailInput.includes("@")&&emailInput.includes(".")&&emailInput.lastIndexOf(".")+3<=emailInput.length && emailInput.indexOf('@')!==0){
        document.getElementById("email-valid").style.display="block";
        document.getElementById("email-invalid").style.display="none" ;  
    }
    else{
        document.getElementById("email-valid").style.display="none";
        document.getElementById("email-invalid").style.display="block"; 
        error=false;
    }
    
    if(palace!="None"){
        document.getElementById("palace-valid").style.display="block";
        document.getElementById("palace-invalid").style.display="none" ;
    }
    else{
        document.getElementById("palace-invalid").style.display="block";
        document.getElementById("palace-valid").style.display="none" ;
        error=false;
    }
    if(textAreaInput.length>=6){
        document.getElementById("text-valid").style.display="block";
        document.getElementById("text-invalid").style.display="none";
    }
    else{
        document.getElementById("text-valid").style.display="none";
        document.getElementById("text-invalid").style.display="block";
        error=false;
    }
    if(tnCI){
       
        document.getElementById('tnC-invalid').style.display='none';
    }
    else{
        document.getElementById('tnC-invalid').style.display="block";
        error=false;
       
    }
    const resetField=()=>{
    document.getElementById("name").value=" ";
    document.getElementById("email").value=" ";
    document.getElementById("palace").value="None";
    document.getElementById("date1").value=" ";
    document.getElementById("textAreaRemark").value=" ";
    document.getElementById("agree_terms").checked=false;
    }
    if(error){
        alert("Your details have been saved successfully!");
        resetField();
        document.getElementById("name-valid").style.display="none";
        document.getElementById("email-valid").style.display="none";
        document.getElementById("palace-valid").style.display="none" ;
        document.getElementById("text-valid").style.display="none";
        
    }

}