import React from 'react'

export default function ReviewRating(props) {
    console.log(props.rating);
    
    return (
            <div className="flex">
            <h2>Average Rating {Math.round((props.rating/100*5)*100)/100}</h2>
            <div className="star-ratings-css">
                <div className="star-ratings-css-top" style={{width:`${props.rating}%`}}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
            </div>
            </div>
    )
}
