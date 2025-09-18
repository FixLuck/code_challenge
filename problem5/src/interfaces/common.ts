export interface Employee {
id?: number;
firstName: string;
lastName: string;
email: string;
phoneNumber: string;
createAt?: Date;
updateAt?: Date;
}


export interface EmployeeFilters {
firstName?: string;
lastName?: string;
email?: string;
phoneNumber?: string;
search?: string;
page?: number;
limit?: number;
}


export interface PaginatedResponse<T> {
data: T[];
total: number;
page: number;
limit: number;
totalPages: number;
}


export interface ApiResponse<T> {
success: boolean;
message: string;
data?: T;
error?: string;
}