import debug from 'debug';
import config from 'config/environment';

const appName = config.get('appName');

export default {
  error: debug(`${appName}:error`),
  debug: debug(`${appName}:debug`),
  info: debug(`${appName}:info`)
};
