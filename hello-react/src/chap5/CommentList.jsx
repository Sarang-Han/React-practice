import React from "react";
import Comment from "./Comment";

const comments =[
    {
        name: "A",
        comment: "Hi~",
    },
    {
        name: "B",
        comment: "Hello",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) =>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;