import {useNavigate} from 'react-router-dom'

const NavBar=()=>{
    const navigate=useNavigate();
    return (
        <>
        <div className="min-w-screen justify-evenly" >
            <button onClick={()=>navigate('/')}>
                Home
            </button>
            <button onClick={()=>navigate('/about')}>
                About
            </button>
            <button onClick={()=>navigate('/add-mall')}>
                Add Mall
            </button>
        </div>
        </>
    )
}

export default NavBar;