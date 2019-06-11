# mixspa-preact
Mixspa-preact is a wrapper for mixspa-core.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/preact.svg)](https://npmjs.org/package/@mixspa/preact)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/preact.svg)](https://npmjs.org/package/@mixspa/preact)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-preact.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-preact)

[![NPM](https://nodei.co/npm/@mixspa/preact.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/preact/)

## What it come from?

Pleas reference here: [mixspa-core](https://github.com/mixspa/mixspa-core)

## Apis for this library

### createApp: create a mixspa app.

```js
import { createApp } from '@mixspa/preact';
import { BrowserRouter } from 'preact-router-dom';
import App from './App';

createApp(
  'app-tag',
  (props) => (
    <BrowserRouter baseName={ props.baseName }>
      <App />
    </BrowserRouter>
  )
);
```

### AppLoader: load a mixspa app.

```js
import { AppLoader } from '@mixspa/preact';

const Loading = () => <div>Loading...</div>

const Content = () => (
  <div>
    <AppLoader appId="appId" loading={ Loading }/>
  </div>
);
```

### EventLink: This link will send a event to event bus.

```js
import { EventLink } from '@mixspa/preact';

const NavBar = () => (
  <div>
    <EventLink to="/menu-a"/>
    <EventLink to="/menu-b"/>
  </div>
);
```

### EventHolder: Receive event and handle url change event.

```js
import preactDOM from 'preact-dom';
import { BrowserRouter } from 'preact-router-dom';
import { Route, Switch } from "preact-router-dom";
import { EventHolder } from '@mixspa/preact';

preactDOM.render(
  <BrowserRouter>
    <EventHolder>
      <Switch>
        <Route path="/test-a"/>
        <Route path="/test-b"/>
      </Switch>
    </EventHolder>
  </BrowserRouter>,
  document.getElementById('app')
);
```

## License

mixspa-preact is released under the [MIT license](https://github.com/mixspa/mixspa-preact/blob/master/LICENSE).
