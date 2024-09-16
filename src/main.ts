import server from './server/server';
import { appConfig } from './common';

server.listen(appConfig.port, () => {
  console.log(`it's alive on http://localhost:${appConfig.port}`);
});
