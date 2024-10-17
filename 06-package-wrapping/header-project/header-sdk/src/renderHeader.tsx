import { getRenderFn } from './internalHeaderModule.js';

const renderHeader = async (baseUrl: string, placeholderEl: HTMLElement) => {
  const renderFn = await getRenderFn(baseUrl);
  return renderFn(placeholderEl);
};

export { renderHeader };
