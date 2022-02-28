import React, { useState } from "react";

function Comments ({ comments }){
    const[hideOn, setHideOn]= useState(false);

    function handleHideClick(){
        setHideOn(!hideOn);
    }
 

    return(
        <div>
            <button onClick={handleHideClick} id="hide" value="hide-comments">{hideOn ? "Show Comments" : "Hide Comments"}</button>
            <div id="pagebreak"></div>
            <span>
                <h2>{comments.length} Comments</h2>
                <div id="comments">
                {!hideOn? comments.map((comment)=> {
                    return (
                    <span>
                    <h4>{comment.user}</h4>
                    <p>{comment.comment}</p>
                    </span>
            )
        }): ""}
                </div>
            </span>
        </div>
    )

}

export default Comments