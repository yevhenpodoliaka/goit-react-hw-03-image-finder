import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import styled from 'styled-components';
import fetchImg from 'service/apiSersice';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits: null,
    items: [],
    loading: false,
  };
  componentDidMount() {}
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const data = await fetchImg(this.state.query, this.state.page);
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
          totalHits: data.totalHits,
        }));
        console.log(this);
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onSubmit = value => {
    this.setState({ query: value, page: 1, items: [] });
  };
  handlerBtnLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  showBtnLoadMore = () => {
    if (this.state.loading) {
      return false
    }
    if (this.state.items.length === this.state.totalHits) {
      return false
    }
       if (this.state.totalHits > 12) {
      return true
    }
  }
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.items} />
        {<Loader visible={this.state.loading} />}
        {this.showBtnLoadMore()&& (
          <Button onClick={this.handlerBtnLoadMore} />
        )}
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
