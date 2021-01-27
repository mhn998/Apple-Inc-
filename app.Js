
function Order() {
    var message; 
    var type = prompt('what type of MAC you want to order?');

    if (type=="Macbook Air") {
        meassage = alert('This type price is 2000$ , Are you sure you wish to continue?')

    } else if (type=="Macbook Pro") {
        message = alert('This type price is 1500$, Are you sure you wish to continue?')

    } else if (type=="iMac") {
        message = alert("This type price is 1000$, Are you sure you want to continue?")
    } else {
        message = alert("Sorry, item doesn't exist")


    }

    document.getElementById("demo").innerHTML = "Thank you for ordering from us, We'll contact you soon. For more info Visit our customer support page"
    document.getElementById("demo").style.cssText = "background-color:red; padding: 20px 0px; text-align:center"

    

    }
    
    function Done() {
        var firstName = document.getElementById("nameField").value;
        var phone = document.getElementById("phone").value;
        confirm("your name is: " + firstName + "and your phone number is: " + phone)
        document.getElementById("form").style.display = "none"
        document.getElementById("sure").style.cssText = "background-color:blue; padding: 0px 20px; margin:10px;"
        document.getElementById("sure").innerHTML = "DONE"


    }

    // document.getElementById("demo").innerHTML = "Hey" + NAME + "Your number is:" + PHONE + "We'll contact you soon" 






