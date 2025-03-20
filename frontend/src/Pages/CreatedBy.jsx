import React, { useState,useEffect, use } from 'react';
import axios from 'axios';

const CreatedBy = () => {
    const [users,setUsers] = useState([]);
    const [selectedUser,setSelectedUser] = useState('');
    const [selectedUserEntites,setSelectedUserEntites] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/auth/get-users').then(response=>{
            setUsers(response.data.users);
        }).catch(error=>{
            console.log(error);
        });
    },[]);
    useEffect(()=>{
        if(selectedUser){
            axios.get(`http://localhost:3000/auth/get-entities/${selectedUser}`).then(response=>{
                setSelectedUserEntites(response.data.entities);
            }).catch(error=>{
                console.log(error);
            });
        }
    },[selectedUser]);
    const handleChange = (e)=>{
        setSelectedUser(e.target.value);
    }
    return (
        <div className='h-screen w-screen bg-black'>
            <div>
                <form action="">
                <select name="user" id='user' onChange={(e)=>handleChange(e)} className='bg-white text-black'>
                    {users.map((user)=>{
                        return <option key={user._id} value={user._id}>{user.name}</option>
                    })}
                </select>
                </form>
                
            </div>
            <div>
                {selectedUserEntites.map((entity)=>{
                    return <div key={entity._id} className='text-white'>{entity.name}<br/><p>Location:{entity.location}</p></div>
                })}
            </div>
            
        </div>
    );
}

export default CreatedBy;
