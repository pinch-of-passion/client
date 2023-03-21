import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import BookItem from "./BookItem";

const BookList = () => {
  const [books,setBooks] = useState([])
  const [test, setTest] = useState("")
  useEffect(() => {

    async function fetchData() {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }



        const {data} = await axios.get("http://localhost:3600/api/books",config)
        setBooks(data)

      }
      fetchData()
   


  }, []);

  return (
    <>
    {test}
    
    <Link to="/book/new">add book</Link>
    
    {books?.length && (
      books.map((book)=><BookItem setTest={setTest} book={book} />)
    )}
    </>
  )
}

export default BookList