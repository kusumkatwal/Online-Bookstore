import './log_in.css';
export function Login()
{

    const slider= () =>{
        let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
  
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click",() => {
      slider.classList.remove("moveslider");
      formSection.classList.remove("form-section-move");
});
    }
    return(
        <div className="login-container">
            <div className='account-login'>
                 <div class="slider"></div>
                     <div class="form-changing">
                          <button class="login">Log In</button>
                          <button class="signup" onClick={slider}>Sign Up</button>
                    </div>
            <div className="form-section">
                <div className="log-in">
                <form action="#" method="get">
                   <ul type="none">
                   <li>
                    <label for="emailaddress" className="label">Email:</label>
                    <input type="email" id="emailaddress" className="login-input"/>
                   </li>

                   <li>
                    <label for="psw" class="label">Password:</label>
                    <input type="password" id="psw" className="login-input"/>
                   </li>

                    <li><button class="click-btn">Log In</button></li>
                   </ul>
                </form>
                </div>

                <div class="sign-up">
                <form action="#" method="get">
                   <ul type="none">
                    <li>
                    <label for="name" class="label">Enter name:</label>
                    <input type="text" id="name" class="login-input"/>
                    </li>

                    <li>
                    <label for="email" class="label">Create an emailaddress:</label>
                    <input type="email" id="email" class="login-input"/>
                    </li>

                    <li>    
                    <label for="password" class="label">Create a password:</label>
                    <input type="password" id="password" class="login-input"/>
                    </li>

                    <li>   
                    <label for="confirm" class="label">Confirm your password:</label>
                    <input type="password" id="confirm" class="login-input"/>
                    </li>
                    
                    <li> <button class="click-btn">Sign Up</button></li>
                   </ul>
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}