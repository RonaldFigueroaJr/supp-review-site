const Supplement = require('../models/supplement');
module.exports = {
    create,
    delete: deleteReview,
    update
}
function update(req, res) {
    Supplement.findOne({'reviews._id': req.params.id}, function(err, supplement) {
        const review = supplement.reviews.id(req.params.id);
        if (!review.user.equals(req.user._id)) return res.redirect(`/supplements/${supplement._id}`);
        review.content = req.body.content;
        supplement.save(function(err) {
            res.redirect(`/supplements/${supplement._id}`);
        });
    });
  }
  function deleteReview(req, res, next) {
    Supplement.findOne({'reviews._id': req.params.id}).then(function(supplement) {
      const review = supplement.reviews.id(req.params.id);
      if (!review.user.equals(req.user._id)) return res.redirect(`/supplements/${supplements._id}`);
      review.remove();
      supplement.save().then(function() {
        res.redirect(`/supplements/${supplement._id}`);
      }).catch(function(err) {
        return next(err);
      });
    });
  }
  function create(req, res) {
    Supplement.findById(req.params.id, function(err, supplement) {
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
      supplement.reviews.push(req.body);
      supplement.save(function(err) {
        res.redirect(`/supplements/${supplement._id}`);
      });
    });
  }