const {Schema, model} = require("mongoose");

class DatabaseModel {
	static create({name, collectionName}, fields) {
		const schema = new Schema(fields, {
			collection: collectionName,
			toJSON: {
				/* eslint-disable no-param-reassign */
				transform(_, ret) {
					ret.id = ret._id;
					delete ret._id;
					delete ret.__v;
				}
			}
		});

		return model(name, schema);
	}
}

module.exports = DatabaseModel;
