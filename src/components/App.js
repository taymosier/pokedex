import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import DetailView from './DetailView';
import {Grid, Row, Col } from 'react-bootstrap';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
    console.log(id);
  }

  render() {
    return (
      <Grid fluid className="App">
        <Row className="show-grid">
          <Col  className="pokeListCol col-lg-offset-1" lg={6} >
            <PokeList handleOnClick={this.handleOnClick}/>
          </Col>
          <Col lg={4}>
            <DetailView pokemon={this.state.pokemon}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
