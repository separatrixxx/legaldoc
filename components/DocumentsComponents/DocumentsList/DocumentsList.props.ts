import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Document } from '../../../interfaces/document.interface';


export interface DocumentsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	documents: Document[],
	sort: 'low' | 'high',
}
