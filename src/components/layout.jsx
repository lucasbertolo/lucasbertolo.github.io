import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import cardImg from '../assets/images/logos/logo.png';
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

  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
            keywords
            siteUrl
          }
        }
      }
    `,
  );

  const image = `${site.siteMetadata.siteUrl}${cardImg}`;
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `pt`,
        }}
        title={site.siteMetadata.title}
        link={[
          {
            rel: 'canonical',
            href: site.siteMetadata.siteUrl,
          },
        ]}
        meta={[
          {
            name: 'description',
            content: site.siteMetadata.description,
          },
          {
            name: 'author',
            content: site.siteMetadata.author,
          },
          {
            name: 'keywords',
            content: site.siteMetadata.keywords.join(','),
          },
          {
            name: 'google-site-verification',
            content: '8mZIUi4SH0aScOPDSJKJq7N5jEIqha6Vhgi2hc5ADcM',
          },
          {
            property: `og:description`,
            content: site.siteMetadata.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: site.siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: site.siteMetadata.description,
          },
        ].concat(
          image
            ? [
                {
                  property: 'og:image',
                  content: image,
                },
                {
                  property: 'og:image:width',
                  content: 240,
                },
                {
                  property: 'og:image:height',
                  content: 240,
                },
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary',
                },
              ],
        )}
      />
      {content}
    </>
  );
};

export default Layout;
