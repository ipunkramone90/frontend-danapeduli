import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import DetailProgram from './pages/DetailProgram';
import DaftarAgenpeduli from './pages/DaftarAgenpeduli';
import KumpulanProgram from './pages/KumpulanProgram';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Share from './components/Share';
import Confirmation from './components/Confirmation';
import Referral from './components/Referral';


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/detailprogram" exact component={DetailProgram}/>
          <Route path="/daftaragenpeduli" exact component={DaftarAgenpeduli}/>
          <Route path="/kumpulanprogram" exact component={KumpulanProgram}/>
          <Route path="/share" exact component={Share}/>
          <Route path="/confirmation" exact component={Confirmation}/>
          <Route path="/referral" exact component={Referral}/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
