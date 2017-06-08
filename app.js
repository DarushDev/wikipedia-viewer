$(document).ready(function () {
    $("#search").click(function () {
        $(".container").animate({
            opacity: '0.8'
        }).css("vertical-align", "top");

        $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: {action: 'query', list: 'search', srsearch: $("input[name=wikipedia]").val(), format: 'json'},
            dataType: 'jsonp',
            success: processResult
        });


    });

});

function processResult(apiResult){
    for (var i = 0; i < apiResult.query.search.length; i++){
        $('.list-group').append('<li class="list-group-item"><h3>'+apiResult.query.search[i].title+'</h3><h5>Description</h5></li>');
    }
}
