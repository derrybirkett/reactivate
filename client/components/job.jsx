const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

// Task component - represents a single todo item
Job = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    title: React.PropTypes.string
  },
  render() {
    return (
      <ListItem
        title={this.props.job.title}
        primaryText={ this.props.job.title }
        leftAvatar={ <Avatar src={ this.props.job.company_logo }/> }
        secondaryText={ this.props.job.type }
      />
      
    );
  }
});
