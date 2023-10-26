import { Component } from 'react';
import { BtnLoadMore } from './LoadMore.styled';

class LoadMore extends Component {
  onClick = () => {
    this.props.onloadMore();
  };

  render() {
    return <BtnLoadMore onClick={this.onClick}>load more</BtnLoadMore>;
  }
}

export default LoadMore;
