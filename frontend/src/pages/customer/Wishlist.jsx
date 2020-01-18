import React, {Component} from 'react';
import { connect } from 'react-redux'
import ItemsList from '../../cmps/items/ItemList'
class Wishlist extends Component{

    componentDidMount=()=>{
      
        // wishlist.map(item=>console.log(item.imgUrl)
        // )
       
    }

    deleteItem=(itemId)=>{

        console.log(itemId);
        
    }
    render(){
       
       
        
        return(
            <div>
                <ItemsList deleteItem={this.deleteItem} listMode="wishListMode" items={this.props.loggedInUser.wishlist}>></ItemsList>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        loggedInUser: state.user.loggedInUser
    };
};

const mapDispatchToProps = {
    //functions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Wishlist);
