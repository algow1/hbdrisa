import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    }
  }

  render() {
    return(
      <Grid padded style={{backgroundColor: '#1a1919', height: '100vh' }}>
        <Grid.Row columns={1}>
          <Grid.Column>
            
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} >
          <Grid.Column verticalAlign='bottom' textAlign='center'>
            <Button color='blue'>Gallery</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Gallery;
