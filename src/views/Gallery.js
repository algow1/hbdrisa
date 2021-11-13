import React, { Component } from 'react';
// import { Grid, Button } from 'semantic-ui-react';
import PhotoGrid from "react-photo-feed";
import getPhotos from "./photos";

class Gallery extends Component {
  render() {
    return(
      <div id="gallery">
        <PhotoGrid columns={3} photos={getPhotos()}/>
      </div>
    )
  }
}

export default Gallery;
