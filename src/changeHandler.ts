import { PanelModel } from '@grafana/data';
import { DivPanelOptions } from './types';

export const divPanelChangedHandler = (
  panel: PanelModel<Partial<DivPanelOptions>> | any,
  prevPluginId: string,
  prevOptions: any
): Partial<DivPanelOptions> => {
  return prevOptions;
};

export const divPanelMigrationHandler = (
  panel: PanelModel<Partial<DivPanelOptions>> | any
): Partial<DivPanelOptions> => {
  return panel.options;
};
