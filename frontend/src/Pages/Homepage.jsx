import MallCard from "../Components/MallCard";
import {useState} from 'react';
import axios from 'axios';

function Homepage() {
    
    const gridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      padding: '16px',
      
    };
    const [info,setInfo] = useState([]);
    axios.get('http://localhost:3000/malls').then((res)=>{
        setInfo(res.data.malls);
        console.log(res.data)
    })
  
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={gridStyle} >
        {info.map((_, index) => (
          <MallCard key={index} info={_} />
        ))}
      </div>
      </div>)
}

export default Homepage;