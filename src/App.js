import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TrainingSession from './Component/TrainingSession/TrainingSession';
import AdvanceGym from './Component/AdvanceGym/AdvanceGym';
import PricingPlan from './Component/PricingPlan/PricingPlan';
import PersonalDetails from './Component/PersonalDetails/PersonalDetails';
import GymMembership from './Component/GymMembership/GymMembership';



function App() {
  return (
<Router>
  <Switch>
  <Route path="/home">
    <Home/>
      </Route>
      <Route exact path="/">
    <Home/>
      </Route>
      <Route path="/training">
            <TrainingSession/>
    </Route>
    <Route path="/advance">
           <AdvanceGym></AdvanceGym>
    </Route>
    <Route path="/pricing">
       <PricingPlan></PricingPlan>  
    </Route>
    <Route path="/personal">
       <PersonalDetails></PersonalDetails> 
    </Route>
    <Route path="/payment">
       <GymMembership></GymMembership>
    </Route>
  </Switch>
</Router>
  
  );
}

export default App;
