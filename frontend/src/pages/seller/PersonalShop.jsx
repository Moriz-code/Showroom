import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { getItemById } from '../../actions/ShopActions';
import { loadItems , setCurrentItem} from '../../actions/ItemActions';
import ItemsList from '../../cmps/items/ItemList';
import ShopSettings from '../../cmps/shop/ShopSettings';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

class PersonalShop extends Component {

    componentDidMount() {
        this.props.setCurrentItem(this.props.match.params.id);
       
        // this.props.loadItems();
        // console.log('loadShop ' , this.props.match.params.id);     
    }

    render() {
        const { selectedShop } = this.props.shop
        console.log(this.props.items);

        return (
            // shop &&
            <React.Fragment>
                <h1>SHOP</h1>
                {this.props.shop.selectedShop ?
              
                    <div style={{ backgroundColor: selectedShop.style.bgColor }}>
                        <ShopSettings></ShopSettings>
                        <div className="shop-coverImg" style={{ backgroundImage: 'url(' + selectedShop.style.coverImgUrl + ')' }}></div>
                        <img className="shop-logo" src={selectedShop.style.logoUrl} />
                        <h1>{selectedShop.name}</h1>
                        <h2>{selectedShop.description}</h2>
                        <h2>By the designer : {selectedShop.owner.name}</h2>
                        <div>
                            Social Media:
                            <a href={selectedShop.media.instagram}>
                                <img src={InstgaramIcon} className="shop-icon" alt="icon" />
                            </a>

                            <a href={selectedShop.media.facebook}>
                                <img src={FacebookIcon} className="shop-icon" alt="icon" />
                            </a>
                        </div>
                    </div>

                    : ''}

                {this.props.items ? <ItemsList items={this.props.items}> </ItemsList> : 'There is No Items'}
                
            </React.Fragment>)
    }
}


// ItemsList items={this.props.items}>
//         </ItemsList>:'shit!'}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        items: state.item.items
        // currentShop: state.selectedItem
    };
};

const mapDispatchToProps = {
    setCurrentItem,
    loadItems
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);


//http://localhost:3000/item?itemOwner.id=1234
