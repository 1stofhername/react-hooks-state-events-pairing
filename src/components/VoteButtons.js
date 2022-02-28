import React, { useState } from 'react';

function VoteButtons ({ upvotes, downvotes }){
    const [upvoteCount, setUpvotes]= useState(upvotes);
    const [downvoteCount, setDownvotes]= useState(downvotes);

    function increaseVote(event){
        if(event.target.value==="upvote") {
            let newUpvoteCount= upvoteCount+1;
            setUpvotes(newUpvoteCount)
        } else {
            let newDownvoteCount=downvoteCount+1;
            setDownvotes(newDownvoteCount);
        }
        
    }

    return (
        <div className="buttons">
        <button className="vote" onClick={increaseVote} value="upvote">{upvoteCount} 👍</button>
        <button className="vote" onClick={increaseVote} value="downvote">{downvoteCount} 👎</button>
        </div>
    )
}

export default VoteButtons