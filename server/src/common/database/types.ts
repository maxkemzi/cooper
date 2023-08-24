interface PaginationOptions {
	sort?: string;
	limit?: number;
	offset?: number;
	search?: string;
}

interface ManyDataReturn<T> {
	data: T[];
	totalCount: number;
}

export type {PaginationOptions, ManyDataReturn};
