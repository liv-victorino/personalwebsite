
import React from 'react'


class QuestionsForm extends React.Component {
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
            let response = fetch("/posts",
            
            {
                method: "POST",
                body: JSON.stringify({body: this.state.value}),
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
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default QuestionsForm;

export { QuestionsForm };
