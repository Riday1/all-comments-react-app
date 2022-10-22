import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const { email, body } = props.comment;
    return (
        <div className='comment'>
            <h4>Email : {email}</h4>
            <p>Body : {body}</p>
        </div>
    );
};

export default Comment;