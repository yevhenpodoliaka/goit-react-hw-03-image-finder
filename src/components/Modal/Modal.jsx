import React, { Component } from 'react'
import { Overlay, ModalCard } from './Modal.styled'
import { createPortal } from 'react-dom';
const modalEl = document.querySelector('#modal');
export default class Modal extends Component{
    componentDidMount() { 
         window.addEventListener('keydown', this.handleKeyDown)
     }
    componentWillUnmountt() { window.removeEventListener('keydown', this.handleKeyDown) }
        handleKeyDown = e => {
    if (e.code === 'Escape') {

      this.props.onClose();
    }
  };
    handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
    render() {
        return createPortal(<Overlay onClick={this.handleOverlayClick}>
  <ModalCard>
                <img src={this.props.largeImageURL} alt="" />
                {/* {this.props.children} */}
  </ModalCard>
</Overlay>,modalEl) 
    }
}