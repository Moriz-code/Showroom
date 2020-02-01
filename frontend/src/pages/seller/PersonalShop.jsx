import React, { Component } from 'react';
import { connect } from 'react-redux';

import Utils from '../../services/UtilService';
import ItemService from '../../services/ItemService';
import CloudinaryService from '../../services/CloudinaryService';


import { loadShop, updateShopSettings, } from '../../actions/ShopActions';
import { loadItems, deleteItem, saveItem } from '../../actions/ItemActions';
import { addToCart } from '../../actions/OrderActions';

import ItemsList from '../../cmps/items/ItemList';
import EditItem from '../../cmps/items/EditItem';
import ShopSettings from '../../cmps/shop/ShopSettings';
import HeaderShop from '../../cmps/shop/HeaderShop';
import InnerNavbar from '../../cmps/InnerNavBar';
// import Loading from "../../cmps/Loading";

import Footer from '../../cmps/Footer';

import chat from '../../styles/assets/imgs/icons/chat.png';
import addBtn from '../../styles/assets/imgs/add.png';

class PersonalShop extends Component {
    state = {
        isOnEditMode: false,
        isOnEditSettigs: false,
        isOnChat: false,
        isOwner: false,
        isLoadingImg: false,
        isOnSearchImage: false,

        item: '',

        shop: ''
    }



    async componentDidMount() {
        await this.props.loadShop(this.props.match.params.id)

        await this.props.loadItems();
        this.props.loadItems({ 'itemOwner': this.props.match.params.id })

        this.setState({ shop: this.props.shop.selectedShop })
        this.clearItemState();
        this.checkIfOwner();
    }



    clearItemState() {
        let newItem = ItemService.getNewItem();
        newItem.itemOwner.id = this.props.match.params.id;
        newItem.itemOwner.name = this.state.shop.info.name;
        newItem.itemOwner.logoUrl = this.state.shop.style.logoUrl;

        this.setState(_ => ({
            item: newItem
        }))
    }



    notifciation = () => {
        this.props.addToCart()
    }


    checkIfOwner = () => {
        const user = (this.props.loggedInUser && this.props.shop.selectedShop.owner.id === this.props.loggedInUser._id) ? this.setState({ isOwner: true }) : null
        return user
    }


    handleColorChange = (ev) => {

        const name = "bgColor";
        const alt = "style";
        let value = ev.hex;

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


    handleSettingChange = async (ev) => {



        let { name, value, alt, src } = ev.target;


        if (name === 'videoUrl') {
            value = Utils.getEmbdedUrl(value);
        }

        if (name === 'coverImgUpload' || name === 'logoUrl') {
            if (name === 'coverImgUpload') {
                name = 'coverImgUrl'
            }
            this.setState({ isLoadingImg: true });
            const res = await CloudinaryService.uploadImg(ev);
            value = res.url;
            this.setState({ isLoadingImg: false })
        } else {
            if (name === 'coverImgUrl') {
                value = src
            }
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

    handleFormChange = async (ev) => {
        let { name, value } = ev.target;

        switch (name) {
            case 'labels':
                var list = [...this.state.item[name]];
                var i = list.indexOf(value)

                if (i >= 0) {
                    list.splice(i, 1)
                    value = list
                }
                else {
                    value = list.concat(value);
                }
                break;

            case 'price':
                value = parseInt(value)
                break;

            case 'imgs':
                const id = +ev.target.id

                this.setState({ isLoadingImg: true });
                var list = [...this.state.item[name]];
                const res = await CloudinaryService.uploadImg(ev);
                let resUrl = res.url;
                list[id] = resUrl;
                value = list;
                this.setState({ isLoadingImg: false })
                break;

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
        window.scrollTo(0, 400)

    }

    onAdd = () => {
        this.clearItemState();
        this.onEditMode();
    }

    onChat = () => {
        this.setState(state => ({
            isOnChat: !state.isOnChat
        }))

    }

    onSaveItem = async (ev) => {
        ev.preventDefault();
        await this.props.saveItem(this.state.item);
        this.clearItemState();
        this.props.loadItems();
        this.onEditMode()
    }



    editItem = (item) => {
        this.setState(prevState => ({
            ...prevState,
            item
        }))
        this.onEditMode();
    }




    render() {


        // console.log('shop:', this.state.shop)
        const { shop } = this.state;
        return (
            <React.Fragment>

                <InnerNavbar isOwner={this.state.isOwner}></InnerNavbar>
                {this.state.shop ?
                    <div className='shop-page' style={{ backgroundColor: shop.style.bgColor }}>



                        <div className={this.state.isOnEditSettigs ? 'modal-opened shop-container' : 'full-width shop-container'}>
                            <HeaderShop Loading={this.state.isLoadingImg} onEditSettings={this.onEditSettings} isOnEditSettigs={this.state.isOnEditSettigs} selectedShop={shop}></HeaderShop>


                            {this.state.isOnEditSettigs ?
                                <ShopSettings onSaveSettings={this.onSaveSettings} handleColorChange={this.handleColorChange} handleSettingChange={this.handleSettingChange} shop={this.state.shop} />
                                : ''}


                            {this.state.item ?
                                <div className="shop-main">
                                    {this.state.isOnEditMode ?
                                        <EditItem Loading={this.state.isLoadingImg} onSaveItem={this.onSaveItem} handleFormChange={this.handleFormChange} item={this.state.item}></EditItem> : ''}
                                </div>
                                : ''}

                            <button className='add-item-btn' onClick={this.onAdd}>
                                <img src={addBtn} className={this.state.isOnEditMode ? 'tranform45' : ''} alt="icon-add" />
                            </button>

                            <div className="cards-shop-container">
                                {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} items={this.props.items} listMode="adminMode" /> : 'There is No Items'}
                                {/* {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} listMode={this.props.shop.selectedShop.owner.id === this.props.loggedInUser._id ? "adminMode" : "customerMode"} items={this.props.items} /> : 'There is No Items'} */}
                            </div>
                            {/* socket */}

                        </div>
                    </div>

                    : ''
                }
                <Footer></Footer>
            </React.Fragment >)
    }
}

const mapStateToProps = state => {
    return {
        shop: state.shop,
        items: state.item.items,
        loggedInUser: state.user.loggedInUser,
    };
};

const mapDispatchToProps = {
    loadShop,
    loadItems,
    deleteItem,
    updateShopSettings,
    saveItem,
    addToCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);



// listMode={this.props.shop.selectedShop.owner.id === this.props.loggedInUser._id ? "adminMode" : "customerMode"}