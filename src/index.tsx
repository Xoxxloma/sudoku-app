import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyles, theme } from './styles'
import { register } from './core/service-worker/index';
import { ThemeProvider } from 'styled-components';
import { Content } from './components/styles/content/index';
import { Title } from './components/styles/title/index';
import { Card } from './components/styles/card/index';
import { Grid } from './components/grid/grid';
import { configureStore } from './core/configure-store/store';
import { Numbers } from './components/numbers/numbers';
import { NewGameButton } from './components/new-game-button/new-game-button';

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <NewGameButton />
          <Grid />
          <Numbers />
        </Card>
      </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

register();
