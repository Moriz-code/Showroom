import React, { Component } from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp(props) {
  console.log(props);
  
  const { enqueueSnackbar } = useSnackbar();
  const {item,msg} = props
  
  item && handleClickVariant("success")

  function handleClickVariant(variant) {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${msg}`, { variant })
  };


  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default class IntegrationNotistack extends Component {

  render() {

    return (
      <SnackbarProvider item={this.props.item} msg={this.props.msg}  maxSnack={1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MyApp item={this.props.item} msg={this.props.msg} ></MyApp> />
    </SnackbarProvider>
    );
  }

}

