import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })

    const Navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook( (prev) => ({ ...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
         e.preventDefault();
         try{
             await axios.put(`http://localhost:8800/books/${bookId}`, book)
             Navigate('/')
         }catch(err){
             console.log(err)
         }
    };

    console.log(book);

    return (
        <div>
            <form className="flex flex-col gap-5 ">
                <p>Update the Book</p>
                <input type='text' placeholder='Title' className="border-2 " onChange={handleChange} name='title' />
                <input type='text' placeholder='Description' className="border-2 " onChange={handleChange} name='desc' />
                <input type='number' placeholder='Price' className="border-2" onChange={handleChange} name='price' />
                <input type='text' placeholder="cover" className="border-2" onChange={handleChange} name='cover'/>
            </form>
            <button onClick={handleClick} className='border-2 bg-teal-700 p-2 text-white rounded-lg mt-5 w-full'>Update Book</button>
        </div>
    );
};

export default Update;