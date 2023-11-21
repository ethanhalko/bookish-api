import config from '../knexfile';

type dbEnv = 'development' | 'production';

export function getKnexConfig(env: dbEnv = 'development') {
  return config[env];
}
