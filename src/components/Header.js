import REACT from "react";
import VoteButtons from "./VoteButtons.js";


function Header ({ video }){
    return(
        <div id="title">
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <VoteButtons upvotes={video.upvotes} downvotes={video.downvotes} />
        </div>
    )
}

export default Header