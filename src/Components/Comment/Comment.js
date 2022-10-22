import React from 'react';
import './Comment.css'

const Comment = (props) => {
    return (
        <div className='comment'>
            <h4>Email : {props.email}</h4>
            <p>Body : {props.body}</p>
        </div>
    );
};

export default Comment;