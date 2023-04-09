import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData()
    // console.log(friends)
    return (
        <div>
            <h3>Hi friends: {friends.length}</h3>
            <div>
                {
                    friends.map(friend => <Friend 
                    friend={friend}
                    key={friend.id}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;