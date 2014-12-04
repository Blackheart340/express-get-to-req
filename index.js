'use strict';

var getToReq = function(availableParams){

    availableParams = availableParams || [];

    if(typeof availableParams === 'string'){
        availableParams = [ availableParams ];
    }

    return function(req, res, next){

        availableParams.forEach(function(param, n){
            var val = req.param(param);

            if(!!val){
                req[param] = val;
            }
        });

        next();
    };
};

module.exports = getToReq;