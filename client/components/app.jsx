const {
  List,
  ListItem,
  ListDivider,
  Avatar,
  RaisedButton
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

// App component - represents the whole app
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      jobs: Jobs.find({}).fetch()
    }
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  renderJobs() {
    // Get tasks from this.data.tasks
    return this.data.jobs.map((job) => {
      return <Job key={job._id} job={job} />;
    });
  },

  loadJobs() {
    var jobs = Meteor.call("loadList", function(err, res) {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log(res.data)
        var writeJObs = Meteor.call("writeJobs", res.data, function(error,result) {
          if(error)
            console.log(error);
        });
      }
    });
  },

  render() {
    return (
      <div className="container">
        <RaisedButton label="Load" onClick={this.loadJobs} />
        <List subheader="New">
          {this.renderJobs()}
        </List>
      </div>
    );
  }
});
