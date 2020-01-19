import React, { Component } from 'react';
import { connect } from 'react-redux'
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
        this.props.login(userCreds);
        this.setState({ loginCred: { email: '', password: '' } });
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
                    type="text"
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
