import {useContext} from 'react';
import MainContext from "../Context/MainContext";


const PostCard = ({x, index}) => {


    const {getPost, setPost, getLoged} = useContext(MainContext)

    function like() {

        if(!getPost[index].liked.includes(getLoged.userName)) {
            getPost[index].liked.unshift(getLoged.userName)
            setPost([...getPost])
        }else {
            if(getPost[index].liked.includes(getLoged.userName)) {
              getPost[index].liked.splice(0,1 )
                setPost([...getPost])
                console.log(getPost)
            }
        }
    }


    return (
        <div>
            <div className="m-10 box d-flex column a-center">
                <div>
                    <h3>{x.title}</h3>
                    <h5>{x.article}</h5>
                    <h5>{x.userName}</h5>
                    <div>
                        {x.liked.length}
                    </div>
                </div>
                <div className="m-10 d-flex a-center">
                    {x.userName !== getLoged.userName &&
                        <div>
                            {!x.liked.includes(getLoged.userName) && <div>
                                <button onClick={like}>Like</button>
                                <button>Add Comment</button>
                            </div>}
                            {x.liked.includes(getLoged.userName) && <div>
                                <button onClick={like}>Dislike</button>
                                <button>Add Comment</button>
                            </div>}

                        </div>}

                </div>


            </div>
        </div>
    );
};

export default PostCard;