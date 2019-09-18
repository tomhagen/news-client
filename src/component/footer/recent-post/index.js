import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import {apiUrl} from "../../../helpers/config";

// const apiUrl = apiUrl;

class RecentPost extends Component {
  render() {
    let { _id, title, images, slug } = this.props.news;
    return (
      <Fragment>
        <div className="recent-item">
          <div className="item-logo">
            <Link to={`/${slug}`}>
              <img
                alt="recent"
                src={`${apiUrl}/api/open?name=${images}`}
              />
            </Link>
          </div>
          <Link to={`/${slug}`} className="item-content">
            {title}
          </Link>
        </div>
      </Fragment>
    );
  }
}
export default RecentPost;
