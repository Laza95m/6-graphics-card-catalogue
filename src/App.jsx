import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardCatalogue from './components/CardCatalogue/CardCatalogue';
import CardDetail from './components/CardDetail/CardDetail';
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<p>Not Found</p>} path={'/*'} />
              <Route element={<CardCatalogue />} path={'/'} />
              <Route element={<CardDetail />} path={'/CardDetail/:id/'} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
