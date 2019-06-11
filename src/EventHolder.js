import { h, Component } from 'preact';
import { route } from 'preact-router';
import Mixspa from '@mixspa/core';

class EventHolder extends Component {
  componentDidMount() {
    Mixspa.on('mixspa:url:changed', (url) => {
      route(url, true);
    });
  }

  render(props) {
    return props.children;
  }
}

export default EventHolder;
