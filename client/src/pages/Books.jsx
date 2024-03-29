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

    return (
        <div>
            <p>RPS Book Shop</p>
            <>
                {books.map( book => (
                    <div key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <p className="font-semibold text-xl">{book.title}</p>
                        <p>{book.desc}</p>
                        <span>{book.price}</span>
                    </div>
                ))}
            </>
            <button className="border-2 bg-teal-700 p-2 text-white rounded-lg">
              <Link to={"/add"}>Add Book</Link>
            </button>
        </div>
    );
};

export default Books;