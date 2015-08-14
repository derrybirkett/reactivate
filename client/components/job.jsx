// Task component - represents a single todo item
Job = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    title: React.PropTypes.string
  },
  render() {
    return (
      <li>{this.props.job.title}</li>
    );
  }
});
