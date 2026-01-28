import {ChakraProvider} from '@chakra-ui/react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import GlobalStyles from './GlobalStyles';
import WebVitals from './WebVitals';
import './i18n/i18n';
import theme from './theme';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import './auth/authStore';

// Import the generated route tree
import {routeTree} from './routeTree.gen';

// Create a new router instance
const router = createRouter({routeTree});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={theme}>
      <HelmetProvider>
        <GlobalStyles />
        <WebVitals showStatusInConsoleLog />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ChakraProvider>
  </StrictMode>
);
