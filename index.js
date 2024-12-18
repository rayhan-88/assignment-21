import app from './app.js';
function Server (){
    try {
        return console.log("Server started on port 5050,")
    }
    catch (e) {
        return console.error({massage:"Server Error",error:e.toString()});
    }
}
app.listen(5050,Server);