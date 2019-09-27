import React from 'react'
import axios from 'axios'
const scoreAxios = axios.create()

scoreAxios.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const {Provider, Consumer} = React.createContext()


class ContextProvider extends React.Component{
    constructor(){
        super()

        this.state={
            score: 0,
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ''
        }
    }
    signup = (userInfo) => {
        return scoreAxios.post('/auth/signup', userInfo)
        .then((response) =>{
            const { user, token } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem("user", JSON.stringify(user))
            this.setState({
                user,
                token
            })
                scoreAxios.post('api/score', 0)
            this.getScore()
            return response
        })
    }

    login = (credentials) =>{
        console.log(credentials)
        return scoreAxios.post('/auth/login', credentials)
        .then(response =>{
            console.log(response.data)
            const{ user, token } = response.data
            localStorage.setItem('token', token )
            localStorage.setItem('user', JSON.stringify(user))
            this.setState({
                user,
                token
            })
            this.getScore()
            return response
        })
    }
    getScore = () =>{
        return scoreAxios.get('api/score')
        .then((res)=>{
            this.setState({score: res.data[0].score})
            return res
        })
    }
    logout = () =>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('topscore')
        this.setState({
            score: [],
            user: {},
            token: ''
        })
    }

    render(){
        return(
            <div>
                <Provider value={{
                                login: this.login,
                                signup: this.signup,
                                logout: this.logout,
                                ...this.state}}>
                    {this.props.children}
                </Provider>
            </div>
        )
    }
}

export default ContextProvider

export const withContext = (Comp) => {
    return (props) => {
        return(
       <Consumer>
           {value => <Comp {...value} {...props}/>}
       </Consumer>

        )
    }
}