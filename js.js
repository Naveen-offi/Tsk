// function shop(){
    // window.open("https://wa.me/+919566406178", "_blank");
        // Whatsapp msg
// }
    

function shop(id, title){
    var id = document.getElementById(id).innerHTML;
    var title = document.getElementById(title).innerHTML; 
    var link = "https://wa.me/+919566406178?text=" + "I Need this product. Product Name :  *" + title + "*. Product id: *"+ id + "*"; 
    window.open(link, "_blank");
    // console.log("I Need this product. Product Name : " + title + ". Product id: "+ id);
}

function contact(){
    var cus_name = prompt("Enter Your Name: ");
    var link = "https://wa.me/+919566406178?text=" + "Hi, *Senthil Kumar*. I am "+ cus_name + ". I need Your *SERVICE*"; 
    window.open(link, "_blank");
    // console.log("Hi, Senthil Kumar. I am "+ cus_name + " I need your ***SERVICE***");
}
