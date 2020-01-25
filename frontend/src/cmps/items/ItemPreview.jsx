import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import ReviewRating from '../reviews/ReviewRating';
import heart from '../../styles/assets/imgs/icons/002-heart.png';
import heartfilled from '../../styles/assets/imgs/icons/003-heart-1.png';

import { addToWishList, removeFromWishList } from '../../actions/UserActions';
import Avatar from '@material-ui/core/Avatar';
import editIcon from '../../styles/assets/imgs/edit _icon.png';
import deleteIcon from '../../styles/assets/imgs/trash.png';

class ItemPreview extends Component {


  generateBtns = () => {
    switch (this.props.listMode) {
      case "cartMode":
        return (<div>
          <button onClick={() => this.handleDelete(this.props.item._id)}>X</button>
        </div>
        )
      case "wishListMode":
        return (<div>
          <button onClick={() => this.handleDelete(this.props.item._id)}>X</button>
          <button onClick={() => this.handleAddToCart(this.props.item)}>Add To Cart</button>
        </div>
        )

      case "adminMode":
        return (
          <div className="item-edit-panel">
            <button onClick={() => this.handleDelete(this.props.item._id)}><img src={deleteIcon} /></button>
            <button onClick={() => this.handleEdit(this.props.item)}><img src={editIcon} /></button>
          </div>
        )
      case "customerMode":
        return (
          <div>
          </div>
        )

      default:
        break;
    }
  }

  handleDelete = (itemId) => {
    this.props.deleteItem(itemId)
  }

  handleEdit = (item) => {
    this.props.editItem(item)
  }


  handleAddToCart = (item) => {
    this.props.addToCart(item)
  }

  calculateAvgRating = () => {
    const { reviews } = this.props.item
    const ratingSum = reviews.reduce((acc, review) => {


      return acc += +review.rate
    }, 0)
    const avgRating = Math.floor(ratingSum / reviews.length / 5 * 100)
    return avgRating

  }


  onAddToWishList = async () => {
    const { wishlist } = this.props.loggedInUser
    const itemIdx = wishlist.find(item =>
      this.props.item._id === item._id)
    if (itemIdx === undefined) {
      await this.props.addToWishList(this.props.item, this.props.loggedInUser)
    }
    else await this.props.removeFromWishList(this.props.item._id, this.props.loggedInUser)
    // await this.setState({ modalMode: true, modalMsg: "Added To Wishlist" })
    // this.setState({ modalMode: false, modalMsg: "" })


  }
  get getHeartIcon() {
    const { wishlist } = this.props.loggedInUser

    const itemIdx = wishlist.find(item =>

      this.props.item._id === item._id)

    if (itemIdx === undefined) {

      return heart
    }
    else {
      return heartfilled
    }

  }

  render() {

    return (<React.Fragment>
      <div className="item-card">

        <img onClick={this.onAddToWishList} className="heart-icon" alt="heart" src={this.getHeartIcon} />


        <Link to={`/itemDetails/${this.props.item._id}`}>

          <img className="item-img" alt="img-item" src={this.props.item.imgs[0]}></img>

          {/* <div className="card-desc"> */}
          {/* <img className="item-avatr" alt="img-item" src={avatar} /> */}
          
          <div className="details">

           
              <div className=" flex align-center ">
                <Avatar alt="" src={this.props.item.itemOwner.logoUrl} style={{ backgroundColor: "lightgray" }} />
                <h4 className="brand-name"> {this.props.item.itemOwner.name}</h4>
              </div>
          

            <h3 className="item-title">{this.props.item.title}</h3>


            <div class="price-star">

              <p className="item-price">${Number.parseFloat(this.props.item.price).toFixed(2)}</p>
              {this.props.item.reviews &&
                <ReviewRating amount={this.props.item.reviews.length} rate={this.calculateAvgRating()}></ReviewRating>}

              {/* </div> */}


            </div>
          </div>
        </Link>
        {this.generateBtns()}
      </div>

    </React.Fragment >
    )
  }
}



const mapStateToProps = (state) => {

  return {
    loggedInUser: state.user.loggedInUser
  };
};

const mapDispatchToProps = {
  addToWishList,
  removeFromWishList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPreview);