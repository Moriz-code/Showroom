import React from 'react'

export default function ReviewRating({amount,rate}) {
   
    
    return (
        <div className="flex">
            {rate ?
                <div>
                    <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{ width: `${rate || ""}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="star-ratings-css-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    </div>
            <span>({amount})</span>
                </div> : ''}
        </div>
    )
}
