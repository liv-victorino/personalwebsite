
import React from 'react'


class ReplyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = async function (event) {
        try {

           // console.log("we got to the sumbit + " + this.state)
            let response = fetch("https://personalsite-backend.herokuapp.com/reply",
            
            {
                method: "POST",
                body: JSON.stringify({body: this.state.value, id: this.props.post}),
                headers: {
                    'Content-Type': 'application/json'
                }
            
            })


        } catch (error) {
            console.log(error)
        }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Reply: 
            <input className="reply" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ReplyForm;

export { ReplyForm };
