import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagsBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	tags: string[],
    sort: 'low' | 'high',
    setSort: (e: any) => void,
}
