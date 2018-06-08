const addData = require('../functions/addData');
var uniqid = require('uniqid');

module.exports = {
    addDataTestValidation: addDataTestValidation
}

function addDataTestValidation(req, callback) {
    var id="id";
    console.log("body================>",req.body)
    const key = req.body.key
    const value = req.body.value;

    

    console.log(uniqid()); 
    var ID = uniqid();
    console.log("inside addTest >>>",ID);
   
    value[id]=ID;
    console.log("after adding ID key",value)
    if (!key || !key.trim()) {

        err = {
            "status": 400,
            "message": 'fields should not be empty'
        }
        callback(err, "");

    } else {

        addData.addData(key, value)
            .then(function (result) {

                callback("", result);

            }).catch(function (err) {

                callback(err, "");
            })
    }
}
