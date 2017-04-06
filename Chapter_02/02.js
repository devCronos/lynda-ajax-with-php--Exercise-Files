/**
 * Created by Cronos on 4/5/2017.
 */
var xhr = new XMLHttpRequest();
xhr.open("GET","script.php",true);
xhr.send();

var text = xhr.responseText;
var xml = xhr.responseXML;

var target = document.getAnonymousElementById("example");
target.innerHTML = text;

// prolly gonna need to parse XML JSON

// response is string so js needs to parse with JSON.parse()
var json = JSON.parse(xhr.responseText);
target.innerHTML = json.last_name;

