export const getDebugInfo = () => {
  // eslint-disable-next-line no-console
  console.debug('Build Version:', REACT_APP_BUILD_VERSION);
  // eslint-disable-next-line no-console
  console.debug('Build Date:', REACT_APP_BUILD_DATE);
  // eslint-disable-next-line no-console
  console.debug('Build Hash:', REACT_APP_BUILD_HASH);
  // eslint-disable-next-line no-console
  console.debug('-------------------------');
  // eslint-disable-next-line no-console
  console.debug('API URL:', process.env.REACT_APP_API_URL);
  // eslint-disable-next-line no-console
  console.debug('Site URL:', process.env.REACT_APP_SITE_URL);
  // eslint-disable-next-line no-console
  console.debug('Public URL:', process.env.REACT_APP_PUBLIC_URL);
  // eslint-disable-next-line no-console
  console.debug('Use Mocks:', process.env.REACT_APP_USE_MOCKS);
};
