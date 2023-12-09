import { useEffect, useState } from "react";
import Content from "../components/content";

const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post')
            .then(response => {
                response.json().then(posts => {
                setPosts(posts);
            })
        })
    }, []);
    return ( 
        <div>
            {posts.length > 0 && posts.map(post => (
                <Content {...post} />
            ))}
        </div>
     );
}
 
export default IndexPage;