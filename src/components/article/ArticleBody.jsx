import React from 'react';
import PropTypes from 'prop-types';

function ArticleBody(props) {
  ArticleBody.propTypes = {
    content: PropTypes.string.isRequired,
  };
  const { content } = props;

  // eslint-disable-next-line no-useless-escape
  const cleanContent = content.replace(/<h3 class=\"heading\">Keep up with everything Wirecutter from your inbox([\s\S]*?)ll be hearing from us soon.<\/p>/g, '');

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
    </div>
  );
}

export default ArticleBody;
