const expect = require("chai").expect;
let chai = require('chai');
let chaiHttp = require('chai-http');
const axios = require("axios");
chai.use(chaiHttp);
let user;

describe("Routes' tests", function () {
    let base_url = "http://localhost:8080/"
    let edit_fields =
        {
            "username":"cooler_username"
        }
    before( async function () {
         await axios.get(base_url + "user/612b8bd7d592531710e97d05")
            .then((response) => {
                user = response.data
            })
    })

    it("should get one user", function (done) {
        chai.request(base_url)
            .get('user/'+ user.user._id)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it("should edit the user", function (done) {
        chai.request(base_url)
            .put('user/'+ user.user._id)
            .send(edit_fields)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it("should delete the user", function (done) {
        chai.request(base_url)
            .delete('user/'+ user.user._id)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                done();
            });
    });

    it("should create an user", function (done) {
        chai.request(base_url)
            .post('user/')
            .send(user)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                done();
            });
    });

});


