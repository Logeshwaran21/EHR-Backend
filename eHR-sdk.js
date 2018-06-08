'use strict';
var ArrayList = require('arraylist');
const express = require('express')
const app = express()
const router = express.Router();
module.exports = router;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(router);
app.use('/', router);
app.use(bodyParser.urlencoded({ extended: true }));
//console.log(uniqid(), uniqid());


//multichain name -->mch141=HAEYqFW3ayTjK3VWBuYHvzE4v6isNA5cY7yUh9j2k95h
//multichaind mch141 -daemon

let multichain = require("multichain-node")({
    port: 7180,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "HAEYqFW3ayTjK3VWBuYHvzE4v6isNA5cY7yUh9j2k95h"
});


//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(req,res){
    res.send('Hello Node and ember')
})


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1252');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
  });
  

//app.listen(3003, () => console.log('Example app listening on port 3003!'))
//console.log("server running on port",port)

const port = process.env.PORT || 3005;
const server =app.listen(port);
console.log("server running on port",port)


app.get('/info', function(req, res){

    multichain.getInfo((err, info) => {
        if(err){
            //throw err;
            console.log(err); 
        }
        console.log("chain name is :", info," info :",info,"--------end--------");
        //console.log("chain name is :", info.chainname," info :",info,"--------end--------");
       // console.log("Version name is :", info.version," info :",info,"--------end--------");
        //res.json(info.chainname)
    /**/    //res.json(info)
        
        //console.log("chain name is :", info," info :",info,"--------end--------");
    
       /*If we want print only chainname*/  //res.json(info.chainname)
                                            //res.json(info.version)
       /*If we want print only chainname*/ res.json(info)
    })



})

app.get('/streamlist', function(req, res){

    multichain.listStreams((err, streamlist) => {
        if(err){
            //throw err;
            console.log(err); 
        }
        //console.log("stream name is :",streamlist.name);
        for (var i in streamlist) {
            console.log(streamlist[1]);
        }
        res.json(streamlist[1])
    })



})

/*   write aahe */ 
app.post('/streamlistkey', function(req, res){
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
   
     

     
     
