var mongoose = require('mongoose'),
	Movie = mongoose.model('Movie');

var getErrorMessage = function(err) {
  if (err.errors) {
    for (var errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  } else {
    return 'Unknown server error';
  }
};

exports.create = function(req, res){
	var movie = new Movie(req.body);
	movie.addedBy = req.user;
  
	movie.save(function(err){
		if(err){
			res.status(400).send({
				message: getErrorMessage(err)
			})
		} else {
			res.json(movie);
		}
	});
}	

exports.list = function(req, res) {
	Movie.find().sort('-created').populate('addedBy', 'title   genre').exec(function(err, movies) {
    if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.json(movies);
    }
  });
}