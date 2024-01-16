import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {
	const [value, setValue] = useState('');
	const [items, setItems] = useState([]);

	const inputEvent = (e) => {
		setValue(e.target.value);
	};

	const addItem = () => {
		if (value === '') alert('Enter some text before add');
		else {
			setItems((old) => {
				return [...old, value];
			});
			setValue('');
		}
	};


  const deleteItem=(id)=>{
    setItems((old)=>{
      const arr=[...old];
      arr.pop(id);
      return arr;
    })
  }
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
					<ul>
						{items.map((value, index) => {
							return (
								<ToDoList key={index} text={value} id={index} onSelect={deleteItem}/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
