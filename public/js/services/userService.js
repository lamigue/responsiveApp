'use strict';

app.factory('UserService', function($resource) {
    var resources = $resource('http://192.168.6.140:3000/rest/user/:id', null, {
       'getUserId' : {
           method : "GET",
           params : {
              id : "id"
           }
       },
        'getUserData' : {
           method : "GET",
           params : {
              id : "data"
           }
       }
   });
    var a = 1;

    var UserStorage = {};

    UserStorage.getUserId = function(email) {
        return resources.getUserId({email:email
        }, function(response) {
        });
    };

    UserStorage.getUserData = function(userId) {
       return resources.getUserData({user_id:userId}, function(response) {
       });
    };

    return UserStorage;
});