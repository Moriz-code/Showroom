import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { login } from '../actions/UserActions'

class Login extends Component {

    state = {
        msg: '',
        loginCred: {
            email: '',
            password: ''
        }
    }


    doLogin = async (ev) => {
        ev.preventDefault()
       
        const { email, password } = this.state.loginCred;
        if (!email || !password) {
            return this.setState({ msg: 'Please enter user/password' });
        }
        const userCreds = { email, password };
         await this.props.login(userCreds);
          this.setState({ loginCred: { email: '', password: '' } });
         ( sessionStorage.getItem('user'))? this.props.history.push('./item') : this.setState({msg:'Wrong email or password'})
    }

    loginHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            loginCred: {
                ...prevState.loginCred,
                [name]: value
            }
        }));
    };

    render() {
        return (<React.Fragment>
            <h2>{this.state.msg}</h2>
            <form onSubmit={this.doLogin}>
                <input
                    type="email"
                    name="email"
                    value={this.state.loginCred.email}
                    onChange={this.loginHandleChange}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    name="password"
                    value={this.state.loginCred.password}
                    onChange={this.loginHandleChange}
                    placeholder="Password"
                />
                <br />
                <button>Login</button>
            </form>
            <p>Do not have an account yet?
               <Link to={`/signUp`}> <span>Signup</span></Link>
                </p>
        </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {
    login
};





export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
