import 'reflect-metadata';
import { ApiServer } from './server';

const server = new ApiServer();
// +processor.. casts the string port to an int
server.start(+process.env.PORT || 8080);
