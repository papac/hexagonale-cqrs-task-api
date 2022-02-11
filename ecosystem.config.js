module.exports = {
  apps: [
    {
      name: 'app-cqrs',
      script: './dist/main.js',
      env: {
        NODE_ENV: 'development',
        PORT: 8088,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8088,
      },
    },
  ],
};
