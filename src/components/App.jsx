import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import styled from 'styled-components';
import fetchImg from 'service/apiSersice';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits:null,
    items: [],
  };
  componentDidMount() {}
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const data = await fetchImg(this.state.query, this.state.page);
        this.setState(prevState => ({ items: [...prevState.items, ...data.hits],totalHits:data.totalHits}));
      console.log(this);
    }
  }

  onSubmit =  value => {
    this.setState({ query: value,page:1 });
  };
  handlerBtnLoadMore = () => {
    this.setState(prevState => ({page: prevState.page +1}));
}
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.items} />
        {this.state.totalHits > 12 && <Button onClick={ this.handlerBtnLoadMore} />}
      </Container>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
