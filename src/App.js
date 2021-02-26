import Navbar from './components/Navigation/Navbar'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'
import Users from './components/Users/Users'
import Photos from './components/Photos/Photos'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router >
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/comments" component={Comments} />
            <Route path="/users" component={Users} />
            <Route path="/photos" component={Photos} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
