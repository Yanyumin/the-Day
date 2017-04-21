$(function(){
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getinlanddiscount',
        success: function(data){
            console.log(data);
            console.log("快到碗里来");
            var pTemp = template('proTemp',data);
            $('#cxdiv').html(pTemp);
        }
    })
})