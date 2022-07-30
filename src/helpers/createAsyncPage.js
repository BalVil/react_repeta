import { lazy } from 'react';

export const createAsyncPage = componentName => {
  return lazy(() => {
    return import(`views/${componentName}`).then(module => {
      return { ...module, default: module[componentName] };
    });
  });
};
