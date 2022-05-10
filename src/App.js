//external package
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Offline, Online } from 'react-detect-offline';

//material ui
import Slide from '@mui/material/Slide';

//custom components
import Routing from './routes';
import OfflinePage from './components/offline';

function App() {
	return (
		<>
			{/* checking network connectivity */}
			<Offline>
				<OfflinePage />
			</Offline>
			<Online>
				<SnackbarProvider
					maxSnack={1}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					TransitionComponent={Slide}
				>
					{/* routing */}
					<Router>
						<Routing />
					</Router>
				</SnackbarProvider>
			</Online>
		</>
	);
}

export default App;
