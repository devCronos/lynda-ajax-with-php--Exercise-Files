/**
 * Created by Cronos on 4/5/2017.
 */
var xhr = new XMLHttpRequest();
xhr.open("GET","script.php",true);
//success
xhr.onreadystatechange = function () {
    if(xhr.readyState == 4 && xhr.status == 200){
        var target = document.getAnonymousElementById("example");
        target.innerHTML = xhr.responseText;
    }
};
//
xhr.send();

// NOW Jquery

$.ajax({
    type: "GET",
    url: "script.php",
    async: true,
    data: { },
    dataType: "text",
    success: function(data){
        $("#main").html(data);
    },
    error: function(jqXHR, textStatus, error) { }
});

// short

$get({
    url:"script.php",
    dataType:"text",
    success:function (data) {
        $("#main").html(data);
    }
});