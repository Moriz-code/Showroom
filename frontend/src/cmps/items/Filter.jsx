
import React, { Component } from 'react';
import { connect } from 'react-redux';


class Filter extends Component {

  onSelectFilter = (ev) => {
    // let filter = ev.target;
  }

  onChangeSortKey = (ev) => {
    //change sort
  }

  get currentFilter() {
    return this.props.currentFilter;
  }

  render() {
    return <React.Fragment>
      Price:
      <input type="range" name="points" min="0" max="10" />


{/* gender */}
Gender: 
      <input type="checkbox" name="gender" value="Women"/>
      <input type="checkbox" name="gender" value="Men"/>
      

      Brand: 
      <input type="checkbox" name="brand" value=""/>
      <input type="checkbox" name="brand" value=""/>
      <input type="checkbox" name="brand" value=""/>
      <input type="checkbox" name="brand" value=""/>





      {/* <form action="/action_page.php">
  <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
  <input type="checkbox" name="vehicle2" value="Car"> I have a car<br>
  <input type="checkbox" name="vehicle3" value="Boat" checked> I have a boat<br><br>
  <input type="submit" value="Submit">
</form> */}
    
  

    </React.Fragment>
            }
          
          }
          
          
const mapStateToProps = state => {
  return {
              items: state.items
          }
        }
        
const mapDispatchToProps = {

              filterBy,
              sortBy
              // loadItems
            }

            export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default function Filter() {
//   return <div>Filter</div>
// }

