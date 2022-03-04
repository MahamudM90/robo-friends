import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css'
import Scroll from '../Components/Scroll';
import ErrorBoundry from './ErrorBoundry';
// Parent components feed state into child, child receives the property and child can never that property
// const state = ;

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users})
    })}

    onSearchChange = ((event)=>{
        this.setState({searchfield: event.target.value});
        
    })

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length?
            <h1>Loading!</h1>:
        (
            <div className='tc'>
            <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange} />
        <Scroll>
            <ErrorBoundry>
            <CardList robots={filteredRobots} />
            </ErrorBoundry>
        </Scroll>
            </div>
        )
        }
} 
// const App = () =>{
//     return (
//         <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots={robots} />
//         </div>
//     );
// }

export default App;