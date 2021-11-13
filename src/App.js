import React, { Component } from 'react';
import Music from './views/Music';
import Wisher from './views/Wisher';
import Gallery from './views/Gallery';
import music from './hbd.mp3';

// import {Transition} from 'semantic-ui-react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      music: {
        play: false,
        visible: true
      }
    }
    this.audio = new Audio(music);
  }

  handlePlay = () => {
    this.setState({ music: { play: true, visible: false } });
    this.audio.loop = true;
    this.audio.play();
    this.setState({page: 'wisher'})

    // setTimeout(function(){ this.setState({page: 'wisher'}); }.bind(this), 1500);
  }

  handleGallery = () => {
    this.setState({page: 'gallery'});
  }

  render() {
    let display;

    switch (this.state.page) {
      case 'wisher':
        display = <Wisher onGallery={this.handleGallery} />;
        break;
    
      case 'gallery':
        display = <Gallery />;
        break;

      default:
        display = <Music onPlay={this.handlePlay} music={this.state.music} />;
        break;
    }
    
    return(
      <div>
        {display}
      </div>
    )
  }
}

export default App;
