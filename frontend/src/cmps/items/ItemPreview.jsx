import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import ReviewRating from '../reviews/ReviewRating';
import heart from '../../styles/assets/imgs/icons/002-heart.png';
import avatar from '../../styles/assets/imgs/covertexture.jpg';


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
          <div>
            <button onClick={() => this.handleDelete(this.props.item._id)}>delete</button>
            <button onClick={() => this.handleEdit(this.props.item)}>edit</button>
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


  render() {

    return (<React.Fragment>

      <div className="item-card">
        <img className="heart-icon" alt="heart" src={heart} />
        <Link to={`/itemDetails/${this.props.item._id}`}>
          <img className="item-img" alt="img-item" src={this.props.item.imgs[0]} />
          {/* <img className="item-avatr" alt="img-item" src={avatar} /> */}
          <span className="item-seller">{this.props.item.itemOwner.name}</span>
          <h3>{this.props.item.title}</h3>
          <p>${this.props.item.price}</p>

          </Link>
          <span className="item-stars">
            {this.props.item.reviews &&
              <ReviewRating amount={this.props.item.reviews.length} rate={this.calculateAvgRating()}></ReviewRating>}
            </span>
        {this.generateBtns()}

      </div>
    </React.Fragment >
    )
  }
}

export default withRouter(ItemPreview)

