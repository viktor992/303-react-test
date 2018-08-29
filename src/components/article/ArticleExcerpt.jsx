import React from 'react';
import PropTypes from 'prop-types';

function ArticleExcerpt(props) {
  ArticleExcerpt.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  const {
    title, excerpt, onClick,
  } = props;

  return (
    <div role="presentation" onClick={onClick} style={{ cursor: 'pointer' }}>
      <span className="card-title">{title}</span>
      <p>
        <i dangerouslySetInnerHTML={{ __html: excerpt }} />
      </p>

    </div>
  );
}

export default ArticleExcerpt;
