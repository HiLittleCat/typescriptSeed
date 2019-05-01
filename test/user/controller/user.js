require('should');
const superagent = require('superagent');
const url = 'http://127.0.0.1:3000/user';
describe('sign', function () {
    it('user sign should be ok', function (done) {
        superagent
            .post(`${url}/sign`)
            .send({ mobile: '18101819961', password: '11111111' })
            .end((err, res) => {
                console.log(res.text);
                res.status.should.eql(200);
                done();
            });
    });

});
