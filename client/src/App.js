import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from './services/auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const histroy = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await longinUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <SignIn handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <SignUp handleRegister={handleRegister} />
          </Route>
          
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
