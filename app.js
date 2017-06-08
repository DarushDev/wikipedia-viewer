$(document).ready(function () {
    $("#search").click(function () {
        callWikipedia();
    });

});

$(document).keypress(function (e) {
    if (e.keyCode === 13) {
        callWikipedia();
    }
});

function callWikipedia() {
    $(".list-group").empty();
    var input = "input[name=wikipedia]";
    if ($(input).val() === '') {
        alert("Please enter something...");
    } else {
        $(".container").animate({
            opacity: '0.8'
        }).css("vertical-align", "top");
        $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: {action: 'query', list: 'search', srsearch: $(input).val(), format: 'json'},
            dataType: 'jsonp',
            success: processResult
        });
    }
}

function processResult(apiResult) {
    if (apiResult.query.search.length === 0) {
        alert("No results found!!!");
    } else {
        for (var i = 0; i < apiResult.query.search.length; i++) {
            $('.list-group').append('<a href="https://en.wikipedia.org/wiki/'+apiResult.query.search[i].title+'" target="_blank"><li class="list-group-item"><h3>' + apiResult.query.search[i].title + '</h3><h5>' + apiResult.query.search[i].snippet + '</h5></li></a></a>');
        }
    }

}
