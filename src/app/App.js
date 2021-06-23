import React, { Component } from 'react';
import { BrowserRouter as Router,
         Switch, 
         Route,
         Link 
} from 'react-router-dom';

import FormDIA from './Forms/FormDIA';
import FormSEIA from './Forms/FormSEIA';

class App extends Component {
    render() {
      return (
        <Router>
          <div>
           <Switch>
            <Route
                exact
                path="/form_dia"
                render={() => <FormDIA name="Form DIA" />} />

            <Route
                exact
                path="/form_seia"
                render={() => <FormSEIA name="Form SEIA" />} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default App;