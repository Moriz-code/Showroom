import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


import { signup } from '../actions/UserActions';
import InnerNavBar from '../cmps/InnerNavBar';

class SignUp extends Component {

    state = {
        msg: '',
        signupCred: {
            email: '',
            password: '',
            username: '',
            fullName: "",
            wishlist: [],
            shopId: ""
        }
    }

    signupHandleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            signupCred: {
                ...prevState.signupCred,
                [name]: value
            }
        }));
    };


    doSignup = async ev => {
        ev.preventDefault();
        const { email, password, username, fullName, wishlist, shopId } = this.state.signupCred;
        if (!email || !password || !fullName) {
            return this.setState({ msg: 'All inputs are required!' });
        }
        const signupCreds = { email, password, username, fullName, wishlist, shopId };
        this.props.signup(signupCreds);
        this.setState({ signupCred: { email: '', password: '', username: '', fullName: '', wishlist: [], shopId: '' } });
    };


    render() {
        return (<React.Fragment>

            <InnerNavBar></InnerNavBar>
            <form className="signup-form flex column align-center" onSubmit={this.doSignup}>
                <div>
                    <lable>User Name</lable>
                    <input type="text" placeholder="Enter Full Name" onChange={this.signupHandleChange} name="fullName" value={this.state.signupCred.fullName}></input>
                </div>
                <div>
                    <lable>Email</lable>
                    <input type="email" placeholder="Enter Email Address" onChange={this.signupHandleChange} name="email" value={this.state.signupCred.email}></input>
                </div>
                <div>
                    <lable>Password</lable>
                    <input type="password" placeholder="Enter Password" onChange={this.signupHandleChange} name="password" value={this.state.signupCred.password}></input>
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </form>
        </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        //state
    };
};

const mapDispatchToProps = {
    signup
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
