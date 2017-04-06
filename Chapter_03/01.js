/**
 * Created by Cronos on 4/5/2017.
 */
// detext ajax requests
//   1. assume all requests are ajax
//   2. detect/handle regular/ajax requests (they look the same) -> so we add request header:

    //      X-Requested-With
var xhr = new XMLHttpRequest();
xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');


// PHP

function is_ajax_request() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest';
}

if(is_ajax_request()){
    echo "Ajax response";
}else{
    echo "Non-Ajax response";
}
