import Questions from './Questions'





function Login() {
    async function login(){
        let username = document.getElementById("username_input").value
        let password = document.getElementById("password_input").value
        let loginData = {
            username: username,
            password: password
        } 
        let response = await fetch(
            "https://personalsite-backend.herokuapp.com/login",
            {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json'
                  }
            }
        );
        let responesText = await response.text();
        document.getElementById("results").innerText = responesText;
    }
    
    async function logout(){
        let response = await fetch(
            'https://personalsite-backend.herokuapp.com/logout',
            {
                method: "POST"
            }
        )
        let responesText = await response.text();
        document.getElementById("results").innerText = responesText;
    }
    return(  <div><h3>login</h3>
    Username: <input type="text" id="username_input"></input><br></br>
    Password: <input type="text" id="password_input"></input>
    <button onClick={login}>Log in</button> 
    <button onClick={logout}>Log out</button>
    <div id="results"></div>

    
    
    </div>)
}
//somehow need to load the questions again but with an option to edit their replies...
//possible to have admin go back to questions page and display reply boxes for each??


export default Login;

export { Login };