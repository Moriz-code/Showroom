import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ShopApp extends Component {


    render() {
        return <React.Fragment>
            <div className="hero">
                    <p className="hero-title">Buy and sell local fashion goods</p>
                    {/* <Link to="/item"><button>Shop Now</button></Link> */}
                </div>
            <div className="container home-categories">
                <div className="category-b">MEN</div>
                <div className="category-c">WOMEN</div>
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
