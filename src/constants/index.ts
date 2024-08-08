export * from './routes';

export const DOMAIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NODE_ENV === 'docker'
    ? process.env.DOMAIN
    : 'https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com';
