import React, { Component } from 'react';


export default class Comments extends Component {

    // const commentMap = comments.map(comment => {
    //     if (!comment.user) {
    //       return <p key={comment.text}>{comment.text}</p>
    //     }
    //     return (
    //       <p key={comment.text + comment.user.userName}>{comment.user.userName} : {comment.text}</p>
    //     );
    //   })

    render() {
        console.log(this.props); 

        // const { comments } = this.props;
        // const { text } = this.state;
        // const commentMap 
        return (
            <div>
                
                <h1>Chat With the Seller</h1>
                {/* {commentMap} */}
            </div>
        )
    }


}