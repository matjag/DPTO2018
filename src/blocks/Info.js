import React from "react";
import { List } from 'semantic-ui-react'

import "./Info.scss";

const Info = () => (
  <List>
    <List.Item>
      <List.Icon name='child' />
      <List.Content>17.06.1996</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='marker' />
      <List.Content>Siemianowice Slaskie</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='phone' />
      <List.Content>663 229 364</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='address card' />
      <List.Content>
        <a href='matjag96@gmail.com'>matjag96@gmail.com</a>
      </List.Content>
    </List.Item>
  </List>
)

export default Info;