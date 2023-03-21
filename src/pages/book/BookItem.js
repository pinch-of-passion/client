
const BookItem = ({book, setTest}) => {
  return (
    <div>
        {book?.name}   {book?.picture}

        <button onClick={()=>{setTest(book.name)}}>עדכן</button>
    </div>
  )
}

export default BookItem