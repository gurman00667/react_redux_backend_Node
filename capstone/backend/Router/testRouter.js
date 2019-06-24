const express = require('express');

class TestRouter {
    constructor(service){
        this.service = service;
            
    }

    router(){
        let router = express.Router();

        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));

        return router;
    }

    get(req, res){
        return this.service.list()
            .then((results)=>res.json(results) )
            .catch((err)=>res.status(500).json(err));
           
    }

    post(req, res){
        return this.service.add(req.body)
            .then(()=> this.service.list())
            .then((results)=> res.json(results))
            .catch((err)=> res.status(500).json(err))
    }

}

module.exports = TestRouter;
