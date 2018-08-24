module.exports = {
  port: 3100,

  sentry: {
    dsn: ''
  },

  loglevel: 'debug', // debug, info, warning, error, fatal

  sites: {
    'www.example.com': {
      protocol: 'https:',

      origin: 'https://bucket-foo.somecloud.com',
      originHeaders: {
        Host: 'www.example.com'
      },

      kasha: 'http://localhost:3000',
      kashaHeaders: {
        token: 'aaaaaaaa'
      },

      assetExtensions: ['.js', '.css', '.jpg', '.jpeg', '.png', '.gif', '.ico', '.eot', '.ttf', '.woff', '.woff2', '.svg', '.svgz'],

      virtualPathMapping: [
        ['/:project/*', '/$1/index.html'],
        ['*', '/index.html']
      ]
    },

    'localhost:3100': {
      protocol: 'http:',
      origin: 'http://localhost:8080',
      kasha: 'http://localhost:3000',

      assetExtensions: ['.js', '.css', '.jpg', '.jpeg', '.png', '.gif', '.ico', '.eot', '.ttf', '.woff', '.woff2', '.svg', '.svgz'],

      virtualPathMapping: [
        ['*', '/index.html']
      ]
    }
  }

  // store sites in mongodb instead of using 'sites' config
  /*
  sitesStore: {
    url: 'mongodb://localhost:27017',
    database: 'kasha',
    options: {
      poolSize: 10
    }
  }
  */
}
