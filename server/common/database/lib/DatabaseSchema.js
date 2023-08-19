import {Schema} from "mongoose";

class DatabaseSchema extends Schema {
	constructor(fields, {collection}) {
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
