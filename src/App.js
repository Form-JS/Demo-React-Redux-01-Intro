import './App.css';
import MainHeader from './containers/main-header/main-header';
import MainFooter from './containers/main-footer/main-footer';
import CounterDisplay from './containers/counter-display/counter-display';
import CounterReset from './containers/counter-reset/counter-reset';
import CounterInteraction from './containers/counter-interaction/counter-interaction';
import PersonForm from './containers/person-form/person-form';
import PersonList from './containers/person-list/person-list';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <h2>Compteur</h2>
        <CounterDisplay />
        <CounterInteraction />
        <CounterInteraction step={5} />
        <CounterReset />
        <hr />
        <h2>Liste</h2>
        <PersonForm />
        <PersonList />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
