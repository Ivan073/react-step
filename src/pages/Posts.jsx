import React,{useState, useEffect} from "react";
import axios from 'axios';
import { filter } from "async";

const Posts = () =>{
    const [posts, setPosts] = useState(null);
    const [searchFilter, setSearchFilter]= useState(null)

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () =>{
       
        const getposts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(getposts.data);
        setPosts(getposts.data);
        setSearchFilter(getposts.data);
    }

    const showPost = (id) =>{
        let elem = document.getElementById("modal"+id);
        let over = document.getElementById("overlay"+id);
        elem.classList.add("visible");
        over.classList.remove("invisible");
    }
    const hidePost = (id) =>{
        let elem = document.getElementById("modal"+id);
        let over = document.getElementById("overlay"+id);
        elem.classList.remove("visible");
        over.classList.add("invisible");
    }

    const removePost = (id) =>{
        let elem = document.getElementById("container"+id);
        elem.remove();
    }

    const filter = () =>{

    }

    return (<div className="postContainerContainer container">

        <div className="row s12">
            <form className="col s12">
                <div className="input-field col s12">
                    <i className="material-icons prefix non-selectable">search</i>
                    <textarea
                        id="search"
                        className="materialize-textarea"
                        placeholder="Search"
                    ></textarea>
                </div>
            </form>
        </div>



         {searchFilter &&searchFilter.map((post) => (
                <div className="postContainer" id={"container"+post.id}>
                    <h5>{post.title}</h5>

                    <a className="waves-effect waves-light btn m-1" onClick={()=>{
                    showPost(post.id);
                 }}>Show Post</a>

                    <a className="waves-effect waves-light btn m-1 right" onClick={()=>{
                        removePost(post.id);
                    }}>Remove Post</a>

                    
                    
                    <div class="card blue-grey  post darken-1 modal modal-mode" id={"modal"+post.id}>
                         <i className="material-icons clickable" onClick={()=>hidePost(post.id)}>close</i>
                        <div class="card-content white-text">
                            {post.body}
                        </div>
                    </div>

                    <div className="modal overlay open-overlay invisible" id={"overlay"+post.id}></div>

                </div>              
            ))
         }
    </div>)
}

export default Posts;