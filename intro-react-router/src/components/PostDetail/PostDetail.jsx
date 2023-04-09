import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
    console.log(post)
    const navigate = useNavigate()
    const handelGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h3>Here this post: {post.id}</h3>
            <p>{post.body}</p>
            <button onClick={handelGoBack}> Go back</button>
        </div>
    );
};

export default PostDetail;