import React from 'react';
import { useState } from 'react';

const App2 = () => {
	const [value, setValue] = useState(0);
	const increment = () => {
		setValue(value + 1);
	};
	const decrement = () => {
		setValue((old) => {
			if (old === 0) {
				alert('Minimum limit reached');
				return 0;
			} else {
				return old - 1;
			}
		});
	};

	return (
		<>
			<h1>{value}</h1>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>
		</>
	);
};

export default App2;
