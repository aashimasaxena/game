//javascript and/or jquery 
//generating table
$(document).ready(function(){
    $(".hidden_div").hide();
    var number = 1;
    for(var i = 0; i <20 ; i++){
        $(".tableBody").append("<tr><td><span>" + number + "</span></td><td><span>" + (number+1) + "</span></td><td><span>" + (number+2) + "</span></td><td><span>" + (number+3) + "</span></td><td><span>" + (number+4) + "</span></td></tr>");
       number+=5;
    }
});

//global declaration
var clickedCell= {};

//obtaining specific cell value
$(document).ready(function() {
    //changing pointer 
    $(".table:has(td)").mouseover(function(e) {
        $(this).css("cursor", "pointer");
    });
    //onClick event
    $(".table:has(td)").click(function(e) {
        clickedCell= getCellValue(e);
        console.log("on click" + clickedCell);
        $(e.target).closest("span").addClass("hide");
    });
});
//function to get table-cell value
function getCellValue(e){
    var clickedCell= $(e.target).closest("td");
    return(clickedCell.text());
}

//getting the numeric input
$(".numb").click(function(event){
    val = getValue(event);
    var displayNumber = $("#displayNumber").val();
    if(displayNumber == '0'){
        if(displayNumber.length >'0'){
            $("#displayNumber").val().append(val);
        }
    }else{
        $("#displayNumber").val(val);

    }
});
//function to get numeric input value
function getValue(event){
    var numericValue = $(event.target);
    console.log(numericValue.text());
    value = numericValue.text();    
    return(value);
}

//disabling keypress
$("#displayNumber").keydown(function(e){
    e.preventDefault();
  });

//matching values --> on 'submit'
$(".submit").click(function(e){
   var inputVal =  $("#displayNumber").val();  
   //console.log("i/p: " + inputVal);
   //console.log("cell: " + clickedCell);
   if(inputVal == clickedCell){
        alert("success");
   }else{
    alert("fail");
   }
   $(".hidden_div").hide();
   $("#displayNumber").val("");
});

//'back' button functionality
$("#back").click(function(){
    $("#displayNumber").val("");
});

//disable-enable table
$("#displayNumber").click(function(e) {
    e.preventDefault();
    $(".hidden_div").show(400);
});


