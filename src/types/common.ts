export type Component<R extends HTMLElement, Props> = (props: Props ) => R;
export type VoidComponent<R extends HTMLElement> = () => R;