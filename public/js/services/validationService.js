'use strict';

app.factory('ValidationService', function() {

    var validateInput = function($event, type) {
        var regex = new RegExp("/^[0-9]{5}$/");
        var key = String.fromCharCode(!$event.charCode ? $event.which : $event.charCode);
        if (!regex.test(key)) {
            $event.preventDefault();
            return false;
        }
    }

    return {
        validateInput : validateInput
    }

});
