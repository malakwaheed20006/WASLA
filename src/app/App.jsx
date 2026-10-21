
import { RouterProvider } from 'react-router-dom';

import Providers from './providers.jsx';
import router from './router.jsx';

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
