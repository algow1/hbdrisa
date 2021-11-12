import React, { Component } from 'react';
import { Grid, Button, Header, Transition, Icon } from 'semantic-ui-react';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import banner from '../banner.png';

class Wisher extends Component {
  constructor(props) {
    super(props);

    this.ucapan = [
      'Selamat ulang tahun, sayang', 
      'Semoga selalu berbahagia',
      'Ut enim ad minim veniam', 
      'Duis aute irure dolor in reprehenderit',
      '❤️❤️❤️'
    ];

    this.state = {
      bg: '#72e2ff',
      lamp: ['#ffea00', '#cc0000', '#0080ff', '#00cc00', '#a64dff', '#ff8000'],
      wish: {
        visible: false,
        i: 0
      },
      wishButton: true,
      nextButton: false,
      swipeDown: false
    }
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.animate();
    }, 1800);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  animate = () => {
    const bg = ['#3fd7ff', '#25d2ff', '#0ccdff', '#00bff1'];

    let lamp = this.state.lamp.sort(() => Math.random() - 0.9)
    this.setState({
      bg: bg[Math.floor(Math.random()*bg.length)],
      lamp: lamp
    })
  }

  toggleVisibility = () => {
    this.setState({wishButton: !this.state.wishButton, nextButton: !this.state.nextButton, wish:{visible: !this.state.wish.visible, i: this.state.wish.i}});
  }

  toggleWish = () => {
    if(this.state.wish.i < this.ucapan.length - 1) {
      this.setState({
        wish: {
          visible: true, 
          i: this.state.wish.i + 1
        }
      });
    } else {
      this.setState({nextButton: !this.state.nextButton, swipeDown: !this.state.swipeDown});
    }
  }

  render() {
    return(
      <div id='wisher'>
        <Confetti numberOfPieces={100}/>
        <Grid 
          padded 
          style={{
            backgroundColor: this.state.bg, 
            height: '100vh', 
            transition: "all .5s ease",
            WebkitTransition: "all .5s ease",
            MozTransition: "all .5s ease"
          }}
        >
          <Grid.Row columns={6} textAlign='center' style={{height: '20%'}}>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[0]}}></span></Grid.Column>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[1]}}></span></Grid.Column>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[2]}}></span></Grid.Column>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[3]}}></span></Grid.Column>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[4]}}></span></Grid.Column>
            <Grid.Column><span className="dot" style={{backgroundColor: this.state.lamp[5]}}></span></Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} textAlign='center' style={{height: '30%'}}>
            <Grid.Column>
              <img src={banner} alt='banner'/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} textAlign='center' style={{height: '20%'}}>
            <Grid.Column verticalAlign='top'>
              <Header as='h1' style={{fontSize: '48px', color: '#fff' }}>Risa Nur Andani</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} style={{height: '5%'}}>
            <Grid.Column verticalAlign='bottom' textAlign='center'>
              {
                this.state.wish.visible ?
                <Header as='h2' style={{fontSize: '18px', color: '#fff' }}>
                  {this.ucapan[this.state.wish.i]}
                </Header> :
                null
              }
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} style={{height: '25%'}}>
            <Transition visible={this.state.wishButton} animation='scale' duration={2000} >
              <Grid.Column verticalAlign='bottom' textAlign='center'>
                <Button 
                  onClick={this.toggleVisibility}
                  color='orange' 
                >
                  I Wish
                </Button>
              </Grid.Column>
            </Transition> 

            <Transition visible={this.state.nextButton} animation='scale' duration={2000}>
              <Grid.Column verticalAlign='bottom' textAlign='center'>
                <Button icon labelPosition='right' color='yellow' onClick={this.toggleWish}>
                  Next
                  <Icon name='right arrow' />
                </Button>
              </Grid.Column>
            </Transition>

            <Transition visible={this.state.swipeDown} animation='scale' duration={2000}>
              <Grid.Column verticalAlign='bottom' textAlign='center'>
                <Button icon labelPosition='right' color='blue'>
                  Swipe Down
                  <Icon name='angle double down' />
                </Button>
              </Grid.Column>
            </Transition>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Wisher;
