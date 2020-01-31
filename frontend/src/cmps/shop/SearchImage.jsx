import React from 'react';
import UnsplashService from '../../services/UnsplashService';
// import Axios from 'axios';

class SearchImage extends React.Component {

    state = {
        images: []
    }

    handleSearch = async ev => {
        const searchKey = ev.target.value;
        let results = await UnsplashService.SearchImage(searchKey)
        // console.log(results);

        this.setState({ images: results.data.results })
    }

    render() {
        console.log('render', this.state.images);

        return <React.Fragment>
            <div className="modal-search-image">
                <h1> Search For the perfect Image</h1>
                <input onChange={this.handleSearch} />


                {this.state.images ? <div className="images-search-container">
                    {/* {this.state.images.map(img => { img.urls.thumb })} */}
                </div>
                    : ''}
            </div>

        </React.Fragment>

    }
}

export default SearchImage