// var price1;
var siz,crus,topp,num;
// if(siz=="small"){
//     price1=2000;
// }
// else if(siz=="medium")
// {
//     price1=3000;
// }
// else if(siz=="large")
// {
//     price1=5000;
// }
// else
// {
//     alert("invalid choice");
// }
// var price2;
// if(crus=="crispy"){
//     price2=1000;
// }
// else if(crus=="stuffed")
// {
//     price2=1500;
// }
// else if(crus=="gluten-free"){
//     price=1800;
// }
// else{
//     alert("invalid choice");
// }
// var price3;
// if(top=="peperoni"){
//     price3=1200;
// }
// else if(top=="mushrooms"){
//     price3=1300;
// }
// else if(top=="onions")
// {
//     price3=1400;
// }
// else if(topp=="green Peppers"){
//     price3=1500;
// }
// else{
//     alert("invalid choice");
// }
// var totalPrice;
// totalPrice=price1+price2+price3;
// var price4;
// if(num==1)
// {
//     price4=totalPrice;
// }
// else if(num==2){
//     price4=totalPrice*2;
// }
// else if(num==3){
//     price4=totalPrice*3;
// }
// else if(num==4){
//     price4=totalPrice*4;
// }
// else if(num==5){
//     price4=totalPrice*5;
// }
// else if(num==6){
//     price4=totalPrice*6;
// }
// else if(num==7){
//     price4=totalPrice*7;
// }
// else if(num==8){
//     price4=totalPrice*8;
// }
// else if(num==9){
//     price4=totalPrice*9;
// }
// else{
//     alert("invalid choice");
// }

$("#PlaceOrder").click(function(hi){
    siz=$("#size").val()
     crus=$("#crust").val()
     topp=$("#toppings").val()
     num=$("#number").val();
    if(siz!=="" && crus!=="" && top!=="" && num!==""){
        alert("you have ordered:" + num +"pizzas" +"," + topp +"," + crus +"," +siz  );
    }
    else{
        alert("plase fill all the requirement");
    }
    hi.preventDefault();
});

$("#delivery").click(function(hey){
    prompt("please enter your location");
    alert("congratulations we will reach to you soon!! the charge for delivery is 1000frw");
    hey.preventDefault();
});
