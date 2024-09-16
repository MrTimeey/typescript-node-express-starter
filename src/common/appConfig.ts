import * as dotenv from 'dotenv';
import { ApplicationConfig } from '../types';

// Ignore missing .env file as long as all values have defaults
dotenv.config();

export const getPort = () => parseInt(process.env.PORT as string) || 3000;

export const appConfig: ApplicationConfig = {
  port: getPort()
};
