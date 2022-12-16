import styles from './row-container.module.scss';
import {Component} from "../../types/common";
import {VBConfig} from "../../types/config";
import {VBItem} from "../vb-item/vb-item";
import {RowDivider} from "../row-divider/row-divider";
import {createEffect} from "solid-js";
import {EmptyItem} from "../empty-item/empty-item";

interface Props {
  vbConfig: VBConfig;
  onRowSizeChange?: (index: number, height: number) => void;
}

export const RowContainer: Component<HTMLDivElement, Props> = (props) => {
  const rowContainer = document.createElement('div');
  rowContainer.className = styles.container;


  for (let i = 0; i < props.vbConfig.length; i++) {
    const row = props.vbConfig[i];

    const rowElement = document.createElement('div');
    rowElement.className = styles.row;

    // createEffect is used to update the height of the row when the height of the row changes.
    // Effect subscribe to the reactive variable row.height and will be called when the value of row.height changes.
    // https://www.solidjs.com/docs/latest/api#createeffect
    createEffect(() => {
      rowElement.style.height = `${row.height}px`;
    });

    for (const item of row.items) {
      if (item.id.endsWith('empty')) {
        rowElement.appendChild(EmptyItem({
          get vbItem() {
            return item;
          },
          onClick: () => {
            console.log('empty item clicked');
          }
        }));
      } else {
        const itemElement = VBItem({
          get vbItem() {
            return item;
          }
        });
        rowElement.appendChild(itemElement);
      }
    }

    rowContainer.appendChild(rowElement);

    rowContainer.appendChild(RowDivider({
      onResizeUp: (delta) => {
        props.onRowSizeChange?.(i, row.height - delta);
      },
      onResizeDown: (delta) => {
        props.onRowSizeChange?.(i, row.height + delta);
      }
    }));

  }

  return rowContainer;
}