var getToReq = require('..');

var req = {
    param: function(paramName){
        return this.paramsList[paramName];
    },

    paramsList: {
        name: 'Bruce',
        login: 'Batman'
    }
}; //mock

describe('getToReq', function(){

    it('should be function', function(){
        getToReq.should.be.a('function');
    });

    it('should write to req', function(){
        getToReq([ 'name', 'login' ]);

        req.name.should.eql('Bruce');
        req.login.should.eql('Batman');
    });

});