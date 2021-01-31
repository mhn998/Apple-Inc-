
function Order() {
    var message;
    var type = prompt('what type of MAC you want to order?');

    if (type == "Macbook Air") {
        meassage = alert('This type price is 2000$ , Are you sure you wish to continue?')

    } else if (type == "Macbook Pro") {
        message = alert('This type price is 1500$, Are you sure you wish to continue?')

    } else if (type == "iMac") {
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
    confirm(" your name is: " + firstName + " and your phone number is: " + phone);
    document.getElementById("form").style.display = "none";
    document.getElementById("sure").style.cssText = "background-color:blue; padding: 0px 20px; margin:10px;";
    document.getElementById("sure").innerHTML = "DONE";


}

    function getProductandNumbers () {
        while (type!== 'Mac' && type !== 'Ipod' && type !== 'Iphone')
    {
        var type = prompt("What type of our products do you like the most?(Iphone, Mac, Ipod)");
        var product='';
        if(type==='Iphone') {
            product = '<img class="new-class" src="https://www.macworld.co.uk/cmsdata/features/3633832/iphone-line-up_thumb800.jpg"/>';
        } else if (type==='Mac') {
            product = '<img  class="new-class" src="https://cdn.mos.cms.futurecdn.net/9tB3Dt8vyoK2okrwBE8MW7-970-80.jpg.webp"/>';
        } else if (type==='Ipod') {
            product = '<img class="new-class" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipod-touch-select-2019_GEO_US?wid=808&amp;hei=1087&amp;fmt=png-alpha&amp;qlt=80&amp;.v=1610513556000"/>';
        }

        if (type == 'Mac' || type == 'Ipod' || type == 'Iphone') {

            var numItems = prompt("how many Items do you wish to see?")

            for (var i =0; i<numItems; i++) {
                document.getElementById("insert").innerHTML =  product;
                product+=product;
            }
            }  
}
}

getProductandNumbers();