import React from "react";
import { Container} from 'semantic-ui-react';

const Bio = (props) => (
    <Container text>
    <div>
    <h1>{props.text}</h1>
    {props.children}
    </div>
   </Container>
)

export default Bio;