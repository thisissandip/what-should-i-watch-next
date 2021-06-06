import React from 'react';
import Home from './components/Home';
import * as smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

function App() {
	return (
		<div className='App'>
			<Home />
		</div>
	);
}

export default App;
