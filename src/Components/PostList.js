import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";
import PostCard from "./PostCard";
import CommentCard from "./CommentCard";


const PostList = () => {


    const {getPost} = useContext(MainContext)



    return (
        <div>

            {getPost.map((x, index) => <PostCard x={x} index={index} key={index}/>)}
            {getPost.map((x, index) => <CommentCard x={x} index={index} key={index}/>)}

        </div>
    );
};

export default PostList;