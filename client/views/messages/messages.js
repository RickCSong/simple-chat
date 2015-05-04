Template['messages'].helpers({
});

Template['messages'].events({
});

Template['messages'].rendered = function() {
  $('.messages-entry-textarea').autosize();
};