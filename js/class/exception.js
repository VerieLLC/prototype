"use strict";
var ex = (function () {

    function log(err, functionName) {
        // ToDo: Records the Exception
        var errMessage = "ERROR -"+ functionName + ": " + err.message + "\nCode=" + err.code;
        console.error(errMessage);
        alert(errMessage);
    }

    /*** Reveals the Public Properties & Methods ***/
    return {
        log: log
    };
}());

