import React, { useEffect, useState } from 'react';
import './Comments.css'
import Comment from '../Comment/Comment';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h1>Total Comments : {comments.length}</h1>
            {
                comments.map(comment => <Comment
                    comment={comment}
                ></Comment>)
            }
        </div>
    );
};

export default Comments;