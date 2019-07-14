import React from "react";

import { Row, Col } from "reactstrap";
import AppContext from "./../AppProvider/AppContext";
import { connect } from "./../../utils/renderWithContext";

import "./Dashboard.style.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {
        status: false,
        message: ""
      }
    };
  }

  componentDidMount() {
    console.log(this.props);
    // Now, checking whether the credentials are  present or not
    if (!this.props.user.token) {
      this.props.history.push("/login?m=Please login first!");
      //   window.location.href = "/add#/login";
    }
  }

  render() {
    return (
      <div className="dashboard-wrapper container">
        <Row>
          <Col sm={4}>Here will be the options</Col>
          <Col sm={8}>Here will be the content</Col>
        </Row>
      </div>
    );
  }
}

// const Render = Dashboard => {
//   return AppContext => {
//     return () => {
//       return (
//         <AppContext.Consumer>
//           {context => <Dashboard {...context} />}
//         </AppContext.Consumer>
//       );
//     };
//   };
// };

export default connect(Dashboard)(AppContext);
