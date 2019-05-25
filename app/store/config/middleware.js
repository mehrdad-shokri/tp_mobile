/* eslint-disable import/no-extraneous-dependencies,global-require */
import createSagaMiddleware from 'redux-saga';


export function getDevToolsMiddlewares() {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant');
    middlewares.push(reduxImmutableStateInvariant.default());
  }
  return middlewares;
}
export function getSagaMiddleware() {
  return createSagaMiddleware();
}
