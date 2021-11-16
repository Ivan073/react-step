import React,{useState, useRef, useEffect} from "react";
import axios from 'axios';
import ReactPaginate from "react-paginate"


const Posts = () =>{
    const [posts, setPosts] = useState([]);
    const [searchFilter, setSearchFilter]= useState(null);
    const [page, setPage] = useState(1);
    const limit = 10;
    const pagecount = 100/limit;

    const trigger = useRef(null);
    const observer = useRef(null);

    useEffect(()=>{
        
        const callback = function(entries, observer) {
            if(entries[0].isIntersecting){
                console.log(page); 
                setPage(page+1);
                console.log(page); 
                console.log(observer);
                console.log(entries);
            }
            
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(trigger.current);
    },[])
  
    useEffect(()=>{
        console.log("pageEffect page:"+page);
        trigger.current.innerText="trigger on page "+page;
        fetchPosts();
    },[page])

    const fetchPosts = async () =>{  
        console.log("fetchPage"+page);
        console.log("limit:"+limit);
        console.log("page:"+page);
        const fetchedPosts = await axios.get('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _limit:limit,
                _page:page
            }
        });
        setPosts([...posts,...fetchedPosts.data]);
        setSearchFilter([...posts,...fetchedPosts.data]);
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

    const Filter = (e) =>{
        setSearchFilter(
            posts.filter((post) =>
              post.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
    }

    const pageChange = async (page) =>{ 
        setPage(page.selected+1);    
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
                        onChange={Filter}
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

                    
                    
                    <div className="card blue-grey  post darken-1 modal modal-mode" id={"modal"+post.id}>
                         <i className="material-icons clickable" onClick={()=>hidePost(post.id)}>close</i>
                        <div className="card-content white-text">
                            {post.body}
                        </div>
                    </div>

                    <div className="modal overlay open-overlay invisible" id={"overlay"+post.id}></div>

                </div>              
            ))
         }
         <div ref={trigger} className="red accent-4">trigger</div>
         <ReactPaginate
            className="pagination"
            activeClassName="active"
            breakLabel="..."
            nextLabel="next >"
            onPageChange = {pageChange}
            pageRangeDisplayed={5}
            pageCount={10}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            pageLinkClassName="clickable"
            previousClassName="clickable"
            nextClassName="clickable"
        />
    </div>)
}

export default Posts;