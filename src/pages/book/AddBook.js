import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const AddBook = () => {
    const [categories,setCategories] = useState([])
    const [autours,setAutours] = useState([])
    const [name,setName] = useState("")
    const [picture,setPicture] = useState("")
    const [cateogry_id,setCategory] = useState("")
    const [author_id,setAuthour] = useState("")
    const [err, setErr] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchData() {
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const {data:_categories} = await axios.get("http://localhost:3600/api/categories",config)
            if(_categories?.length) setCategories(_categories)
            const {data:_authours} = await axios.get("http://localhost:3600/api/authors",config)
            if(_authours?.length) setAutours(_authours)
           
          }
          fetchData()
       


      }, []);


      const handleAddBook = async (e) => {
        e.preventDefault();
        try {  
            let config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }    
          const res = await axios.post("http://localhost:3600/api/books",  { author_id, cateogry_id, name, picture}, config);
          navigate("/book/list")
        } catch (err) {
          setErr(err.response.data?.message);
        }
      };
      if(!categories.length || ! autours.length) return <h1>LOADING....</h1>
  return (
    <>
    <div className="new-book">
        <form>

        
    <select  onChange={(e)=>setCategory(e.target.value)} >
        <option>-select--</option>
        {categories.map((category)=>{
            return <option  value={category.id} >{category.name}</option>
        })}
    </select>
    <select  onChange={(e)=>setAuthour(e.target.value)}>
    <option>-select--</option>

        {autours.map((author)=>{
            return <option value={author.id} >{author.name}</option>
        })}
    </select>
   
    <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(e)=>setName(e.target.value)}
            />
    <input
              type="text"
              placeholder="Picture"
              name="picture"
              onChange={(e)=>setPicture(e.target.value)}
            />
            {err && err}
            <button onClick={handleAddBook}>ADD Book</button>
    </form>
    </div>
   
        
    </>
  )
}

export default AddBook