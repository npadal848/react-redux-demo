import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './component/HookCakeContainer';
import IceCreamContainer from './component/IceCreamContainer'

function App() {
  return (
    <Provider store = {store} >
    < div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
