import config from '../config';

interface IError {
  message: string;
  success: false;
  error: string;
  stack?: string;
}

const createGenericErrRes = (err: Error): IError => {
  return {
    message: err.message || 'An error occurred',
    success: false,
    error: err.name || 'Error',
    stack: config.node_env === 'development' ? err.stack : undefined,
  };
};

export default createGenericErrRes;
