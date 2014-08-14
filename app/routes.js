module.exports = function(app) {

    // Server Routes ===============================

    // Sample API route
    app.get('/api/nerds', function(req, res) {
        // Use Mongoose to get all Nerds in the database
        Nerd.find(function(err, nerds) {
            if(err) { res.send(err); }
            res.json(nerds);
        });
    });

    // Frontend Routes =============================
    app.get('*', function(req, res) {
        res.sendFile('/.public/views/index.html');
    });
};
