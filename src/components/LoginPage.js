


//this Login function renders login buttons and sends the results to the backend.

function Login(props) {
    async function login(){
        let username = document.getElementById("username_input").value
        let password = document.getElementById("password_input").value
        let loginData = {
            username: username,
            password: password
        } 

        let confirmation = ""

        try {
            let response = await fetch(
                //https://personalsite-backend.herokuapp.com/
                "https://personalsite-backend.herokuapp.com/login",
                {
                    method: "POST",
                    body: JSON.stringify(loginData),
                    headers: {
                        'Content-Type': 'application/json'
                      }
                }
            );
            let responesText = await response.json();
            props.userChange({username: responesText.userid})
            confirmation = "login succeeded, answer a question or log out"
        } catch (error) {
            confirmation = "login error: " + error
        }
        document.getElementById("results").innerText = confirmation;

    }
    
    async function logout(){
        let confirmation = ""

        try {
            
        let response = await fetch(
            'https://personalsite-backend.herokuapp.com/logout',
            {
                method: "POST"
            }
        )
        let responesText = await response.text();
        props.userChange({username: ""})
            confirmation = "logout succeeded"
        } catch (error) {
            confirmation = "logout error: " + error
        }
        document.getElementById("results").innerText = confirmation;

    }
    return(  <div><h3>login</h3>
    Username: <input type="text" id="username_input"></input><br></br>
    Password: <input type="text" id="password_input"></input>
    <button onClick={login}>Log in</button> 
    <button onClick={logout}>Log out</button>
    <div id="results"></div>

    
    
    </div>)
}
export default Login;

export { Login };