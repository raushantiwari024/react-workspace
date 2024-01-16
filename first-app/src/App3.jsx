import { useState } from "react";


export default function App3() {
    //const name='',homeCity='';
    // let fname='John',lname='the don',city='furpuri nagar';

    const [formData, setFormData] = useState({ fname: 'John', lname: 'the don', city: 'furfuri nagar' })
    
    function updateInputField(e){
        const name=e.target.name;
        const value=e.target.value;
        console.log('name: ',name,' value: ',value);
        setFormData((pre)=>{
            console.log(pre);
            return {
                ...formData,[name]:value
                
            }
        })

    }

    function submitFormData(){

    }
    return(
    <>
        <h1>{`${formData.fname} ${formData.lname} from ${formData.city}`}</h1>
        <form onSubmit={submitFormData}>

            <input type="text" 
            placeholder="Enter First Name" 
            value={formData.fname} 
            name="fname" 
            onChange={updateInputField}
            />
            
            <input type="text" placeholder="Enter Last name" value={formData.lname} 
            name="lname" onChange={updateInputField}/>
            <br /> <br/>
            <input type="text" placeholder="Enter Home City Name" value={formData.city} 
            name="city" onChange={updateInputField} />
        </form>        
        
    </>
    );
}