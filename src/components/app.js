import React, { Component } from 'react';

import SearchComponent from './search';
import VerbsComponent from './verbs';
import HeaderComponent from './header';
import FooterComponent from './footer';

export default class App extends Component {
  render() {
    return (
        <div>
            <HeaderComponent />
            <SearchComponent />
            <VerbsComponent />
            <FooterComponent />
        </div>
    );
  }
}
