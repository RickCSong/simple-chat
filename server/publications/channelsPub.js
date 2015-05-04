Meteor.publish('channels', function () {
  return Channel.find();
});
