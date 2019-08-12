import React from "react"
import "./Login.css"

function Login() {
    return (
        <div>
            <div className="Login_Outer">
                <div className="Login_main">
                    <h1>Ace's Dungeons And Dragons Login/Register</h1>
                    <div className="Login_Input_Container">
                        <input className="Login_Inputs" type="text" placeholder="Username" />
                        <input className="Login_Inputs" type="text" placeholder="Email" />
                        <input className="Login_Inputs" type="text" placeholder="Password" />
                    </div>
                    <div className="Login_Buttons">
                        <div>
                        <button>Login</button>
                        </div>
                        <div>
                        <button>Register</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Login;