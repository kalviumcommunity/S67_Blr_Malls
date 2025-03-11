import {useState,useEffect} from 'react'
import axios from 'axios'
import NavBar from '../Components/NavBar';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const navigate=useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = 'wheat';
    }, []);

    const onSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/create',{
            name:name,
            location:location
        }).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        navigate('/')
    }

    return (
        <>
        <NavBar></NavBar>
        <div className="flex items-center justify-items-center justify-center min-w-screen min-h-screen bg-wheat">
            <div className="flex flex-col bg-white text-black p-6 rounded-lg shadow-lg w-96">
                <h1 className="text-center text-xl font-bold mb-4">Add Mall</h1>
                <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Mall Name"
                        className="border p-2 rounded-md w-full"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        placeholder="Enter Mall Location"
                        className="border p-2 rounded-md w-full"
                        onChange={(e)=>setLocation(e.target.value)}
                        value={location}
                    />
                    <button type='submit' className='text-white' >Submit</button>
                </form>
            </div>
        </div>
        </>
    );
};

export default Form;
