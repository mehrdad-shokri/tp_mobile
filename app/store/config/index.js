import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import initialState from './initialState';
import { getSagaMiddleware, getDevToolsMiddlewares } from './middleware';
import rootSaga from './rootSaga';

export default function initialiseStore() {
  const sagaMiddleware = getSagaMiddleware();
  const devToolsMiddleware = getDevToolsMiddlewares();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, ...devToolsMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
