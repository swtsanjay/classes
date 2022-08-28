import './App.css';
import { Test } from './Test';

function createAlert() {
	window.alert(99);
}

function App() {
	return (
		<div className="App" style={{ color: 'red' }}>
			<Test />
		</div>
	);
}

export default App;

const data = 10;

export { data };