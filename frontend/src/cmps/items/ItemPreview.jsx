import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";
import ReviewRating from '../reviews/ReviewRating';


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
      <div className="item-card clean-line flex justify-space-between">
        <Link className="flex justify-space-between column" style={{height:"100%"}} 
          to={`/item/${this.props.item._id}`}>
        <div style={{height:"100%"}}  >
          <img style={{height:"70%"}}  alt="img-item" src={this.props.item.imgs[0]} />
          <h3>{this.props.item.itemOwner.name}</h3>
          <h3 style={{ fontSize: "15px" }}>{this.props.item.title}</h3>
        </div>
        <div className="flex justify-space-around">
          <p>${this.props.item.price}</p>
         {this.props.item.reviews&& <ReviewRating amount={this.props.item.reviews.length} rate={this.calculateAvgRating()}></ReviewRating>}
        </div>
      </Link>
      <div >
      </div>
      {this.generateBtns()}
      </div>
    </React.Fragment >
    )
  }
}

export default withRouter(ItemPreview)