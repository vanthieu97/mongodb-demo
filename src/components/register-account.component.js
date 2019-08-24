import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { isThisQuarter } from 'date-fns/esm';

export default class RegisterAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleRegisterAccount = evt => {
        evt.preventDefault()
        const account = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:5000/accounts/register/', account)
            .then(res => console.log(res.data))
        window.location = '/';
    }

    render() {
        return (
            <form className="form-horizontal" action='/' onSubmit={this.handleRegisterAccount}>
                <fieldset>
                    <div id="legend">
                        <legend className="">Register</legend>
                    </div>
                    <div className="control-group">
                        <label className="control-label" htmlFor="username">Username</label>
                        <div className="controls">
                            <input
                                required
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                className="input-xlarge"
                                onChange={evt => {
                                    this.setState({
                                        username: evt.target.value
                                    })
                                }} />
                            <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="email">E-mail</label>
                        <div className="controls">
                            <input
                                required
                                type="text"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                className="input-xlarge"
                                onChange={evt => {
                                    this.setState({
                                        email: evt.target.value
                                    })
                                }} />
                            <p className="help-block">Please provide your E-mail</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password">Password</label>
                        <div className="controls">
                            <input
                                required
                                type="password"
                                id="password"
                                ref="password"
                                name="password"
                                placeholder="Password"
                                className="input-xlarge"
                                onChange={evt => {
                                    this.setState({
                                        password: evt.target.value
                                    })
                                }} />
                            <p className="help-block">Password should be at least 4 characters</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label" htmlFor="password_confirm">Confirm Password</label>
                        <div className="controls">
                            <input
                                required
                                type="password"
                                id="password_confirm"
                                ref="passwordcomfirm"
                                name="password_confirm"
                                placeholder="Confirm Password"
                                className="input-xlarge"
                                onChange={evt => {
                                    this.setState({
                                        confirmPassword: evt.target.value
                                    })
                                }}
                                onBlur={evt => {
                                    if (this.state.password !== this.state.confirmPassword) {
                                        document.getElementById('password_confirm').setCustomValidity("Password don't match")
                                    } else {
                                        document.getElementById('password_confirm').setCustomValidity('')
                                    }
                                }} />
                            <p className="help-block">Please confirm password</p>
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="controls">
                            <button className="btn btn-success">Register</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        )
    }
}