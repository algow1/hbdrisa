import React, { Component } from 'react';
import { Grid, Button, Header, Transition, Icon } from 'semantic-ui-react';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import banner from '../banner.png';

class Wisher extends Component {
  constructor(props) {
    super(props);

    this.ucapan = [
      'Selamat ulang tahun manusia favoritku',
      'Semoga selalu dalam lindungan-Nya',
      'Tercapai semua yang kamu impikan',
      'Semoga tahun depan lulus tubel',
      'Biar bisa sering pulang',
      'Aku yakin kamu pasti bisa',
      'Yang paling penting....',
      'Semoga kamu selalu bahagia',
      'Selalu menjadi Risa yang apa adanya',
      'I love you, Risa ❤️❤️❤️'
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
    const bg = ['#59dcff', '#3fd7ff', '#25d2ff', '#0ccdff', '#00bff1', '#00bff2'];

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
            transition: "all .8s ease",
            WebkitTransition: "all .8s ease",
            MozTransition: "all .8s ease"
          }}
        >
          <Grid.Row columns={6} textAlign='center' verticalAlign='middle' style={{height: '20%'}}>
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
              <Header as='h1' style={{fontSize: '36px', color: '#fff' }}>Risa Nur Andani</Header>
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
              <Grid.Column verticalAlign='middle' textAlign='center'>
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
                <Button icon labelPosition='right' color='blue' onClick={this.props.onGallery}>
                  Swipe
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
