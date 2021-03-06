import Paper from '@material-ui/core/Paper';
import * as React from 'react';
import './App.css';
import Form from "./Components/Form";
import Titles from "./Components/Titles";
import Weather from "./Components/Weather";

const API_KEY = "b0dd147114d7b11519038b4324e4e507";

class App extends React.Component {
  public state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  public getWeather = async (e: any) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json();
    if (city && country && data.cod !== "404") {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a valid location."
      });
    }
  }
  public render() {
    return (
      <div className="Page-background">
        <div className="App">
          <Paper elevation={10} style={{paddingTop: "3vh", minHeight: "25vh"}}>
            <Titles />
            <Form getWeather={this.getWeather}/>
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}/>
          </Paper>
        </div>
      </div>
    )
  }
}

export default App;