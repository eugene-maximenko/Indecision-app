class VisibilityToggle extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
=======
    constructor(props) {
      super(props);
      this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
      this.state = {
        visibility: false
      };
    }
    handleToggleVisibility() {
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
          </button>
          {this.state.visibility && (
            <div>
              <p>Hey. These are some details you can now see!</p>
            </div>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
  
>>>>>>> 6f0b3e788f62b31511e79043b27f2780724e0c25
