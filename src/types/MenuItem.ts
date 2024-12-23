export type MenuItem = {
    label: string;
    children?: MenuItem[];
    target?: string;
    to: string;
};
