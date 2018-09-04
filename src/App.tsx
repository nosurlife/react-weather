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
    const country = e.target.element.country.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await apiCall.json();
    if (city && country) {
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
        error: "Please enter the location."
      });
    }
  }
  public render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}/>
      </div>
    )
  }
}

export default App;