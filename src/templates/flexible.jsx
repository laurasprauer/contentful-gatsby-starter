import React from 'react';
import { graphql } from 'gatsby';

import { Button } from '../components/button/component';

class FlexibleTemplate extends React.Component {
  render() {
    const data = this.props.data.contentfulPage;
    return (
      <div>
        Hello {data.title}
        <Button>What</Button>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query Page($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      slug
      title
    }
  }
`;

export default FlexibleTemplate;
