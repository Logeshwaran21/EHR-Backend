/*'use strict';

var bcSdk = require('../sdk/update');
*/
/**
 * A module that will add data into the blockchain!
 * @module updateData
 */
/** Add Data into blockchain.*/

/*exports.updateData = (key, value) => {
    
    return new Promise((resolve, reject) => {
        const updateData = ({
            key: key,
            value: value,
          
        });

        bcSdk.updateData({
            updateData: updateData
        })
            .then(function (result) {
                
                    return resolve({
                        "status": 200,
                        "message": "Your Information is updated in blockchain"
                    })
                
            })
            .catch(err => {


                reject({
                    "status": 500,
                    "message": 'Something went wrong please try again later!!'
                });

            });
    });
}


*/
/*---------------*/
/*read data*/ 
'use strict';


var path = require('path');
var bcSdk = require('../sdk/update');

/**
 * A module that will add data into the blockchain!
 * @module updateData
 */
/** Add Data into blockchain.*/
exports.updateData = (key) => {
    return new Promise((resolve, reject) => {


        bcSdk.updateData(key)
            .then(function (result) {

                    return resolve({
                        "status": 200,
                        "data": result.response
                    })
                
            })
            .catch(err => {


                reject({
                    "status": 500,
                    "message": 'Something went wrong please try again later!!'
                });

            });
    });
}



