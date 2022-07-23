import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import styled from 'styled-components';


export class App extends Component {
  state = {
    query: '',
    page: 1,
    items:[],
  };
  componentDidMount() {  }
  componentDidUpdate(prevProps, prevState) {} 
onSubmit = value => {
    this.setState({ query: value });
    console.log(value);
   
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
      </Container>
    );
  }
}


const Container = styled.div`
   display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;`



