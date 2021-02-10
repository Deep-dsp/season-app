// import logo from './logo.svg';
import React from "react";
import './App.css';
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/spinner.js";

class App extends React.Component{

  state = { lat: null, errorMessage: '' }

  componentDidMount(){
        // Geolocation -> MDN default API
        window.navigator.geolocation.getCurrentPosition (

            position => this.setState({ lat : position.coords.latitude}),// This is how we update the values in this.state defined in constructor
            err => this.setState({ errorMessage : err.message })
          
          );
  }

  render(){
    
    if(this.state.errorMessage && !this.state.lat){
        return <div> Error: {this.state.errorMessage} </div>;
    }
    else if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    else{
      return <Spinner message="Please accept location request"/>
    }

  }

}

export default App;
