import * as dotenv from 'dotenv';
import { ApplicationConfig } from '../types';

const config = dotenv.config();

if (config.error) {
    throw config.error;
}

const appConfig: ApplicationConfig = {
    port: parseInt(process.env.PORT as string) || 3000,
};

export default appConfig;
