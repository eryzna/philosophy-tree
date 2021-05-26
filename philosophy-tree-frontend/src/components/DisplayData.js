import React from 'react';
 
class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.category}</h1>
        <h1>{this.props.formData.content}</h1>
        <h1>{this.props.formData.author}</h1>
      </div>
    )
  }
}
 
export default DisplayData