import { getRenderFn } from './internalTableModule.js';

const renderTable = async (baseUrl: string, placeholderEl: HTMLElement) => {
  const renderFn = await getRenderFn(baseUrl);
  return renderFn(placeholderEl);
};

export { renderTable };
