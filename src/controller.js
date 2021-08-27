const { Router } = require("express");

const router = Router();
module.exports = router;

router.get("/hello", (req, resp) => {
    const name = req.query.name
  resp.json({ saludo: "hello "+ name });
});

router.post('/new',(req,resp) =>{
    console.log(req.body)
    if (req.body.name == null){
        resp.status(400).json({"error":"you must fill in all the data"}) 
        return       
    }
    const client ={
        name : req.body.name,
        lastName: req.body.lastName,
        addDate: Date.now()
    }
    resp.status(200).json({"client":client})
    
});

router.delete('/del/:id',(req,resp)=>{
    const object = req.params.id
   resp.status(200).json({"true":object+" object success deleted"})
})
