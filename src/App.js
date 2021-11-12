import React, { Component } from 'react';
import './App.css';
import Music from './views/Music';
import Wisher from './views/Wisher';
import Gallery from './views/Gallery';
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
    this.url = "../hbd.mp3";
    this.audio = new Audio(this.url);
  }

  handlePlay = () => {
    this.setState({ music: { play: true, visible: false } });
    this.audio.loop = true;
    this.audio.play();
    this.setState({page: 'wisher'})

    // setTimeout(function(){ this.setState({page: 'wisher'}); }.bind(this), 1500);
  }

  render() {
    return(
      <div>
        {
          (this.state.page === '') 
          ?
            <Music onPlay={this.handlePlay} music={this.state.music} /> 
          :
            (this.state.page === 'wisher') 
            ?
              <Wisher />
            :
              <Gallery />
        }
      </div>
      
    )
  }
}

export default App;
