import type { ReactNode } from 'react';

const ENTRY_POINT__TABLE = './Table';
const ENTRY_POINT__RENDER = './render';

interface TableModuleEntryPoints {
  [ENTRY_POINT__TABLE]: {
    Table: ReactNode;
  };
  [ENTRY_POINT__RENDER]: {
    renderV1(placeholderEl: HTMLElement): void;
  };
}

const importTableModule = async <EntryPoint extends keyof TableModuleEntryPoints>(
  baseUrl: string,
  entryPoint: EntryPoint,
): Promise<TableModuleEntryPoints[EntryPoint]> => {
  const moduleUrl = new URL('table-mfe/assets/remoteEntry-table.js', baseUrl);
  const tableRemoteEntry = await import(moduleUrl.toString());
  const entryPointModule = (await tableRemoteEntry.get(entryPoint))();
  return entryPointModule;
};

const tableModuleEntryPointCache = Object.create(null);

const getTableModule: typeof importTableModule = async (baseUrl, entryPoint) => {
  if (!Object.hasOwn(tableModuleEntryPointCache, baseUrl)) {
    tableModuleEntryPointCache[baseUrl] = {};
  }
  if (!Object.hasOwn(tableModuleEntryPointCache[baseUrl], entryPoint)) {
    tableModuleEntryPointCache[baseUrl][entryPoint] = await importTableModule(baseUrl, entryPoint);
  }
  return tableModuleEntryPointCache[baseUrl][entryPoint];
};

// Exposed API:

const prefetchTableModule = async (baseUrl: string) => {
  getTableModule(baseUrl, ENTRY_POINT__RENDER);
};

const getRenderFn = async (baseUrl: string) => {
  const renderEntryPoint = await getTableModule(baseUrl, ENTRY_POINT__RENDER);
  return renderEntryPoint.renderV1;
};

export { prefetchTableModule, getRenderFn };
