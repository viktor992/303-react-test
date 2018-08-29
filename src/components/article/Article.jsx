import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleHeader from './ArticleHeader';
import ArticleBody from './ArticleBody';
import ArticleExcerpt from './ArticleExcerpt';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  render() {
    const { data } = this.props;
    const { clicked } = this.state;
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            {clicked ? (
              <div>
                <ArticleHeader
                  title={data.title.rendered}
                  // eslint-disable-next-line no-underscore-dangle
                  author={data._links.author[0].href}
                  date={data.date}
                />
                <ArticleBody content={data.content.rendered} />
              </div>
            ) : (
              <ArticleExcerpt
                title={data.title.rendered}
                excerpt={data.excerpt.rendered}
                onClick={() => this.setState(prevState => ({ clicked: !prevState.clicked }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Article;
