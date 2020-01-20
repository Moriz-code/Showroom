import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadShop, updateShopSettings } from '../../actions/ShopActions';
import { loadItems, deleteItem, saveItem } from '../../actions/ItemActions';

import ItemsList from '../../cmps/items/ItemList';
import EditItem from '../../cmps/items/EditItem';
import ShopSettings from '../../cmps/shop/ShopSettings';
import HeaderShop from '../../cmps/shop/HeaderShop';
import Utils from '../../services/UtilService';



class PersonalShop extends Component {
    state = {
        isOnEditMode: false,
        isOnEditSettigs: false,

        item: {
            _id: '',
            title: '',
            price: '',
            description: '',
            sizeFit: '',
            size: '',
            gender: '',
            itemOwner: {
                id: this.props.match.params.id,
                name: '',
                logoUrl: ''
            },
            labels: [],
            imgs: [],
            reviews: [
                {
                    byUser: {
                        name: '',
                        id: ''
                    },
                    txt: '',
                    rate: ''
                }
            ]
        },

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

       
        console.log('did mount')
     await this.props.loadShop(this.props.match.params.id)
        await this.props.loadItems();

        // await new Promise(resolve => { setTimeout(resolve, 1000); })
        this.setState({ shop: this.props.shop.selectedShop })
        // return Promise.resolve();

    }


    handleSettingChange = (ev) => {
        let { name, value, alt } = ev.target;

        if (name === 'videoUrl'){  
        value = Utils.getEmbdedUrl(value);
        }

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

    handleFormChange = (ev) => {
        let { name, value } = ev.target;

        if (name === 'labels' || name === 'imgs') {
            var list = [...this.state.item[name]];
            var i = list.indexOf(value)
            // console.log('handle form'  , i);

            if (i >= 0) {
                list.splice(i, 1)
                value = list
            }
            else {
                value = list.concat(value);
            }
        }

        this.setState(prevState => ({
            ...prevState,
            item: {
                ...prevState.item, [name]: value
            }
        }))


    }

    onSaveSettings = (ev) => {
        ev.preventDefault();
        this.props.updateShopSettings(this.state.shop);
    }

    onEditSettings = () => {
        this.setState(state => ({
            isOnEditSettigs: !state.isOnEditSettigs
        })
        )
    }

    onEditMode = () => {
        this.setState(state => ({
            isOnEditMode: !state.isOnEditMode,
        }))
    }

    onSaveItem = async (ev) => {
        ev.preventDefault();
        await this.props.saveItem(this.state.item);
        this.clearItemState();
        this.props.loadItems();

    }

    editItem = (item) => {
        this.setState(prevState => ({
            ...prevState,
            item
        }))
        this.onEditMode();
    }

    clearItemState() {
        this.setState(prevState => ({
            isOnEditMode: false,
            item: {
                _id: '',
                title: '',
                price: '',
                description: '',
                sizeFit: '',
                size: '',
                gender: '',
                itemOwner: {
                    id: this.props.match.params.id,
                    name: '',
                    logoUrl: ''
                },
                labels: [],
                imgs: [],
                reviews: [
                    {
                        byUser: {
                            name: '',
                            id: ''
                        },
                        txt: '',
                        rate: ''
                    }
                ]

            }
        }))
    }


    render() {
        console.log('shop:',this.state.shop)
        const { shop } = this.state;
        return (
            <React.Fragment>

                {this.state.shop  ?
                    <div className="shop-container" style={{ backgroundColor: shop.style.bgColor }}>
                        <HeaderShop selectedShop={shop}></HeaderShop> 

                        <button onClick={this.onEditSettings}>Edit Shop Style</button>
                        <div className={this.state.isOnEditSettigs ? 'modal' : 'display-none'}>
                        <ShopSettings onSaveSettings={this.onSaveSettings} handleSettingChange={this.handleSettingChange} shop={this.state.shop}></ShopSettings> 
                        </div>
                        <button onClick={this.onEditMode}>Add Item</button>
                        <div className={this.state.isOnEditMode ? 'modal' : 'display-none'}>
                     <EditItem onSaveItem={this.onSaveItem} handleFormChange={this.handleFormChange} item={this.state.item}></EditItem>
                        </div>
                        </div>
                        :''}
                        {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} listMode="adminMode" items={this.props.items} /> : 'There is No Items'}
                  
                  

            </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        items: state.item.items,
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    loadShop,
    loadItems,
    deleteItem,
    updateShopSettings,
    saveItem
    // setFilterBy
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);



// listMode={this.props.shop.selectedShop.owner.id===this.props.loggedInUser._id ?"adminMode":"customerMode"}