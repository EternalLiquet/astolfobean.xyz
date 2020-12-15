import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item xs={0} sm={2} /> {/* This is how you do paddings within a container! */}
            <Grid item xs={12} sm={8}> {/* These break points should equal all the way up to 12 */}
              <Content />
            </Grid>
            <Grid item xs={0} sm={2} /> {/* This is how you do paddings within a container! (part 2)*/}
          </Grid>
        </Grid>
      </ThemeProvider>
  );
}
