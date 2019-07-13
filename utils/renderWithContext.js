import React from "react";

export const connect = Component => {
  return AppContext => {
    return () => {
      return (
        <AppContext.Consumer>
          {context => <Component {...context} />}
        </AppContext.Consumer>
      );
    };
  };
};
