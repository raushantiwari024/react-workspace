import { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([]);

	function inputEvent(e) {
		setValue(e.target.value);
	} 

	function addItem() {
		setValue('');
		setItems((data) => {
			// console.log(data);
			return [...data, value];
		});
	}

	const deleteItem = (id) => {
		console.log(id);
    setItems((old)=>{
      
      const arr=[...old];
      arr.pop(id)
      return arr;
    })
	};

	return (
		<>
			<div className='main_div'>
				<div className='center'>
					<h1>ToDo List</h1>
					<input
						type='text'
						placeholder='Enter Your Item'
						onChange={inputEvent}
						value={value}
					/>
					<button onClick={addItem}> + </button>
					<ul type='none'>
						{items.map((value, key) => {
							return (
								<ToDoList
									key={key}
									id={key}
									text={value}
									onSelect={deleteItem}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
