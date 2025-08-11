import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Spinner from "react-spinkit";

import './App.css';
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContainer>
          <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple" fadeIn="none"
          />
        </AppLoadingContainer>
      </AppLoading>
    );
  }
  return (

    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route exact path="/"
                  element={<Chat />}>
                </Route>
                <Route path="/chat"
                  element={<Chat />}>
                </Route>
              </Routes>
            </AppBody>
          </>
        )}

      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh`;

const AppLoading = styled.div`
    display:grid;
    place-items:center;
    height:100vh;
    width:100%;
    `;

const AppLoadingContainer = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}
`;
