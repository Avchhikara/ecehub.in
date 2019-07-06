import React from "react";

import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AddArticleHome from "./../AddArticleHome";
import Login from "./../Login";

class AddArticleRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  render() {
    if (this.state.isMounted) {
      return (
        <div>
          <HashRouter baseURL="/add">
            <Switch>
              <Route path="/" exact component={AddArticleHome} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
      return <div>Some component showing loading..</div>;
    }
  }
}
export default AddArticleRouter;
