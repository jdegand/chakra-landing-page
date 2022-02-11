import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import { HashRouter, Routes, Route } from "react-router-dom"
import Landing from './routes/Landing';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
