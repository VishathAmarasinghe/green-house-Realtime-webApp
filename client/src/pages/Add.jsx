import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {

    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })

    const Navigate = useNavigate()

    const handleChange = (e) => {
        setBook( (prev) => ({ ...prev,[e.target.name]: e.target.value}));
    };

    const handleClick = async e => {
         e.preventDefault();
         try{
             await axios.post("http://localhost:8800/books", book)
             Navigate('/')
         }catch(err){
             console.log(err)
         }
    };

    console.log(book);

    return (
        <div>
            <form className="">
                <p>Add New Book</p>
                <input type='text' placeholder='Title' className="border-2" onChange={handleChange} name='title' />
                <input type='text' placeholder='Description' className="border-2" onChange={handleChange} name='desc' />
                <input type='number' placeholder='Price' className="border-2" onChange={handleChange} name='price' />
                <input type='text' placeholder="cover" className="border-2" onChange={handleChange} name='cover'/>
            </form>
            <button onClick={handleClick} className='border-2 bg-teal-700 p-2 text-white rounded-lg'>Add Book</button>
        </div>
    );
};

export default Add;