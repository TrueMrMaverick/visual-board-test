import {VBConfig} from "../types/config";
import {numberOfColumns} from "./constants";

/**
 * This function is used fill config with empty items.
 * @param config
 */
export const parseConfig = (config: VBConfig): VBConfig => {
  for (const vbRow of config) {
    // Fill gaps in the row with empty items
    for (let i = 0; i < vbRow.items.length; i++) {
      const item = vbRow.items[i];
      if (i > 0) {
        const prevItem = vbRow.items[i - 1];
        if (item.start - prevItem.end > 0) {
          vbRow.items.splice(i, 0, {
            id: `${item.id}-empty`,
            name: '',
            start: prevItem.end,
            end: item.start,
          });
        }
      }

      if (i === 0) {
        if (item.start > 1) {
          vbRow.items.splice(i, 0, {
            id: `${item.id}-empty`,
            name: '',
            start: 0,
            end: item.start,
          });
        }
      }

      if (i === vbRow.items.length - 1) {
        if (item.end < numberOfColumns) {
          vbRow.items.splice(i + 1, 0, {
            id: `${item.id}-empty`,
            name: '',
            start: item.end,
            end: numberOfColumns,
          });
        }
      }
    }

  }

  return config;
}