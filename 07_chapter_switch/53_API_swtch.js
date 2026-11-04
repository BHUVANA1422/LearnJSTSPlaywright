let responsecode = 404;
switch(responsecode){
    case 200:
        console.log("200 - ok");
        break;
        case 400:
        console.log("400 - Bad Request");
        break;
        case 404:
            console.log("404 - Not Found");
            break;
        default:
            console.log("No idea which response code it is");
}