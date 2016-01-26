var soap = require('soap');

var userServiceSoap = {
	url : 'http://60.248.200.133/EMOTOR/Service.asmx?WSDL'
};

function UserError(type) {
	this.type = type;
}

//Get user id on WeMo server
userServiceSoap.getUserId = function getUserId(email, next, callback) {
  soap.createClient(this.url, function(err, client) {
    var userMail = JSON.stringify({ 
    	email: email 
    });
    
    var request = {vStr: userMail};

    client.Getuseid(request, function(err, result) {
    	if(err){
    		return next(new UserError("getUserId"));
    	}

      	var user = JSON.parse(result.GetuseidResult);
      	if(user.reValue == 0){
          	callback(null);
      	}
      	else{
      		callback(user);
      	}
    });
  });    
}

//Get user data on WeMo server
userServiceSoap.getUserData = function getUserData(userId, next, callback) {
    soap.createClient(this.url, function(err, client) {

        var id = JSON.stringify({user_id: userId});

        var request = {vStr: id};

        client.Getuser_data(request, function(err, result) {
            if(err || result.Getuser_dataResult == ""){
                return next(new UserError("Getuser_data"));
            }

            var data = JSON.parse(result.Getuser_dataResult);

            if(data[0].name == null){
                data[0] = null;
            }
            callback(data[0]);
        });
    });
}


module.exports = userServiceSoap;