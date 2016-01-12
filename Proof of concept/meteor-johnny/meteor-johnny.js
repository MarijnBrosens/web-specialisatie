if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    var five = Meteor.npmRequire('johnny-five');
    var board = new five.Board();

    board.on("ready", function() {
      var servo = new five.Servo(10);

      // Add servo to REPL (optional)
      this.repl.inject({
        servo: servo
      });

      servo.sweep();

    });
  });
}
