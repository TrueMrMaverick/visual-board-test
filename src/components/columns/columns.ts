import styles from './columns.module.scss';
import {numberOfColumns} from "../../utils/constants";
import {VoidComponent} from "../../types/common";


export const Columns: VoidComponent<HTMLDivElement> = () => {
  const columns = document.createElement('div');
  columns.className = styles.columns;

  for (let i = 0; i < numberOfColumns; i++) {
    const column = document.createElement('div');
    column.className = styles.column;
    columns.appendChild(column);
  }

  return columns;
}
