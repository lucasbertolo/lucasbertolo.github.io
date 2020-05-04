import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Portfolio de desenvolvedor web',
              },
              {
                name: 'keywords',
                content:
                  'curriculo, portfolio, webdeveloper, Piracicaba, programador, sites',
              },
              {
                name: 'google-site-verification',
                content: '8mZIUi4SH0aScOPDSJKJq7N5jEIqha6Vhgi2hc5ADcM',
              },
            ]}
          >
            <meta
              name="google-site-verification"
              content="8mZIUi4SH0aScOPDSJKJq7N5jEIqha6Vhgi2hc5ADcM"
            />
            <meta name="description" content="Portfolio de desenvolvedor web" />
            <meta
              name="keywords"
              content="curriculo, portfolio, webdeveloper, Piracicaba, programador, sites"
            />
            <meta name="author" content="Lucas Bertolo" />
            <html lang="pt" />
          </Helmet>
          {content}
        </>
      )}
    />
  );
};

export default Layout;
