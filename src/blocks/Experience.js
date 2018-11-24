import React from 'react'
import { Grid, Reveal } from 'semantic-ui-react'

const Experience = ({ items }) => (
  <Grid columns={4} divided>
    {

      items.map((item, index) => (
       
        <Grid.Row>
          <Grid.Column>
            {item.title}
          </Grid.Column>
          <Grid.Column>
            {item.description}
          </Grid.Column>
          <Grid.Column>
            From: {item.from}
          </Grid.Column>
          <Grid.Column>
            To: {item.to}
          </Grid.Column>
        </Grid.Row>
     
      ))
    }

  </Grid>
)

export default Experience