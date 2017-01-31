const React = require('react');
class ThemedDecorations extends React.Component {
  render(){
    const childrenPlusProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div>{childrenPlusProp}</div>
    )
  }
}

module.exports = ThemedDecorations;
