/*const updateData = require('../functions/updateData');
var uniqid = require('uniqid');

module.exports = {
    updateDataTestValidation: updateDataTestValidation
}

function updateDataTestValidation(req, callback) {
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

        updateData.updateData(key, value)
            .then(function (result) {

                callback("", result);

            }).catch(function (err) {

                callback(err, "");
            })
    }
}
*/
/*---------------------*/
/* Read Function*/ 
const updateData = require('../functions/updateData');

module.exports = {
    updateDataTestValidation: updateDataTestValidation
}

function updateDataTestValidation(req, callback) {
    const key = req.body.key;
    if (!key   || !key.trim()) {

        err = {
            "status": 400,
            "message": 'fields should not be empty'
        }
        callback(err, "");

    } else {

        updateData.updateData(key)
            .then(function (result) {

                callback("", result);

            }).catch(function (err) {

                callback(err, "");
            })
    }
}

