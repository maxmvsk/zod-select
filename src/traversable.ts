import {
	ZodTypeAny,
	ZodTuple,
	ZodUnion,
	ZodArray,
	ZodRecord,
	AnyZodObject,
} from "zod";

export function isZodTuple(schema: ZodTypeAny): schema is ZodTuple<any> {
	return "items" in schema;
}

export function isZodUnion(schema: ZodTypeAny): schema is ZodUnion<any> {
	return "options" in schema;
}

export function isZodArrayOrRecord(schema: ZodTypeAny): schema is ZodArray<any> | ZodRecord<any> {
	return "element" in schema;
}

export function isZodObject(schema: ZodTypeAny): schema is AnyZodObject {
	return "shape" in schema;
}
