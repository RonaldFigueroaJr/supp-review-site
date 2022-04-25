module.exports = {
    index
};

function index(req, res) {
    res.render('protein/index', {title: 'Proteins'})
}