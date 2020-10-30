import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/routes/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject';
import SignUp from './components/auth/SignUp';
import ProjectDetails from './components/projects/ProjectDetail';
import TicTacToe from './components/games/TicTacToe/TicTacToe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/projects/:id' component={ProjectDetails} />
            <Route path='/games/tic-tac-toe' component={TicTacToe} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/create-project' component={CreateProject} />
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
