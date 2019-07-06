import React from "react";

import { Row, Card, CardBody, CardTitle } from "reactstrap";

import "./style.scss";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: {
        message: "",
        status: false
      }
    };
  }

  render() {
    return (
      <div className="add-login-wrapper container">
        <Row>
          <Card>
            <CardBody>
              <CardTitle>
                <h4 className="text-success">Login</h4>
              </CardTitle>
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Login;
