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

  const keywordContent =
    'curriculo, resume, portfolio, webdeveloper, react, javascript, web, developer, desenvolvedor, Piracicaba, programador, websites';

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
                content: 'Desenvolvedor web - portfolio de projetos',
              },
              {
                name: 'keywords',
                content: keywordContent,
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
            <meta
              name="description"
              content="Desenvolvedor web - Portfolio de projetos Javascript/React"
            />
            <meta name="keywords" content={keywordContent} />
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
