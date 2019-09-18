import "./index.scss";
import React, { Component, Fragment } from "react";
import { Icon } from "antd";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class trending extends Component {

  renderLiTag = () => {
    return this.props.trendingNews.slice(0, 7).map((news, index) => {
      return (<li key={index}>
        <Link to={`/${news.slug}`}>
          {news.title}
          {/* The 23 Best Beauty Moments From the Fall 2016 Runways */}
        </Link>
      </li>)
    })
  }
  render() {
    return (
      <Fragment>
        <section className="trending">
          <div className="container">
            <div className="trending-tag">
              <Icon type="thunderbolt" className="trending-icon" />
              <span>TRENDING</span>
            </div>

            <ul className="trending-content">
              {this.renderLiTag()}

            </ul>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    trendingNews: state.trendingNews
  }
}
export default connect(mapStateToProps, null)(trending);
