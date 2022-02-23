'use strict';

 module.exports=  (req, res, next)=>{
        const query = req.query;
        const name = query.name;
        req.reqName=name;
        let regex = /[A-z]+/

        if (regex.test(name)){
            next();
        }
        else{
            next('name is not available');
        }
    }
