import React from "react";

import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Col,
  Button,
  Input,
  FormText,
  Spinner
} from "reactstrap";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";

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
              <Formik
                initialValues={{ email: "", password: "" }}
                validate={values => {
                  let errors = {};
                  // conditions for the validation
                  console.log(values);
                  if (!values.email) {
                    errors.email = "email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Email is invalid";
                  }

                  if (!values.password) {
                    errors.password = "password is required";
                  }
                  console.log("Errors ", errors);

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // What to do when the form is submitted
                  setSubmitting(false);
                  //   console.log(actions);
                  // Now, making an api request here
                }}
                render={({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting
                }) => {
                  return (
                    <Form onSubmit={handleSubmit}>
                      <FormGroup row>
                        <Label for="email" sm={4}>
                          Email
                        </Label>
                        <Col sm={8}>
                          <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="email-id here"
                            invalid={errors && errors.email}
                            tag={Field}
                          />
                          <div className="invalid-feedback">
                            {errors && touched.email && errors.email}
                          </div>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label for="password" sm={4}>
                          Password
                        </Label>
                        <Col sm={8}>
                          <Input
                            type="password"
                            name="password"
                            id="password"
                            tag={Field}
                            placeholder="password here"
                            invalid={errors && errors.password}
                          />
                          <div className="invalid-feedback">
                            {errors && touched.password && errors.password}
                          </div>
                        </Col>
                      </FormGroup>
                      <Col sm={12} className="login-button">
                        <Button color="success" onClick={handleSubmit}>
                          {isSubmitting ? (
                            <Spinner size="sm" color="light" />
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </Col>
                      <Col sm={12}>
                        New User? <Link to="/register">Register here</Link>
                      </Col>
                    </Form>
                  );
                }}
              />
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  }
}

export default Login;
