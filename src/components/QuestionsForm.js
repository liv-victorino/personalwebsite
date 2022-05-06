
import React from 'react'

//This QuestionsForm component renders a questions input and sends the response to mongodb

class QuestionsForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      console.log(this.state)
    }
  
    handleSubmit = async function (event) {

        let confirmation = ""
        try {
            let response = fetch("https://personalsite-backend.herokuapp.com/posts",
            
            {
                method: "POST",
                body: JSON.stringify({body: this.state.value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            
            })

            confirmation = "question posted"
            document.getElementById("QFormConfirmation").innerText = confirmation

        } catch (error) {
            confirmation = "error: " + error
            document.getElementById("QFormConfirmation").innerText = confirmation
        }
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            
            <input type="text" placeholder="keep it real" className="question" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div id="QFormConfirmation"></div>

        </div>
      );
    }
  }

  export default QuestionsForm;

export { QuestionsForm };
