
var handleError = function(res, reason, message, code){
	console.log("Error Occured: "+ reason);
	res.status(code||500).json({"error":message});
	res.end();
}

module.exports = handleError;
