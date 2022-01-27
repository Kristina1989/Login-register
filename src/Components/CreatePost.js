import {useContext, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import MainContext from "../Context/MainContext";

const CreatePost = () => {

    const nav = useNavigate()
    const titleRef = useRef()
    const articleRef = useRef()

    const {getPost, getLoged, setPost} = useContext(MainContext)


    function CreatePost() {
        const post =  {
            title: titleRef.current.value,
            article: articleRef.current.value,
            userName: getLoged.userName
        }
        setPost([...getPost, post])
        nav("/main")
        console.log(getPost)
    }


    return (
        <div className="m-10 box d-flex column a-center">
            <input ref={titleRef} type="text" placeholder="Title"/>
            <input ref={articleRef} type="text" placeholder="Article"/>
            <button onClick={CreatePost}>Create Post</button>

        </div>
    );
};

export default CreatePost;