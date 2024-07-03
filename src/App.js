import styled from "styled-components";
import Header from "./components/Header";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(145deg, #d1e5ff 10%, #ffffff 78%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
        <AppContainer />
      <Header />
    </AppContainer>
  );
}

export default App;
