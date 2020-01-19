import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadShop, updateShopSettings } from '../../actions/ShopActions';
import { loadItems, deleteItem, saveItem } from '../../actions/ItemActions';

import ItemsList from '../../cmps/items/ItemList';
import EditItem from '../../cmps/items/EditItem';
import ShopSettings from '../../cmps/shop/ShopSettings';

import InstgaramIcon from '../../styles/assets/logo/insta.png';
import FacebookIcon from '../../styles/assets/logo/facebook.png';

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
        this.props.loadShop(this.props.match.params.id)
        this.props.loadItems();

        await new Promise(resolve => { setTimeout(resolve, 1000); })
        this.setState({ shop: this.props.shop.selectedShop })
        return Promise.resolve();

    }

    componentDidUpdate() {
        //this.props.loadItems();
    }


    handleSettingChange = (ev) => {
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
                // console.log('check');
            }
        }

        this.setState(prevState => ({
            ...prevState,
            item: {
                ...prevState.item, [name]: value
            }
        }))

        console.log(this.state.item);

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
        //  this.props.loadItems();

        // await new Promise(resolve => { setTimeout(resolve, 1000); })
        // this.props.saveItem(this.state.item);
        // this.clearItemState();
        // return Promise.resolve();
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
        const { selectedShop } = this.props.shop;
        return (
            <React.Fragment>
                {this.props.shop.selectedShop ?
                    <div className="shop-container" style={{ backgroundColor: selectedShop.style.bgColor }}>
                        <div className="shop-header">
                            {/* settings */}
                            <div className="coverImg" style={{ backgroundImage: 'url(' + selectedShop.style.coverImgUrl + ')' }}></div>
                            <img className="shop-logo" src={selectedShop.style.logoUrl} />
                            <h1 className="title">{selectedShop.info.name}</h1>
                            <h2 className="description">{selectedShop.info.description}</h2>
                            <h2 className="designer-name">
                                Shop Owner <br></br>{selectedShop.owner.name}</h2>

                            <iframe title="video" className="shop-video" src="https://www.youtube.com/embed/tgbNymZ7vqY">
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

                        <button onClick={this.onEditSettings}>Edit Shop Style</button>
                        <div className={this.state.isOnEditSettigs ? 'modal' : 'display-none'}>
                            <ShopSettings onSaveSettings={this.onSaveSettings} handleSettingChange={this.handleSettingChange} shop={this.state.shop}></ShopSettings>
                        </div>

                        <button onClick={this.onEditMode}>Add Item</button>
                        <div className={this.state.isOnEditMode ? 'modal' : 'display-none'}>
                            <EditItem onSaveItem={this.onSaveItem} handleFormChange={this.handleFormChange} item={this.state.item}></EditItem>
                        </div>
                        {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} listMode="adminMode" items={this.props.items} /> : 'There is No Items'}
                    </div>
                    : 'this shop is not availble'}

            </React.Fragment>)
    }
}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        items: state.item.items,
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



