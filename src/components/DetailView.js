import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
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
          ? <Col lg={4} className="sprite-wrapper col-lg-offset-3">
              <img src={sprite} className="sprite-image" alt={"sprite"}/>
            </Col>
          : null
        }
      </Row>
      <Row className="show-grid stats-row">
        <Col lg={10} className='data-wrapper col-lg-offset-1'>
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
            <Col lg={6} className="stat-column">
              <p className="number">Health: {baseHealth}</p>
              <p className="number">Attack: {baseAttack}</p>
              <p className="number">Defense: {baseDefense}</p>
            </Col>
            <Col lg={6} className="stat-column">
              <p className="number">Special Attack: {baseSpecialAttack}</p>
              <p className="number">Special Defense: {baseSpecialDefense}</p>
              <p className="number">Speed: {baseSpeed}</p>
            </Col>
        </Row>

        </Col>
      </Row>

    </Grid>
  )
}
export default DetailView;
