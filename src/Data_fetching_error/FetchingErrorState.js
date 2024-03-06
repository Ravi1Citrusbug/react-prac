import react , { useEffect, useState } from 'react';
import axios from 'axios'
function FetchingErrorState(){
    const [loading,setLoading] =  useState(true)
    const [error,setError] =  useState('')
    const [posts ,setPosts] = useState({});
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => {
            setLoading(false)
            setError('')
            setPosts(res.data)
        })
        .catch(err=>{
            setLoading(false)
            setError('someting went wrong')
            setPosts({})
        })
    },[])
   return(
    <div>
        {loading ? 'Loading' : posts.title}
        {error ? error : null}
    </div>
   )
}
export default FetchingErrorState;