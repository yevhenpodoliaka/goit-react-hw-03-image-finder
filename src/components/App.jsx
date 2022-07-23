import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import styled from 'styled-components';
import fetchImg from 'service/apiSersice';
import ImageGallery from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    query: '',
    page: 1,
    items:[],
  };
  componentDidMount() {  }
  componentDidUpdate(prevProps, prevState) { } 
  
  onSubmit = async (value) => {
   await  this.setState({ query: value });
  console.log(value);
  const data = await fetchImg(this.state.query, this.state.page)
  this.setState(prevState=> ( {items: [...prevState.items, ...data]}) )
  console.log(this);
   
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.items} />
      </Container>
    );
  }
}


const Container = styled.div`
   display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;`



