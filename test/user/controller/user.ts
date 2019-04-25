require('should');
const superagent = require('superagent');
const url = 'http://127.0.0.1:3000/user';

describe('sign', function () {
    it('user sign should be ok', function (done) {
        superagent
            .post(`${url}/sign`)
            .send({mobile: '18101819960', password: '111111'})
            .end((err, res) => {
                console.log(res.text);
                res
                    .status
                    .should  
                    .eql(200);
                done();
            });
    });

});

describe('login', function () {
    it('loginMobile  should be ok', function (done) {
        superagent
            .post(`${url}/login`)
            .send({mobile: '18101819960', password: '111111'})
            .end((err, res) => {
                console.log(res.text);
                res
                    .status
                    .should  
                    .eql(200);
                done();
            });
    });

});