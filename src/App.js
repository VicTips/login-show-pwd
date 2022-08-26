import Logo from "./assets/login-logo.svg"
import { useState } from "react";

const App = () => {
  const [showPwd, setShowPwd] = useState(false)
  return (
    <main className="bg-ligth vh-100 d-flex justify-content-center align-items-center">
      <form className="p-5 rounded-5 shadow border border-4 border-white form-container-lavender" >
        <div className="text-center pb-4 mt-opposite" >
          <img src={Logo} alt="login-logo" className="rounded-circle shadow border border-4 border-white logo-img" />
        </div>
        <div className="form-floating">
          <input type="text" className="form-control fw-semibold fs-5 border-0 shadow" placeholder="User ID" id="userid" required />
          <label htmlFor="userid" >User ID</label>
        </div>
        <div className="form-floating mt-3">
          <input type={showPwd ? "text" : "password"} className="form-control position-relative fw-semibold fs-5 border-0 shadow" placeholder="password" id="password" required />
          <label htmlFor="password" >Password</label>
          <div className="position-absolute pointer pwd-icon" onClick={() => setShowPwd(!showPwd)}>
            {showPwd ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={"1.5rem"}>
              <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
              <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
              <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
            </svg>}
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <p className="d-inline-block m-0 pe-2 pt-2 fst-italic fw-semibold pointer forgot-text">Forgot Password?</p>
        </div>
        <div className="px-5">
          <button className="text-white btn-purple mt-3 text-center py-2 fw-semibold fs-4 rounded-3 w-100 border border-4 border-white shadow">Login</button>
        </div>
      </form>
    </main>
  );
}

export default App;
