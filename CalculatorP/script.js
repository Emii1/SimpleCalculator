function compute()
{ //calculate the final amount 
    var principal = document.getElementById("principal").value;
    //calculate the interest amount
    var rate = document.getElementById("rate").value;
    //interest amount
    var years =document.getElementById("years").value;
    //total amount
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    //modify the text when the Compute button is pressed
    var result= document.getElementById("result");
    //Write the logic to convert the ‘No. of Years’ into the actual year in the future. 
    //This can be done by adding the number of 
    //years (years) to the current year inside the compute() function.
    var year= new Date().getFullYear() + parseInt(years);
    if(principal <= 0){
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " 
        + "<mark>" + year + "</mark>" + "\<br\>";
        
    }

}
function updateRate(){
    var rateval= document.getElementById("rate").value;
    //Modify the <span id="rate_val"> value to 
    //display the value of the rateval variable created above.

    document.getElementById("rate_val").innerText = rateval;
    //Link this function with an “onchange” event on the range input.
    //Add onchange="onUpdate()" on the range input tag

}

     