import './style.scss'
import {Columns} from "./components/columns/columns";
import {getVbConfig} from "./utils/config";
import {RowContainer} from "./components/row-container/row-container";
import {createRoot} from "solid-js";
import {createStore} from "solid-js/store";
import {rowMinHeight} from "./utils/constants";
import {parseConfig} from "./utils/parseConfig";


// Root of the reactive system
createRoot(() => {
  const root = document.getElementById('app') as HTMLDivElement;

  const vbWrapper = document.createElement('div');
  vbWrapper.className = 'vb-wrapper';
  root.appendChild(vbWrapper);

  const vbContainer = document.createElement('div');
  vbContainer.className = 'vb-container';

  vbWrapper.appendChild(vbContainer);

  vbContainer.appendChild(Columns())

  // Create a reactive store
  // vbConfig is a proxy object with reactive properties
  // setVbConfig is a function that updates the reactive properties
  // https://www.solidjs.com/docs/latest/api#using-stores
  const [vbConfig, setVbConfig] = createStore(parseConfig(getVbConfig()));

  vbContainer.appendChild(RowContainer({
    get vbConfig() {
      return vbConfig;
    },
    onRowSizeChange: (index, height) => setVbConfig(index, 'height', Math.max(height, rowMinHeight))
  }));

  const rowContainer = document.createElement('div');
  rowContainer.className = 'row-container';
});

