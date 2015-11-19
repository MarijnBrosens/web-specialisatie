if (Meteor.isClient) {

  // task in Template
  Template.task.events({

    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      // Set the checked property to the opposite of its current value
      Meteor.call("setChecked", this._id, ! this.checked);
    },

    "click .delete": function () {
      Meteor.call("deleteTask", this._id);
    },

    "click .toggle-private": function () {
      Meteor.call("setPrivate", this._id, ! this.private);
    }

  });

  // looks for current task owner
  Template.task.helpers({
    isOwner: function () {
      return this.owner === Meteor.userId();
    }
  });

}