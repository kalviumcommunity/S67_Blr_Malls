import MallCard from "../Components/MallCard";
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import NavBar from './../Components/NavBar'

function Homepage() {
    const navigate=useNavigate();
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '32px',
      padding: '16px',
      
    };
    const [info,setInfo] = useState([]);
    
    useEffect(()=>{
      axios.get('http://localhost:3000/malls').then((res)=>{
        setInfo(res.data.malls);
        console.log(res.data)
    })
    },[])
    const handleUpdate=(id)=>{
      navigate('/update',{state:{id:id}})
    }
    const onDelete=(id)=>{
      axios.delete(`http://localhost:3000/delete/${id}`).then((res)=>{
        alert('Deleted Successfully.')
        window.location.reload()
      })
    }
    
  
    return (
      <>
        <NavBar></NavBar>
        <div className="min-h-screen min-w-screen" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={gridStyle} >
        {info.map((_, index) => (
          <div key={index}>
          <MallCard info={_} />
          <button onClick={()=>handleUpdate(_._id)}>Update</button>
          <button onClick={()=>onDelete(_._id)}>Delete</button>
          </div>
          
        ))}
        
      </div>
      </div>
      </>)
}

export default Homepage;