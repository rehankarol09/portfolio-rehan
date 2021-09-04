import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import {HomePage} from '../src/components/Home';
import {PostPage} from '../src/components/Post';
import {AboutPage} from '../src/components/About';
import {SinglePostPage} from '../src/components/Singlepost'
import {ProjectPage} from '../src/components/Project'
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>

      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact  component={HomePage}/>
          <Route path='/about' component={AboutPage}  />
          <Route path='/post/:slug' component={SinglePostPage} />
          <Route path='/post' component={PostPage} />
          <Route path='/project' component={ProjectPage} />


        </Switch>
      </Router>
    </>
  );
}

export default App;
