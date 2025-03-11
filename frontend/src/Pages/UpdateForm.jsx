import axios from 'axios'
import {useEffect, useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const UpdateForm=()=>{
    const [name,setName]=useState('')
    const [location,setLocation]=useState('')
    const Location=useLocation()
    const navigate=useNavigate()
    // const id=Location.state.id;
    

    useEffect(()=>{
        axios.get(`http://localhost:3000/malls/${Location.state.id}`).then((res)=>{
            setName(res.data.mall.name)
            setLocation(res.data.mall.location)
        }).catch((err)=>{
            console.log(err)
        })
    },[Location.state.id])
    
    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleLocation=(e)=>{
        setLocation(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Location.state.id)
        axios.put(`http://localhost:3000/update/${Location.state.id}`,{name:name,location:location}).then(()=>{
            alert('Updated Successfully.')
            navigate('/')
        }).catch((err)=>{console.log(err)})
    }

    return(
        <>
            <div className='min-w-screen min-h-screen justify-center items-center'>
                <div>
                    <h3>Update</h3>
                    <form action="" onSubmit={handleSubmit} >
                        <input type="text" placeholder='Name' value={name} onChange={handleName} />
                        <input type="text" placeholder='Location' value={location} onChange={handleLocation} />
                        <button type='submit' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateForm;