import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";
import Bio from "./blocks/Bio";
import DynamicHeader from "./headers/DynamicHeader";
import './App.scss';
import Info from './blocks/Info';
import Experience from './blocks/Experience';

const myDetails = {
  experience: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ],
  education: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ]
}

class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                {
                 <Info/>
                }
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            <Bio text="Mateusz">
             <br/><br/>
            </Bio>
            
            <Experience items={myDetails.experience}/>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
