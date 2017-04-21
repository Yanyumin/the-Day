$(function(){
    $.ajax({
        url: 'http://127.0.0.1:3000/api/getcategorytitle',
        success: function(sortdata){
            var i;
            var sortdata = sortdata;
            // console.log(sortdata);
            var sTemp = template("sortTemp", sortdata);
            $("#accordion").html(sTemp);
            $('.panel-title > a').on('click', function (){
                $.ajax({
                url:'http://127.0.0.1:3000/api/getcategory',
                data:{titleid:$(this).attr("titleId")},
                success : function (data) {
                    console.log(data);
                    var cpHtml = template('sproTemp',data);
                    $('.panel-body').html(cpHtml);

                }
            })
            })
        }
    })
})
 