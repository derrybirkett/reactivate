Meteor.startup(function () {
  injectTapEventPlugin();
  // Use Meteor.startup to render the component after the page is ready
  React.render(<App />, document.getElementById("app"));
});
