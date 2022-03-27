import React from 'react'
import useLocalStorage from 'use-local-storage';
import './index.css'
function App() {
  const [ theme, setTheme ] = useLocalStorage('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className="app" data-theme={theme}>
        <div className="login">
          <h1>LOGIN</h1>
          <div className="container">
            <div className="top">
              <i className="fa fa-google"/>
              <i className="fa fa-facebook-square"/>
              <i className="fa fa-linkedin"/>
              <i className="fa fa-twitter-square"/>
              <i className="fa fa-apple"/>
            </div>
            <p className="divider"><span>Or</span></p>
            <form>
              <label>Email</label>
              <input type="email" placeholder="Enter your email"/>
              <label>Password</label>
              <input type="password" placeholder="Enter your password"/>
              <div className="remember">
                <input type="checkbox" checked="checked"/>
                <p>Remember Me</p>
              </div>
              <button>Log In</button>
            </form>
            <div className="bottom">
              <a href='/'>Forget your password</a>
              <a href='/'>Reset you password</a>
            </div>
            <p className="create">Create account</p>
          </div>
          <div className="theme-toggle">
            <h2>Light Theme</h2>
            <i onClick={switchTheme} class="fa fa-toggle-on"/>
          </div>
        </div>
    </div>
  );
}

export default App;
