import React from "react";
import { connect } from "react-redux";
import { getPost } from "../actions";
import { getCharacters } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.getPost(5);
    this.props.getCharacters();
    console.log(this.props.post);
  }
  render() {
    return <div>Post List did asdf</div>;
  }
}

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { getPost, getCharacters })(PostList);
