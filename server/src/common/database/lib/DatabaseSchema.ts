import {
	Schema,
	SchemaDefinition,
	SchemaDefinitionType,
	SchemaOptions
} from "mongoose";

interface DatabaseSchemaOptions {
	collection: SchemaOptions["collection"];
}

class DatabaseSchema<T> extends Schema<T> {
	constructor(
		fields: SchemaDefinition<SchemaDefinitionType<T>>,
		{collection}: DatabaseSchemaOptions
	) {
		super(fields, {
			collection,
			toJSON: {
				/* eslint-disable no-param-reassign */
				transform(_, ret) {
					ret.id = ret._id;
					delete ret._id;
					delete ret.__v;
				}
			}
		});
	}
}

export default DatabaseSchema;
