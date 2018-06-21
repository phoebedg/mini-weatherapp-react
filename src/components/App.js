import React from "react";
import Header from "./Header.js";
import Photo from "./Photo.js";
import Info from "./Info.js";
import Thumbs from "./Thumbs.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      mainImage: "",
      color: "",
      author: "",
      thumbs: []
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
    this.receiver = this.receiver.bind(this);
    // Use the props passed to App here (hint: look at ../index.js)
  }

  fetchImage() {
    fetch(
      `https://api.unsplash.com/search/photos?query=${
        this.state.description
      }&client_id=70b32e7fb0f3151dc801ba5cb4a9f0ff0ed704984dce7970f6601e817ca9fcd7`
    )
      .then(function(imageResponse) {
        return imageResponse.json();
      })
      .then(imageData => {
        console.log(imageData);
        let thumbArr = imageData.results.map(img => img.urls);
        // let colorArr = imageData.results.map(col => col.color);
        // let authorArr = imageData.results.map(aut => aut.user.name);
        this.setState(function() {
          return {
            mainImage: imageData.results[0].urls.regular,
            color: imageData.results[0].color,
            author: imageData.results[0].user.name,
            thumbs: thumbArr
            // color: colorArr[0],
            // author: authorArr[0]
          };
        });
        console.log(this.state);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onSearchSubmit(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4afe87cd7eddc53b1473c2bc0ddb2e37`
    )
      .then(function(weatherResponse) {
        return weatherResponse.json();
      })
      .then(weatherData => {
        // console.log(weatherData.weather[0].description);
        this.setState({
          description: weatherData.weather[0].description
        });
        return this.fetchImage(this.state.description);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  receiver(href) {
    this.setState({
      mainImage: href
    });
  }

  render() {
    return (
      <div className="content">
        <Header />
        <Photo mainImage={this.state.mainImage} />
        <Info description={this.state.description} author={this.state.author} />
        <Thumbs
          thumbs={this.state.thumbs}
          receiver={this.receiver}
          color={this.state.color}
          author={this.state.author}
        />
        <Search onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
