import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";


const PostList = () => {


    const {getPost, getLoged, getClicked, setClicked } = useContext(MainContext)

    function like () {
        if(getPost.userName !== getLoged.userName) {
            setClicked("Dislike")
        }

    }



    return (
        <div>

            {getPost.map((x, index) => <div className="m-10 box d-flex column a-center"
                                            key={index}>
                <div>
                    <h3>{x.title}</h3>
                    <h5>{x.article}</h5>
                    <h5>{x.userName}</h5>
                </div>
                <div className="m-10 d-flex a-center">
                    <button onClick={()=> like ()}>{getClicked}</button>

                </div>


            </div>)}

        </div>
    );
};

export default PostList;