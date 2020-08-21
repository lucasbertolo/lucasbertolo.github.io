import React from 'react';

export const withBacklinks = (tool, Component) => {
  return () => {
    const item = generateLink(tool);

    return <Component src={item} label={tool} />;
  };
};

function generateLink(name) {
  switch (name) {
    case 'react':
      return 'https://reactjs.org/';
    case 'node':
      return 'https://nodejs.org/en/';
    case 'next':
      return 'https://nextjs.org/';
    case 'native':
      return 'https://reactnative.dev/';
    case 'gatsby':
      return 'https://www.gatsbyjs.org/';
    case 'graphql':
      return 'https://graphql.org/';
    case 'realm':
      return 'https://realm.io/';
    case 'mysql':
      return 'https://www.mysql.com/';
    case 'postgres':
      return 'https://www.postgresql.org/';
    case 'javascript':
      return 'https://www.javascript.com/';
    case 'sass':
      return 'https://sass-lang.com/';
    case 'html5':
      return 'https://www.w3schools.com/html/';
    case 'dotnet':
      return 'https://dotnet.microsoft.com/';
    case 'sql':
      return 'https://www.w3schools.com/sql/';
    case 'git':
      return 'https://git-scm.com/';
    case 'csharp':
      return 'https://docs.microsoft.com/en-us/dotnet/csharp/';
    case 'linq':
      return 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/';
    case 'pwa':
      return 'https://web.dev/progressive-web-apps/';
    case 'aws':
      return 'https://aws.amazon.com/';
    case 'heroku':
      return 'https://www.heroku.com/';
    case 'jquery':
      return 'https://jquery.com/';
    case 'vanilla':
      return 'https://stackoverflow.com/questions/20435653/what-is-vanillajs';

    default:
      return null;
  }
}
