import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class Music extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <Grid padded style={{backgroundColor: '#1a1919', height: '100vh' }} verticalAlign='bottom' textAlign='center'>
        <Grid.Row columns={1} >
          <Grid.Column >
              <Grid textAlign='center'>
                <Button 
                  size='huge'
                  style={{marginBottom: '10px'}}
                  color='blue' 
                  onClick={this.props.onPlay}
                >
                  Begin
                </Button>
              </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Music;