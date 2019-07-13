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
