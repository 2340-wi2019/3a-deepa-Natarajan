$(document).ready(function() {
    $('#action').click(function() {
	//DO NOT CHANGE CODE BELOW
        var num1 = parseInt($('#num1').val());
        var num2 = parseInt($('#num2').val());
        clear();
        addNumbers(num1, num2);
        var result = multiplyNumbers(num1, num2);
        $('#result-mult').text(result);
	//DO NOT CHANGE CODE ABOVE

    });

    function addNumbers(num1,num2){
        var add=num1+num2;
      
    $("#result-add").text(add);

    }

   function multiplyNumbers(a,b){

   return (a*b);

    }
    function clear(){

        $("#result_add").text("");
        $('#result-mult').text("");
    
        }
    

  
});