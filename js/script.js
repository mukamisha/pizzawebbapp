$("#PlaceOrder").click(function(hi){
    var siz=$("#size").val()
    var crus=$("#crust").val()
    var top=$("#toppings").val()
    var num=$("#number").val();
    if(siz!=="" && crus!=="" && top!=="" && num!==""){
        alert("you have ordered:" + num +"pizzas" +"," + top +"," + crus +"," +siz );
    }
    else{
        alert("plase fill all the requirement");
    }
    hi.preventDefault();
});

$("#delivery").click(function(hey){
    prompt("please enter your location");
    alert("congratulations we will reach to you soon");
    hey.preventDefault();
});