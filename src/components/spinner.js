import React from "react";

function spinner({message}){ //or you can pass just "props" as argument
    return(
          <div className="ui active dimmer">
            <div className="ui text loader">{message}</div>  {/* we can write props.message apart from {message} */}
          </div>
    )
}

spinner.defaultProps = {
    message: 'Loading..'
}

export default spinner;