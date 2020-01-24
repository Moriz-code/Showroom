import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadShop, updateShopSettings, } from '../../actions/ShopActions';
import { loadItems, deleteItem, saveItem } from '../../actions/ItemActions';

import ItemsList from '../../cmps/items/ItemList';
import EditItem from '../../cmps/items/EditItem';
import ShopSettings from '../../cmps/shop/ShopSettings';
import HeaderShop from '../../cmps/shop/HeaderShop';

import Comments from '../../pages/seller/Comments';
import InnerNavbar from '../../cmps/InnerNavBar'


import Utils from '../../services/UtilService';
// import SocketService from '../../services/SocketService';

//icons
import settingsIcon from '../../styles/assets/imgs/icons/settings.png';
import chat from '../../styles/assets/imgs/icons/chat.png';

class PersonalShop extends Component {
    state = {
        isOnEditMode: false,
        isOnEditSettigs: true,
        isOnChat: false,

        //create empty item from the service
        item: {
            _id: '',
            title: '',
            price: '',
            description: '',
            sizeFit: '',
            size: '',
            gender: '',
            itemOwner: {
                //need to change the source that it came from - keep in session. ask tal.
                id: this.props.match.params.id,
                name: '',
                logoUrl: ''
            },
            labels: [],
            imgs: [],
            reviews: []
        },

        shop: {
            _id: '',
            comments: [],
            info: {
                name: '',
                description: '',
                instagram: '',
                facebook: '',
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
            },

        }
    }

    async componentDidMount() {
        console.log('did mount');
        await this.props.loadShop(this.props.match.params.id)
        await this.props.loadItems();
        this.setState({ shop: this.props.shop.selectedShop })

        // //sockets
        // SocketService.setup();
        // SocketService.emit('chat topic', this.props.match.params.id);
        // SocketService.emit('user send msg', { text: `${this.props.loggedInUser.userName} has joined the chat` });
        // SocketService.on('chat addMsg', this.addComment)
        // SocketService.on('user send msg', this.addComment)
    }

    // componentDidUpdate() {
    //     this.props.loadItems();
    // }



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

    handleSettingChange = (ev) => {
        console.log(ev);

        let { name, value, alt } = ev.target;

        if (name === 'videoUrl') {
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

    // handleCommentAdd = (ev) =>{
    //     // let {name , comment} = ev.target;

    // console.log(ev.target);

    // //     else {
    // //         value = list.concat(value);
    // //     }
    // // }

    // // this.setState(prevState => ({
    // //     ...prevState,
    // //     item: {
    // //         ...prevState.item, [name]: value
    // //     }
    // // }))
    // }

    // sendComment = (text) => {
    //     SocketService.emit('chat newMsg', { user: { userName: "Guest" }, text });
    // };

    // onAddComment = (newMsg) => {
    //     this.setState(prevState => ({ comments: [...prevState.comments, newMsg] }));
    // }


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

    componentWillUnmount = () => {
        // if (!this.props.loggedInUser) return
        // SocketService.off('chat addMsg')
        // SocketService.off('user send msg')
        // SocketService.terminate()
    }



    render() {
        // console.log('shop:', this.state.shop)
        const { shop } = this.state;
        return (
            <React.Fragment>
                <InnerNavbar></InnerNavbar>
                {this.state.shop ?
                    <div className='shop-page'>
                        <div className={this.state.isOnEditSettigs ? 'modal-opened shop-container' : 'full-width shop-container'}>
                            <HeaderShop selectedShop={shop}></HeaderShop>

                            <button className='btn-style-none' onClick={this.onEditSettings}><img className='shop-edit-btn' src={settingsIcon} /></button>
                            <div className={this.state.isOnEditSettigs ? 'modal-settings' : 'display-none'}>
                                <ShopSettings onSaveSettings={this.onSaveSettings} handleColorChange={this.handleColorChange} handleSettingChange={this.handleSettingChange} shop={this.state.shop}></ShopSettings>
                            </div>

                            <div style={{ backgroundColor: shop.style.bgColor }}>
                                <button className="add-item-btn" onClick={this.onEditMode}>Add Item</button>
                                <div className={this.state.isOnEditMode ? 'modal' : 'display-none'}>
                                    <EditItem onSaveItem={this.onSaveItem} handleFormChange={this.handleFormChange} item={this.state.item}></EditItem>
                                </div>

                                <button className="chat-icon" onClick={this.onChat}> <img src={chat} alt="icon" /></button>
                                <div className={this.state.isOnChat ? 'modal-chat' : 'display-none'}>
                                    {/* <Comments addComment={this.onAddComment} comments={shop.comments}></Comments> */}
                                </div>


                                {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} items={this.props.items} listMode="adminMode" /> : 'There is No Items'}
                                {/* {this.props.items ? <ItemsList editItem={this.editItem} deleteItem={this.props.deleteItem} listMode={this.props.shop.selectedShop.owner.id === this.props.loggedInUser._id ? "adminMode" : "customerMode"} items={this.props.items} /> : 'There is No Items'} */}

                                {/* socket */}

                            </div>
                        </div>
                    </div>
                    : ''}
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
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalShop);



// listMode={this.props.shop.selectedShop.owner.id===this.props.loggedInUser._id ?"adminMode":"customerMode"}