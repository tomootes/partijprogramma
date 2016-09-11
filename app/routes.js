var Program = require('./models/program');

function getPrograms(res) {
    Program.find(function (err, programs) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(programs); // return all todos in JSON format
    });
};

function getProgramById(req, res) {

	console.log ();

	Program.findOne({ '_id' : req.params.program_id }, function (err, program) {

		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err) {
			res.send(err);
		}

		console.log (program);

		res.json(program); // return the program

	});

};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all programs
    app.get('/api/programs', function (req, res) {
        // use mongoose to get all todos in the database
        getPrograms(res);
    });

	// api ---------------------------------------------------------------------
	// get specific program
	app.get('/api/programs/:program_id', function (req, res) {

		getProgramById(req, res);

	});

    // create todo and send back all todos after creation
    app.post('/api/programs', function (req, res) {
		console.log (req.body);
        // create a todo, information comes from AJAX request from Angular
		Program.create({
			partijnaam: req.body.partijnaam,
			gekozenMaatregelen: req.body.gekozenMaatregelen,
            done: false
        }, function (err, program) {
            if (err)
                res.send(err);

			console.log (program);

			res.json(program); // return all todos in JSON format

        });

    });

    // delete a todo
    app.delete('/api/programs/:program_id', function (req, res) {
        Program.remove({
            _id: req.params.program_id
        }, function (err, program) {
            if (err)
                res.send(err);

			getPrograms(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

};