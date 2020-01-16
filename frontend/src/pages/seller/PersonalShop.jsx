import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadShop } from '../../actions/ShopActions'


class PersonalShop extends Component {

    componentDidMount() {
        this.props.loadShop(this.props.match.params.id);
        // console.log('loadShop ' , this.props.match.params.id);     
    }

    render() {
        const { selectedShop } = this.props.shop
        console.log(selectedShop);

        return (
            // shop &&
            <React.Fragment>
                <h1>SHOP</h1>
                {this.props.shop.selectedShop ?
                    <div>
                        <div>LOGO</div>
                        <h1>{selectedShop.name}</h1>
                        <h2>{selectedShop.description}</h2>
                        <h2>By the designer : {selectedShop.owner.name}</h2>
                    <div>
                        Social Media: 
                        {/* {selectedShop.media.} */}

                    </div>
                    </div>

                    : ''}
            </React.Fragment>)
    }
}


const mapStateToProps = state => {
    return {
        shop: state.shop
    };
};

const mapDispatchToProps = {
    loadShop
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);
