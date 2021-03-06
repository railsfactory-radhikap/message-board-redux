import React from "react";

class PostList extends React.Component {
  handleDelete = post => {
    this.props.deletePost(post);
  };

  render() {
    if (!this.props.posts.length > 0) {
      return "no items found";
    }

    return (
      <ul className="list-group">
        {this.props.posts.map(post => {
          return (
            <div key={post} className="card mt-1">
              <div className="card-body">
                <span className="ml-2" role="img" aria-label="">
                  👍
                </span>
                <span className="mr-4 upvotes">1</span>
                {post}
                <span
                  onClick={this.handleDelete.bind(this, post)}
                  className="float-right"
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default PostList;
