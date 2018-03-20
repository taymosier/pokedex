import React from 'react';
import { Label, Col, Grid, Panel, Row } from 'react-bootstrap';
import './styles/DetailView.css';

function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}

const DetailView = ({ pokemon }) => {
  let { id, name, sprite, type, type2, baseHealth, baseSpeed, baseAttack, baseDefense, baseSpecialAttack, baseSpecialDefense } = pokemon;
  if(name){
    name = capitalize(name);
  }
  if(type){
    type = capitalize(type);
  }
  if(type2){
    type2 = capitalize(type2);
  }
  // const { id, name, sprite, type, type2} = pokemon;
  return (
    <Grid fluid className="detail-view">
      <Row className="show-grid spriteImageRow">
        {sprite
          ? <Col lg={5} md={4} sm={3} lgOffset={3} mdOffset={1} smOffset={0} className="sprite-wrapper">
              <img src={sprite} className="sprite-image" alt={"sprite"}/>
            </Col>
          : null
        }
      </Row>
      <Row className="show-grid stats-row">
        <Col lg={10} md={10} sm={10} lgOffset={1} mdOffset={1} smOffset={1} className='data-wrapper '>
          <Row className="nameRow">
            {name
              ? <h1 className='data-name'>{name}</h1>
              : null
            }
          </Row>
          <Row>
            <Col>
              { type2
                ? <p className='data-char'>Type: {type} / {type2}</p>
                : <p className='data-char type-column'>Type: {type}</p>
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <p className='data-char'>Base Stats</p>
            </Col>
            <Col lg={6} md={6} sm={3} xs={6} className="stat-column">
              <p className="number">Health: {baseHealth}</p>
              <p className="number">Attack: {baseAttack}</p>
              <p className="number">Defense: {baseDefense}</p>
            </Col>
            <Col lg={6} md={6} sm={3} xs={6} className="stat-column">
              <p className="number">Special Attack: {baseSpecialAttack}</p>
              <p className="number">Special Defense: {baseSpecialDefense}</p>
              <p className="number">Speed: {baseSpeed}</p>
            </Col>
            <Col lgHidden mdHidden sm={12} xs={8} xsOffset={2}>
              <Panel bsStyle="info">
                <Panel.Heading>
                  Tap to return to pokemon list
                </Panel.Heading>
              </Panel>
            </Col>
        </Row>

        </Col>
      </Row>

    </Grid>
  )
}
export default DetailView;
