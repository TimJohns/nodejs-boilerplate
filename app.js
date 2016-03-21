function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

module.exports=handleRequest
