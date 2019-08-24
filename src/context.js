import React, { Component } from 'react'
const UsernameContext = React.createContext();


class UsernameProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: localStorage.getItem('username')
        }
    }

    componentDidMount() {
    }

    handleChangeUsername = val => {
        this.setState({
            username: val
        })
        localStorage.setItem('username', val)
    }

    render() {
        return (
            <UsernameContext.Provider
                value={{
                    ...this.state,
                    handleChangeUsername: this.handleChangeUsername
                }}>
                {this.props.children}
            </UsernameContext.Provider>
        )
    }
}

const UsernameConsumer = UsernameContext.Consumer;
export { UsernameProvider, UsernameConsumer, UsernameContext }