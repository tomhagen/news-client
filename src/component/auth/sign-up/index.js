import "./index.scss";
import React, { Component, Fragment } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Upload,
  message,
  Select
} from "antd";
import { connect } from "react-redux";
import { register } from "../../../actions/authAction";

const { Option } = Select;

const uploadProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      usertype: ""
    };
  }
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSelectUsertypeChange = usertype => {
    this.setState({
      usertype
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.register(this.state, this.props.history);
  };
  render() {
    const { email, password, password2, username } = this.props.error;

    return (
      <Fragment>
        <div className="section__signup">
          <div className="img__container" />
          <div className="signup__container">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <h3>Create an Account</h3>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                  name="email"
                  onChange={this.handleOnChange}
                />
                <span className="validate">{email ? email : ""}</span>
              </Form.Item>
              <Form.Item>
                <Input
                  min="5"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleOnChange}
                />
                <span className="validate">{password ? password : ""}</span>
              </Form.Item>
              <Form.Item>
                <Input
                  min="5"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Confirm Password"
                />
                <span className="validate">{password2 ? password2 : ""}</span>
              </Form.Item>
              <Form.Item>
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                  name="username"
                  onChange={this.handleOnChange}
                />
                <span className="validate">{username ? username : ""}</span>
              </Form.Item>
              <Form.Item>
                User Type:
                <Select
                  placeholder="Please select usertype"
                  name="usertype"
                  onChange={this.handleSelectUsertypeChange}
                >
                  <Option value="admin">Admin</Option>
                  <Option value="user">User</Option>
                </Select>
              </Form.Item>

              <Upload {...uploadProps}>
                <Button>
                  <Icon type="upload" /> Upload Avatar
                </Button>
              </Upload>

              <Form.Item>
                <Button
                  style={{ marginTop: "20px" }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign up
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { register }
)(SignUp);
