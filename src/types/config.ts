
export interface VbItem {
  id: string;
  name: string;

  start: number;
  end: number;
}

export interface VbRow {
  index: number;
  height: number;
  items: VbItem[];
}

export type VBConfig = VbRow[];
