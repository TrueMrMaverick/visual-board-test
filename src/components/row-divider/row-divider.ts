import {Component} from "../../types/common";
import styles from './row-divider.module.scss';
import {createEffect, createSignal, onCleanup} from "solid-js";

interface Props {
  onResizeUp?: (delta: number) => void;
  onResizeDown?: (delta: number) => void;
}

export const RowDivider: Component<HTMLDivElement, Props> = (props) => {
  const rowDivider = document.createElement('div');
  rowDivider.className = styles.container;

  const draggableZone = document.createElement('div');
  draggableZone.className = styles.draggableZone;

  let lastY: number | undefined = undefined;
  const onMouseMove = (e: MouseEvent) => {
    const delta = lastY !== undefined ? e.clientY - lastY : 0;
    if (delta > 0) {
      props.onResizeDown?.(delta);
    } else if (delta < 0) {
      props.onResizeUp?.(-delta);
    }
    lastY = e.clientY;
  };

  // Signals are reactive primitives.
  // They also can trigger effects.
  // When the value of the signal changes, effects that call isResizing will re-run.
  // https://www.solidjs.com/docs/latest/api#createsignal
  let [isResizing, setIsResizing] = createSignal(false);
  createEffect(() => {
    if (!isResizing()) return;

    rowDivider.classList.add(styles.isDragging);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', () => {
      setIsResizing(false);
    }, {once: true});

    onCleanup(() => {
      rowDivider.classList.remove(styles.isDragging);
      window.removeEventListener('mousemove', onMouseMove);
      lastY = undefined;
    });
  });

  draggableZone.addEventListener('mouseenter', () => {
    rowDivider.classList.add(styles.show);
  });
  draggableZone.addEventListener('mouseleave', () => {
    rowDivider.classList.remove(styles.show);
  });
  draggableZone.addEventListener('mousedown', () => {
    setIsResizing(true);
  });

  rowDivider.appendChild(draggableZone);
  return rowDivider;
}