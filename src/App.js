import React from 'react' 
import axios from 'axios'

import './App.css'

class App extends React.Component {
    state = {
        advice: ''
    } //state on accepts objects

    componentDidMount(){ //ReactDOM.render is called
        this.fetchAdvice() //similar to python self.method()
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice') //basically fetch implementation + restful api        
            .then((res) => {
                const {advice} = res.data.slip //object destructuring
                this.setState({advice}) //changing the components state
                console.log(advice)
            })
            .catch((error) => {
                console.log(error)
            }) 
    }

    render (){
        const {advice} = this.state //destructuring advice from state
        return (
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{advice}</h1>
                    <button className='button' onClick={this.fetchAdvice}>
                        <span>Give me Advice</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App