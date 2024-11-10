import { Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import { RefineSnackbarProvider } from '@refinedev/mui';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import { BrowserRouter } from 'react-router-dom';

import { ColorModeContextProvider } from './contexts/color-mode';
import { categoryProvider } from './providers/categories.provider';
import { exerciseProvider } from './providers/exercise.provider';
import { resources } from './resources';
import { Routes } from './routes';

const pageTitle = 'Gerador de exercícios';

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={{
                  default: exerciseProvider,
                  exercise: exerciseProvider,
                  categories: categoryProvider,
                }}
                routerProvider={routerBindings}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: 'VhJc9H-4NdeKe-kQlFBu',
                }}
              >
                <Routes />
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler handler={() => pageTitle} />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
