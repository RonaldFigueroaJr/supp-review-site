const Supplement = require('../models/supplement');

module.exports = {
    index,
    new: newSupplement,
    create,
    show,
    delete: deleteSupplement
};

function deleteSupplement(req, res) {
    Supplement.findOneAndDelete(
      {_id: req.params.id, userRecommending: req.user._id}, function(err) {
        res.redirect('/supplements');
      }
    );
  }

function show(req, res) {
    console.log(req.params.id);
    Supplement.findById(req.params.id, function(err, supplement){
        console.log(supplement);
        res.render("supplements/show", {supplement})
    })
}

function create(req, res) {
    const supplement = new Supplement(req.body);
    // Assign the logged in user's id
    supplement.user = req.user._id;
    supplement.save(function(err) {
        if (err) return res.redirect('/supplements/new');
        res.redirect(`/supplements`);
    });
}

function index(req, res) {
    Supplement.find({}, function(err, supplements) {
        res.render('supplements/index', {supplements});
    });
}

function forUser(req, res) {
    Supplement.find({user: req.user._id}, function(err, supplements) {
        res.render('supplements/index', {supplements});
    });
}

function newSupplement(req, res) {
    res.render('supplements/new');
}