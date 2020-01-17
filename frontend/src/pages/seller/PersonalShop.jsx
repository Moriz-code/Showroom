import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadShop, updateShopSettings } from '../../actions/ShopActions';
import { loadItems, setFilterBy, deleteItem } from '../../actions/ItemActions';
import ItemsList from '../../cmps/items/ItemList';
import ShopSettings from '../../cmps/shop/ShopSettings'

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

class PersonalShop extends Component {


    state = {
        isOnEditSettigs: true,
        shop: {
            _id: '',
            info: {
                name: '',
                description: '',
                instagram: '',
                facebook: ''
            },
            owner: {
                id: '',
                name: ''
            },
            style: {
                bgColor: '',
                theme: '',
                videoUrl: '',
                coverImgUrl: '',
                logoUrl: '',
                darkMode: ''
            }
        }
    }

    async componentDidMount() {
        this.props.loadShop(this.props.match.params.id)
        this.props.loadItems();


      
        await new Promise(resolve => { setTimeout(resolve, 1000); })
        this.setState({ shop: this.props.shop.selectedShop })
        return Promise.resolve();

    }



    handleChange = (ev) => {
        const { name, value, alt } = ev.target;
        this.setState(prevState => ({
            ...prevState,
            shop: {
                ...prevState.shop,
                [alt]: {
                    ...prevState.shop[alt],
                    [name]: value
                }
            }
        }))


    }

    onSave = (ev) => {
        ev.preventDefault();
        this.props.updateShopSettings(this.state.shop);
    }



    render() {
        const { selectedShop } = this.props.shop
        return (
            <React.Fragment>
                {this.props.shop.selectedShop ?
                    <div className="shop-container" style={{ backgroundColor: selectedShop.style.bgColor }}>
                        <div className="shop-header">
                            {/* settings */}
                            <div onClick={this.onEditSettings}></div>
                            <div className={this.state.isOnEditSettigs ? '' : 'display-none'}>
                                <ShopSettings onSave={this.onSave} handleChange={this.handleChange} shop={this.state.shop}></ShopSettings>
                            </div>

                            <div className="coverImg" style={{ backgroundImage: 'url(' + selectedShop.style.coverImgUrl + ')' }}></div>
                            <img className="shop-logo" src={selectedShop.style.logoUrl} />
                            <h1 className="title">{selectedShop.info.name}</h1>
                            <h2 className="description">{selectedShop.info.description}</h2>
                            <h2 className="designer-name">
                            Shop Owner <br></br>{selectedShop.owner.name}</h2>
                               
                             <iframe className="shop-video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe> 


                            <div className="insta-icon">
                                <a href={selectedShop.info.instagram}>
                                    <img src={InstgaramIcon} alt="icon" />
                                </a>
                            </div>

                            <div className="fb-icon">
                                <a href={selectedShop.info.facebook}>
                                    <img src={FacebookIcon} alt="icon" />
                                </a>
                            </div>
                        </div>
                        {this.props.items ? <ItemsList deleteItem={deleteItem} listMode="adminMode" items={this.props.items}> </ItemsList> : 'There is No Items'} 
                    </div>
                    : 'this shop is not availble'}



            </React.Fragment>)
    }
}


// ItemsList items={this.props.items}>
//         </ItemsList>:'shit!'}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        items: state.item.items,
        // filterBy: state.filterBy
    };
};

const mapDispatchToProps = {
    loadShop,
    loadItems,
    deleteItem,
    updateShopSettings
    // setFilterBy
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);


//http://localhost:3000/item?itemOwner.id=1234

