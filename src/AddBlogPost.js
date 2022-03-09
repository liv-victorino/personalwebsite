
import React from 'react'


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


        try {

           // console.log("we got to the sumbit + " + this.state)
            let response = fetch("http://localhost:5000/addblogpost",
            
            {
                method: "POST",
                body: JSON.stringify({title: this.bpRef.current.value, body: this.state.value, id: this.props.post}),
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
      );
    }
  }

  export default AddBlogPost;

export { AddBlogPost };
