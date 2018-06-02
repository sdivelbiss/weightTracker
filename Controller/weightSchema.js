let BodyParser = require('body-parser')
let urlencodedParser = BodyParser.urlencoded({extended: false})
let mongoose = require('mongoose');

mongoose.connect('mongodb://sdivelbiss:test123@ds245150.mlab.com:45150/weighttracker');

let Schema = mongoose.Schema;
let WeightSchema = new Schema({
    name: String,
    currentWeight: Number,
    targetWeight: Number,
    targetDate: Date
});

let weightTracking = mongoose.model('Weight', WeightSchema);




module.exports = function(app){
    app.get('/tracker', function(req, res){
        weightTracking.find({}, function(err, data){
            if(err) throw err;
            res.render('tracker', {userWeight: data})
        });
    });
    app.post('/tracker',  urlencodedParser,function(req, res){
        let newWeight = weightTracking(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data)
        });
    });
};




