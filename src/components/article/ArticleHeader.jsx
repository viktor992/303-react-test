import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ArticleHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.getServerData();
  }

  async getServerData() {
    const { author } = this.props;
    try {
      this.setState({
        loading: true,
      });
      const data = await axios.get(author);
      this.setState({
        data: data.data,
        loading: false,
      });
    } catch (e) {
      this.setState({
        data: null,
        error: true,
        loading: false,
      });
    }
  }

  render() {
    const { data, error, loading } = this.state;
    const { title, date } = this.props;
    const formattedDate = new Date(date).toLocaleDateString();
    return (
      <React.Fragment>
        <div style={{ textAlign: 'center' }}>
          <span className="card-title">{title}</span>
          { loading && <p> Loading... </p>}
          { !loading && !error && (
            <h6>{`${data.name} - ${formattedDate}`}</h6>
          ) }
          { !loading && error && <h6>{`${formattedDate}`}</h6> }
        </div>
      </React.Fragment>
    );
  }
}

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  date: PropTypes.string.isRequired,
};

ArticleHeader.defaultProps = {
  author: null,
};

export default ArticleHeader;
