import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersitedState from './hooks/usePersitedState';

import dark from './styles/themes/dark'
import light from './styles/themes/light';

import GlobalStyles from './styles/global';
import Header from './components/Header';

function App() {
  const [theme, setTheme] = usePersitedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
