
let count=10;

function addValue(){
    console.log('adfaf');
    count = count+1;
    console.log(count);
}

function deleteValue(){

}

const App=()=>{
    return(
        <>
            <h1>React with hooks</h1>
            <h2>Counter Value: {count}</h2>

            <button onClick={addValue}>Add Value</button>
            <button onClick={deleteValue}>Delete Value</button>
        </>);
}

export default App;