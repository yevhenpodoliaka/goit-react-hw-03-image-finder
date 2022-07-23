import React, { Component } from 'react'
import styled from 'styled-components'

export default class ImageGallery extends Component{
    state = {
    
    }
    render() {
        return <Gallery >
            
        </Gallery>
    }
}

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;`
