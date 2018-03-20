import React, { Component } from 'react';
import Pokemon from '../Pokemon';
import PokeList from './PokeList';
import DetailView from './DetailView.jsx';
import {Grid, Row, Col } from 'react-bootstrap';
import './styles/App.css';

function getScreenWidth(){
  return document.getElementsByTagName('body')[0].clientWidth;
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      width: getScreenWidth(),
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  handleCloseButtonClick(){
      console.log('testing');
      this.setState({
        pokemon: {}
      });
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
    console.log(this.state.width);
    console.log(this.state.pokemon);
    return (
      <Grid fluid className="App">
        {this.state.width >= 768
          ?   <Row className="show-grid">
                <Col  className="pokeListCol col-lg-offset-1 " lg={6} md={6} sm={8}>
                  <PokeList handleOnClick={this.handleOnClick}/>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <DetailView pokemon={this.state.pokemon} />
                </Col>
              </Row>
          :   <Row className="show-grid">
                {this.state.pokemon.id
                  ? <Col lg={4} md={4} sm={12}  onClick={this.handleCloseButtonClick}>
                      <DetailView pokemon={this.state.pokemon}/>
                    </Col>
                  : <Col className="hide" lg={4} md={4} sm={12}>
                      <DetailView pokemon={this.state.pokemon}/>
                    </Col>
                }
                { this.state.pokemon.id
                  ? <Col className="pokeListCol col-lg-offset-1 hide" lg={6} md={6} sm={8}>
                      <PokeList handleOnClick={this.handleOnClick}/>
                    </Col>
                  : <Col  className="pokeListCol col-lg-offset-1" lg={6} md={6} sm={8}>
                      <PokeList handleOnClick={this.handleOnClick}/>
                    </Col>
                }
              </Row>
        }
      </Grid>
    );
  }
}

export default App;
