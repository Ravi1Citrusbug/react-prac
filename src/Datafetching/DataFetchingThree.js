import react , { useEffect, useState } from 'react';
import axios from 'axios'
function DataFetchingThree(){
    const [post ,setPost] = useState({});
    const [id,setId] = useState(1)
    const [idFromButtonClick ,setIdFromButtonClick] = useState(1)
    const handleClick =()=>
    {
        setIdFromButtonClick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idFromButtonClick])
   return(
    <div>
        <input type="text" value ={id} onChange ={e =>setId(e.target.value)} />
        <button onClick={handleClick}>fetch data</button>
        <div>{post.title}</div>
    </div>
   )
}
export default DataFetchingThree;