import {Component} from "../../types/common";
import styles from './vb-item.module.scss';
import {VbItem} from "../../types/config";

interface Props {
  vbItem: VbItem;
}


export const VBItem: Component<HTMLDivElement, Props> = (props) => {
  const item = document.createElement('div');
  item.className = styles.container;
  item.style.gridColumn = `${props.vbItem.start + 1} / ${props.vbItem.end + 1}`;

  const span = document.createElement('span');
  span.innerText = props.vbItem.name;
  item.appendChild(span);

  return item;
}