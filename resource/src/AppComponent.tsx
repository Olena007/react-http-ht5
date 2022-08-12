import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './AppComponent.css';
// import getUser from './Http/fetches';
import { ListComponent } from './components/ListComponent';
import { SingleComponent } from './components/SingleComponent';
import { NotFound } from './components/NotFoundComponent';

function AppComponent(): JSX.Element {
  return (
    //<SingleComponent></SingleComponent>
    <NotFound></NotFound>
  );
}

export default AppComponent;
