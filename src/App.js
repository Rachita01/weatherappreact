import React,{useState} from 'react';

const api = {
  key:"2e2282c5d08ebcd7021e05ef8f57d292",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const[query,setQuery]= useState('');
  const[weather,setWeather]= useState({});

  const search = evt => {
    if(evt.key==="Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
    });
  }
}
  const dateBuilder = (d) =>
  {
    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className={
      (typeof weather.main!="undefined")
      ? ((weather.main.temp > 16)
    ? 'app warm'
  : 'app')
  :'app'
}>
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search place"
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
          {(typeof weather.main!="undefined") ? (
            <div>
              <div className="location-box">
               <div className="location">{weather.name},{weather.sys.country}</div>
               <div className="date">{dateBuilder(new Date())}</div>
              </div>
              <div className="weather-box">
               <div className="temperature">{Math.round(weather.main.temp)}&deg;</div>
               <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>):('')}
       
      </main>
    </div>
  );
}

export default App;

// import React, { Component } from 'react';  
  
// class App extends React.Component {  
//    constructor(props) {  
//       super(props);  
//       this.state = {hellotext: "JavaTpoint"};  
//       this.changeState = this.changeState.bind(this)  
//    }    
//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS component's Lifecycle</h1>  
//              <h3>Hello {this.state.hellotext}</h3>  
//              <button onClick = {this.changeState}>Click Here!</button>          
//          </div>  
//       );  
//    }  
//    componentWillMount() {  
//       console.log('Component Will MOUNT!')  
//    }  
//    componentDidMount() {  
//       console.log('Component Did MOUNT!')  
//    }  
//    changeState(){  
//       this.setState({hellotext:"All!!- Its a great reactjs tutorial."});  
//    }  
//    componentWillReceiveProps(newProps) {      
//       console.log('Component Will Recieve Props!')  
//    }  
//    shouldComponentUpdate(newProps, newState) {  
//       return true;  
//    }  
//    componentWillUpdate(nextProps, nextState) {  
//       console.log('Component Will UPDATE!');  
//    }  
//    componentDidUpdate(prevProps, prevState) {  
//       console.log('Component Did UPDATE!')  
//    }  
//    componentWillUnmount() {  
//       console.log('Component Will UNMOUNT!')  
//    }  
// }  
// export default App;  