import dva from 'dva';
import BaaS from 'minapp-sdk';
import './index.css';
import login from './models/login';
import all from './models/all';

// import createLoading from 'dva-loading';

BaaS.init('b74475f7389a8d7ead6c');

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use(createLoading(opts));

// 3. Model
app.model(require('./models/example').default);
app.model(login);
app.model(all);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
