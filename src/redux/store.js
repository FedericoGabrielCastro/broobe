import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import { wacherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleware.run(wacherSaga);
