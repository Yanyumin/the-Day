$(function(){
    
    $.ajax({

        url:'http://127.0.0.1:3000/api/getmoneyctrl',
        success: function(data){
            console.log(data);
            var pTemp = template('proTemp',data);
            $(".context").html(pTemp);
        }
    })
})