import {useContext, useEffect} from 'react';
import PostList from "../Components/PostList";
import MainContext from "../Context/MainContext";

const MainPage = () => {

    const {setPage} = useContext(MainContext)


    useEffect(()=>{
        setPage("/main")
    }, [])

    return (
        <div>
            <PostList/>
        </div>
    );
};

export default MainPage;