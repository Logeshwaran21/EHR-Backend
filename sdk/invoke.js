var config = require('../config.json');
var multichainConfig = config.multichainConfig
let multichain = require("generalised-multichain-node")(multichainConfig);


/** @module ADDDATA*/
module.exports = {
    addData: addData
}

/** @function addData 
 * add patient record data into blockchain.
 */
function addData(params) {

    return new Promise((resolve) => {
        var response;
        var key = params.addData.key;
        var value=params.addData.value;

       /* multichain.publish({ stream: "Login", key: key, data: value }, (err, res) => {
            if (err == null) {

                return resolve({
                    
                    response: res
                });
            } else {
                console.log(err)
            }*/
            multichain.publish({ stream: "Register", key: key, data: value }, (err, res) => {
                if (err == null) {
    
                    return resolve({
                        
                        response: res
                    });
                } else {
                    console.log(err)
                }
                      
        })

    })
}