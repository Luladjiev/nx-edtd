// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routing } from './routing';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <>
      <h2>Hello Amy!</h2>

      <BrowserRouter>
        <Routing />
      </BrowserRouter>

      <p>Powered by nx</p>
    </>
  );
}

export default App;
