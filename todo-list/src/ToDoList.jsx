const ToDoList = (props) => {
	return (
		<>
			<div className='todo_list'>
				<span onClick={()=>{
                    props.onSelect(props.id);
                }}>
					<i className='fa-solid fa-circle-xmark icon'></i>
				</span>
				<li id={props.id}>{props.text}</li>
			</div>
		</>
	);
};

export default ToDoList;
