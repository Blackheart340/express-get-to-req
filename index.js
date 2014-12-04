'use strict';

var getToReq = function(options){

    var availableParams = options.availableParams;

    return function(req, res, next){

        availableParams.map(function(param, n){
            var val = req.param(param);

            if(!!val){
                req[param] = val;
            }
        });

        next();
    };
};

module.exports = getToReq;