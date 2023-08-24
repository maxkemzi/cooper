import {Document, Types} from "mongoose";

// // Category
interface Category {
	name: string;
}

interface CategoryDocument extends Category, Document {}

// // User
interface User {
	favoriteProjects?: ProjectDocument["_id"][];
	email: string;
	username: string;
	password: string;
	avatar?: string | null;
	description?: string | null;
	location?: string | null;
	activationLink?: string | null;
	isActivated?: boolean;
	createdDate?: string;
}

interface UserDocument extends User, Document {}

interface UserPopulatedDocument extends UserDocument {
	favoriteProjects: ProjectDocument[];
}

// // Project
type WorkType = "onsite" | "remote";
type Visibility = "public" | "private";

interface Project {
	creator: Types.ObjectId | UserDocument;
	categories: Types.ObjectId[] | CategoryDocument[];
	title: string;
	description: string;
	workType?: WorkType;
	visibility?: Visibility;
	budget?: number;
	createdDate?: Date;
}

interface ProjectDocument extends Project, Document {}

interface ProjectPopulatedDocument extends ProjectDocument {
	creator: UserDocument;
	categories: CategoryDocument[];
}

// // Refresh token
interface RefreshToken {
	user: Types.ObjectId | UserDocument;
	token: string;
}

interface RefreshTokenDocument extends RefreshToken, Document {}

interface RefreshTokenPopulatedDocument extends RefreshTokenDocument {
	user: UserDocument;
}

export type {
	Category,
	CategoryDocument,
	User,
	UserDocument,
	UserPopulatedDocument,
	Project,
	ProjectDocument,
	ProjectPopulatedDocument,
	RefreshToken,
	RefreshTokenDocument,
	RefreshTokenPopulatedDocument
};
