import React from 'react';
import PropTypes from 'prop-types';

function ArticleBody(props) {
  ArticleBody.propTypes = {
    content: PropTypes.string.isRequired,
  };
  const { content } = props;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default ArticleBody;
