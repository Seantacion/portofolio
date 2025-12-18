// types/dock.types.ts

import { ReactNode } from 'react';

export interface DockItem {
    icon: ReactNode;
    label: string;
    onClick: () => void;
}