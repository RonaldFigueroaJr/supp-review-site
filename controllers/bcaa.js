module.exports = {
    index
};

function index(req, res) {
    res.render('bcaa/index', {title: 'BCAA'})
}