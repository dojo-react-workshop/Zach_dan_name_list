module.exports = function (app) {

    app.get('/', function (req, res){
        //res.send('hi');
        res.render('index');
    })
}