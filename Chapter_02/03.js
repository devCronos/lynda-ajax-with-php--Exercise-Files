/**
 * Created by Cronos on 4/5/2017.
 */
// xhr.readyState values 0-4

// onreadystatechange stores function called on changes

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

function replaceElementById(id, text){
    document.getElementById(id).innerHTML = text;
}
//call that in if