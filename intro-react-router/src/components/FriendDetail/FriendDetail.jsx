import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData()
    console.log(friend)
    return (
        <div>
            <h6>Everything about this person is here.</h6>
            <h2>{friend.name}</h2>
        </div>
    );
};

export default FriendDetail;