
const loggerMiddleware = () => (next) => (action) => {
  console.log(action);
  return next(action);
}

export default loggerMiddleware;