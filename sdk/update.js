/*var config = require('../config.json');
var multichainConfig = config.multichainConfig
let multichain = require("generalised-multichain-node")(multichainConfig);
*/

/** @module UPDATEDATA*/
/*module.exports = {
    updateData: updateData
}
*/
/** @function addData 
 * add patient record data into blockchain.
 */
/*function updateData(params) {

    return new Promise((resolve) => {
        var response;
        var key = params.updateData.key;
        var value=params.updateData.value;
*/
       /* multichain.publish({ stream: "Login", key: key, data: value }, (err, res) => {
            if (err == null) {

                return resolve({
                    
                    response: res
                });
            } else {
                console.log(err)
            }*/
           /* multichain.publish({ stream: "Register", key: key, data: value }, (err, res) => {
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
*/

/*-----------------------*/
/*Read data */
var config = require('../config.json');
var multichainConfig = config.multichainConfig
let multichain = require("generalised-multichain-node")(multichainConfig);
var ArrayList = require('arraylist');
/** @module READDATA*/
module.exports = {
    updateData: updateData
}

/** @function updateData 
 * add patient record data into blockchain.
 */
function updateData(args) {

    return new Promise((resolve) => {
        var response;
        var key = args;
       

        multichain.listStreamKeyItems({
            stream: "Register",
            "key": key,
            //"data": data,
            
        }, (err, res) => {
            var list = new ArrayList;
            console.log("Response" ,res);
           
                    
              console.log("list------>>" ,list.add([res]));
                
             console.log("response====================>",res.data)
            if (err == null) {
               
                return resolve({
                   
                    response: res.data

                   
                   
                    
                });
            } else {
                console.log(err)
            }
        
        })

    })
}



/*app.post('/streamlistkey', function(req, res){
    console.log("mydata key",req.body)
    multichain.listStreamKeyItems({
        
        "stream":"Register",
        // -"key": "Patient01",
        // --"key":"Doctor03"
        "key": req.body.key,
        "data": req.body.data,
         //key : req.body.key,
         //data :req.body.data,
        
        
    },(err,result)=>{
        var list = new ArrayList;
       
        for(var i=0; i < result.length; i++) {
            list.add([result[i]])
         
           
        }
    
    
        console.log("ArrayList at Index  0--------->" ,list.get([0]));
        console.log("ArrayList at Index  2--------->" ,list.get([2]));
        console.log("ArrayList at Index  5--------->" ,list.get([5]));
    
        console.log("ArrayList at Index  Before Last--------->" ,list.get([result.length-2]));
        
        console.log("ArrayList at Index  last--------->" ,list.last());
    
       
     var beforeLastElement=list.get([result.length-2]);
     console.log("beforeLastElement",beforeLastElement);
    
     var lastElement=list.last();
    
    
    
     console.log("lastElement-------->> :",lastElement);
        console.log("key-------->> :",result[result.length-1].key); 
    
        console.log("data-------->> :",result[result.length-1].data);
    
        //console.log("data :",result[result.length-1]);
       // console.log("data in last element 4",result[result.length-1])
        
        
       
                if(err!=null){
                    console.log("error",err);
                 }else{
                     //console.log("key..... :",result.length-1);
                     //console.log("len",result[result.length-1]);
                     //res.send(result[result.length-1]);
                     res.send(result[result.length-1])
                   //  res.send(result[result.length-1].data)
    
                 }
    
             }
         )
         }) 
       
   */