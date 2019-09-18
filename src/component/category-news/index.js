import "./index.scss";
import React, { Component, Fragment } from "react";
import Category from "../category";
import CategoryNewsItem from "./category-news-item";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {Button} from 'antd';
import { requestGetNewsByCategory } from "../../actions/newsAction";


class CategoryNews extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const type = this.props.match.params.id;
    this.props.onGetNewsByCategory(type, 10);
  }
  // componentWillReceiveProps(nextProps) {
  //   window.scrollTo(0, 0);
  //   const type = nextProps.match.params.id;
  //   this.props.onGetNewsByCategory(type, 10);
  // }

  renderNewsByCategory = () => {
    return this.props.newsByCategory.map((news, index) => {
      return <CategoryNewsItem key={index} news={news} />;
    });
  };
  render() {
    return (
      <Fragment>
        <section className="category-news">
          <div className="container">
            <div className="news-container">
            {this.renderNewsByCategory()}
              <Button type="primary" className="loadmore-btn">LOAD MORE NEWS</Button>
            </div>
            <Category />
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsByCategory: state.newsByCategory
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onGetNewsByCategory: (type, limit) => {
      dispatch(requestGetNewsByCategory(type, limit));
    }
  };
};
export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryNews));
