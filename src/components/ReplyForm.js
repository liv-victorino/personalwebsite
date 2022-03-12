
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
      let confirmation = ""
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


            confirmation = "reply posted"
            document.getElementById("ReplyFormConfirmation").innerText = confirmation
        } catch (error) {
          confirmation = "error: " + error
            document.getElementById("ReplyFormConfirmation").innerText = confirmation
        }
    }
  
    render() {
      return (
        <div>        <form onSubmit={this.handleSubmit}>
        <label>
          Reply: 
          <input className="reply" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="ReplyFormConfirmation"></div>
</div>

      );
    }
  }

  export default ReplyForm;

export { ReplyForm };
