import userModule from '../components/user/user.module.js';

export default (app) => {
  app.use('/users', userModule.router);
};
