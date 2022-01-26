import React, {useContext} from 'react';
import MainContext from "../Context/MainContext";


const PostList = () => {


    const {getPost, getLoged} = useContext(MainContext)



    return (
        <div>

            {getPost.map((x, index) => <div className="m-10 box d-flex column a-center"
                                            key={index}>
                <div>
                    <h3>{x.title}</h3>
                    <h5>{x.article}</h5>
                </div>
                <h5>{getLoged.userName}</h5>
            </div>)}

        </div>
    );
};

export default PostList;