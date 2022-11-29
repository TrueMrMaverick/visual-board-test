import styles from './empty-item.module.scss';
import {Component} from "../../types/common";
import plusSvg from '../../assets/plus-circle.svg?raw';
import {VbItem} from "../../types/config";

interface Props {
  vbItem: VbItem;
  onClick?: () => void;
}

export const EmptyItem: Component<HTMLDivElement, Props> = (props) => {
  const emptyItem = document.createElement('div');
  emptyItem.className = styles.container;
  emptyItem.style.gridColumn = `${props.vbItem.start + 1} / ${props.vbItem.end + 1}`;

  if (props.onClick) {
    emptyItem.addEventListener('click', props.onClick);
  }

  emptyItem.innerHTML = plusSvg;

  return emptyItem;
}