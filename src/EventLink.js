import { h } from 'preact';
import Mixspa from '@mixspa/core';
import { Link } from 'preact-router';

const handleClick = (next, event) => {
  Mixspa.emit('mixspa:url:changed', event.target.getAttribute('href'));
  next && next(event);
};

const EventLink = ({onClick, ...rest}) => (
  <Link onClick={e => handleClick(onClick, e)} {...rest}/>
);

export default EventLink;
