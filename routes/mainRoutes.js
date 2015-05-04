Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.redirect('signIn');
  } else {
    this.next();
  }
});

// Home Route
Router.route('/', function() {
  this.redirect('messages.show');
});

Router.route('/messages', function() {
  this.redirect('messages.show');
});

Router.route('/messages/:_id', function() {
  this.render('messages');
}, {
  name: 'messages.show'
});

// Accounts Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
