import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            harError: false,
        }
    }
     
componentDidCatch(error, info){
    this.setState({hasError: true})
}

    render(){
        return this.state.harError?
        <h1>Oppps that is not good.</h1>:
        this.props.children;
    }
}

export default ErrorBoundry;