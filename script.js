function compute()
{
    var principal = document.getElementById("principal").value;
    // alerts if the principal number is 0 or negative
    if ((parseInt(principal) < 1) || (principal == null))
    {
        alert("Enter a positive number")
        // focuses back on the "Amount" box
        document.getElementById("principal").focus();
    }
    // retrieves values of rate and years 
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // calculates the intrest
    var interest = principal * years * rate /100;
    // retrieves the year that the amount will be reached
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest;
    // replace the result text with the relevant info
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%.\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
function updateRate() 
{
    // retrieves the value of the interest rate
    var rateval = document.getElementById("rate").value;
    // changes the inner text for the intrest rate as the slider moves
    document.getElementById("rate_val").innerText=rateval+"%";
}
