import React, { Component } from 'react';
import { connect } from 'react-redux'

class ShopApp extends Component {


    render() {
<<<<<<< HEAD
        return(
            <h1>ShopApp!!!!!!!!!</h1>
        ) 
=======
        return <React.Fragment>

            <div>Buy and sell local fashion good</div>
            <button>Shop Now</button>

            <div className="home-categories category-a">
                <div className="category-b">WOMEN</div>
                <div className="category-c">NEW</div>
                <div className="category-d">SUMMER SALE</div>
                <div className="category-e">LAST CHANCE</div>
            </div>

            <div>
                <h3>
                    Title
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda provident officia neque sequi. Explicabo reprehenderit unde, cumque quos iure excepturi velit dicta aliquid ab. Voluptas consequatur vero officia ea cum.</p>

            </div>
        </React.Fragment>
>>>>>>> 4f39933c4996784403a604ea7867d79a63fc6c66
    }
}



const mapStateToProps = state => {
    return {
        //state
    };
};

const mapDispatchToProps = {
    //functions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopApp);
