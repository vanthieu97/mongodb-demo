import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UsernameConsumer, UsernameContext } from '../context';

class LoginAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginAccount = evt => {
        evt.preventDefault()
        const account = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post('http://localhost:5000/accounts/login/', account)
            .then(res => {
                if (res.data.length) {
                    let account = res.data[0]
                    this.context.handleChangeUsername(account.username)
                    window.location = '/'
                }
            })
    }

    render() {
        return (
            <UsernameConsumer>
                {
                    value => {
                        return (
                            <form className="form-horizontal" onSubmit={this.handleLoginAccount}>
                                <fieldset>
                                    <div id="legend">
                                        <legend className="">Login</legend>
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
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <label className="control-label" htmlFor="password">Password</label>
                                        <div className="controls">
                                            <input
                                                required
                                                type="password"
                                                id="password"
                                                name="password"
                                                placeholder="Password"
                                                className="input-xlarge"
                                                onChange={evt => {
                                                    this.setState({
                                                        password: evt.target.value
                                                    })
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <div className="controls">
                                            <button className="btn btn-success">Login</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        )
                    }
                }
            </UsernameConsumer>
        )
    }
}
LoginAccount.contextType = UsernameContext
export default LoginAccount