
import './App.css';
import Profile from './profile/Profile';
import Image from './assets/ciel.jpg'
function App() {
  const alertMyName = fullName => alert(fullName);
  return (
    <Profile  bio ="test" profession="devlopper"  alertMyName={alertMyName}>
      <img src={Image} alt="" />
    </Profile>
  );
}

export default App;
