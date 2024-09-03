export interface Menu {
    id: number;
    label: string;
    link?: string;
    icon?: string;
    items?: Menu[];
}