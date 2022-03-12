
import React from 'react'

//This AddBlogPost component handles adding a new blog post to the database.
class AddBlogPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.bpRef = React.createRef();
      this.bpRef2 = React.createRef();

    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = async function (event) {
      let confirmation = ""

        try {

           // console.log("we got to the sumbit + " + this.state)
            let response = fetch("http://localhost:5000/addblogpost",
            
            {
                method: "POST",
                body: JSON.stringify({title: this.bpRef.current.value, body: this.bpRef2.current.value}),
                headers: {
                    'Content-Type': 'application/json'
                }
            
            })
            confirmation = "success"
            document.getElementById("confirmation").innerText = confirmation


        } catch (error) {
          document.getElementById("confirmation").innerText = confirmation
            console.log("there was an error" + error)
        }
    }
  
    render() {
      return (
        <div>          
        <form onSubmit={this.handleSubmit}>
            <div>          <label>
            Title: 
            <input ref={this.bpRef} className="reply" type="text" onChange={this.handleChange} />
          </label></div>

          <div>          <label>
            Body: 
            <input ref={this.bpRef2} className="question" type="text" onChange={this.handleChange} />
          </label></div>

          <input type="submit" value="Submit" />
        </form>
        <div id="confirmation"></div>
        </div>
      );
    }
  }

  export default AddBlogPost;

export { AddBlogPost };
