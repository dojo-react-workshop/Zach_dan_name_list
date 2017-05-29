module.exports = function (app) {

    var nameList = [
        ]

    app.get('/', function (req, res){ 
       res.render("index")
    })
    
    app.get('/list', function (req, res){ 
       res.json(nameList)
    })

     app.post('/addName',(req,res)=>{
		nameList.push(req.body);
		res.json(req.body);
    })
}