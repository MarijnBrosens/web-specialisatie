Tweets = new Mongo.Collection("tweets");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  /*Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });*/

  /*Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });*/


  Template.body.helpers({
    tweets: function () {
      return Tweets.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    var Twit = new TwitMaker({
      consumer_key:         'p1PuUGX0sarnKUXwZzI8A0UqS'
      , consumer_secret:      'e3SuF3qLpotERovAdoont5YeE7XHPF7rJhe1mORflUc8qyFplV'
      , access_token:         '1283917070-uASzktRinbsVe9xn4SyTZUrOySkg1ZaGbgVqCKt'
      , access_token_secret:  'DpT1e0jJIJMqxLFZUgMrKrxiFwnPgo2thoddJO3PDAWC1'
    });

    /*Twit.get('search/tweets', { q: 'jinglesmells since:2011-11-11', count: 2 }, function(err, data, response) {
      console.log(data.statuses[0].text);
    })*/

    //
    // filter the public stream by english tweets containing `#apple`
    //
    var stream = Twit.stream('statuses/filter', { track: '#test', language: 'en' })

    /*stream.on('tweet', function (tweet) {
      console.log(tweet.text)

        Tweets.insert({
          text: tweet.text,
          createdAt: new Date() // current time
        });
    })*/

    stream.on('tweet', Meteor.bindEnvironment( function(data) {
      console.log(data.text)
      Tweets.insert(data)    // removing this line avoids the error
    }));
  });
}
