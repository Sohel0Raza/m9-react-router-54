import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({ post }) => {
    const {title, id} = post;
    const navigate = useNavigate()
    const handelNavigation = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>{id}</h2>
            <h5>{title}</h5>
            <p><Link to={`/post/${id}`}>Show more detail</Link></p>
            <Link to={`/post/${id}`}><button>More details</button></Link>
            <button onClick={handelNavigation}>NaviGate Button</button>
        </div>
    );
};

export default Post;