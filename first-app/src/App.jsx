import { useState } from 'react';

function App() {
	let [fullName, setFullName] = useState({ fname: '', lname: '' });
	const [userData, updateUserData] = useState({
		fname: '',
		lname: '',
	});

	function nameChange(e) {
		// const { name, value } = { ...e.target };
		const name = e.target.name;
		const value = e.target.value;
		console.log(name+' '+value);
		setFullName((pre) => {
			const data = { ...pre, [name]: value };
			console.log('data : ',data);
			return data;
		});
	}

	const formSubmit = (e) => {
		e.preventDefault();
		console.log(userData.fname + ' ' + userData.lname);
		updateUserData({
			fname: fullName.fname,
			lname: fullName.lname,
		});
		document.title = fullName.fname + ' ' + fullName.lname;
	};

	return (
		<>
			<form onSubmit={formSubmit}>
				<div>
					<h1>
						Hello {userData.fname} {userData.lname}
					</h1>
					<input
						type='text'
						placeholder='Enter Your First Name'
						value={fullName.fname}
						name='fname'
						onChange={nameChange}
					/>
					<br />
					<input
						type='text'
						placeholder='Enter Your Last Name'
						value={fullName.lname}
						name='lname'
						onChange={nameChange}
					/>
					<br />
					<button type='submit'>Click Me!!!</button>
				</div>
			</form>
		</>
	);
}

export default App;
