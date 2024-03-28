import { Document } from "./document.interface";

export interface User {
    id: number,
	firstName: string,
    lastName: string,
    email: string,
    documents: Document[],
}
