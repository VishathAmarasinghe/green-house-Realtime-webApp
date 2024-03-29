import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
 
    const [ books,setBooks] = useState([]);

    useEffect( () => {
        const fecthAllBooks = async () => {

            try{
              const res = await axios.get("http://localhost:8800/books")
              setBooks(res.data);
            }catch(err) {
                console.log(err);
            }
        }
        fecthAllBooks()
    },[])

    const handleDelete = async (id) => {
        try{
          await axios.delete(`http://localhost:8800/books/${id}`)
          window.location.reload();
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <p className="font-bold text-4xl pb-5 text-teal-400">RPS Book Shop</p>
            <div className="flex gap-10">
                {books.map( book => (
                    <div key={book.id}>
                        {book.cover && <img src={book.cover} alt="" className=" h-48 w-full object-cover bg-green-200" />}
                        <p className="font-semibold text-xl">{book.title}</p>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                        <div className="flex flex-col gap-3">
                          <button className="border-2  bg-red-700 p-2 text-white rounded-lg"
                           onClick={ ()=> handleDelete(book.id)}>Delete</button>
                          <button className="border-2  bg-green-500 p-2 text-white rounded-lg ">
                           <Link to={`/update/${book.id}`}>Update</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="border-2 bg-teal-700 p-2 text-white rounded-lg mt-3">
              <Link to={"/add"}>Add Book</Link>
            </button>
        </div>
    );
};

export default Books;