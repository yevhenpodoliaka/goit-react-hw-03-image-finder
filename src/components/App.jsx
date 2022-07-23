import React, { Component } from 'react'
import Searchbar  from './Searchbar/Searchbar'

export class App extends Component {
  state = {
    query:''
  }
  onSubmit = (value) => {
    this.setState({ query: value })
    console.log(value);
  }
  render() {
    return <Searchbar onSubmit={this.onSubmit} />
  }

};
/*
 * Стилі компонента App
 */
// .App {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;
// }
// const Wrap = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-gap: 16px;
//   padding-bottom: 24px;`