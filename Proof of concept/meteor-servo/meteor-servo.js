Tweets = new Mongo.Collection("tweets");

if (Meteor.isClient) {

	/*
	 * view
	 */
	Template.body.helpers({
		tweets: function () {
			return Tweets.find({}, { sort: { created_at: -1 }, limit : 10 } );
		}
	});


	Template.body.events({
		'click .clear' : function(event) {
			Meteor.call('removeAllTweets');
		}
	})

	/*
	 * google font
	 */
	WebFontConfig = {
		google: { families: [ 'Lato:400,700,300:latin' ] }
	};

	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
}


if ( Meteor.isServer ) {

	Meteor.startup(function () {
		// code to run on server at startup

		var five = Meteor.npmRequire('johnny-five');
		var board = new five.Board();

		board.on("ready", Meteor.bindEnvironment(function () {

			var servoMotor = new five.Servo.Continuous(10);

			console.log('init started');

			board.repl.inject({
				servo: servoMotor
			});

			console.log('init ended');

			servoMotor.ccw();

			var Twit = new TwitMaker({
				consumer_key: 'KEY'
				, consumer_secret: 'SECRET'
				, access_token: 'ACCES TOKEN'
				, access_token_secret: 'TOKEN SECRET'
			});

			var stream = Twit.stream('statuses/filter', {track: '#test'/*, language: 'en'*/});

			stream.on('tweet', Meteor.bindEnvironment(function (data) {

				var stopSweepFunction = Meteor.bindEnvironment( function() {
					servoMotor.ccw();
					console.log('stop');
				});

				console.log(data);

				Tweets.insert(data);   // removing this line avoids the error

				servoMotor.to(90);

				setTimeout(stopSweepFunction,500);

			}));
		}));

		return Meteor.methods({
			removeAllTweets: function() {
				return Tweets.remove({});
			}
		});
	});
}


