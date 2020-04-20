/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.caseylucas.second.v1.Widget', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.caseylucas.second.v1.Widget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caseylucas.second.v1.Widget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.caseylucas.second.v1.Widget.displayName = 'proto.caseylucas.second.v1.Widget';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.caseylucas.second.v1.Widget.prototype.toObject = function(opt_includeInstance) {
  return proto.caseylucas.second.v1.Widget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caseylucas.second.v1.Widget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.second.v1.Widget.toObject = function(includeInstance, msg) {
  var f, obj = {
    widgetId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAtTime: (f = msg.getCreatedAtTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAtTime: (f = msg.getUpdatedAtTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.caseylucas.second.v1.Widget}
 */
proto.caseylucas.second.v1.Widget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caseylucas.second.v1.Widget;
  return proto.caseylucas.second.v1.Widget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caseylucas.second.v1.Widget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caseylucas.second.v1.Widget}
 */
proto.caseylucas.second.v1.Widget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWidgetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAtTime(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAtTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.caseylucas.second.v1.Widget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caseylucas.second.v1.Widget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caseylucas.second.v1.Widget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.second.v1.Widget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidgetId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAtTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAtTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 widget_id = 1;
 * @return {number}
 */
proto.caseylucas.second.v1.Widget.prototype.getWidgetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.caseylucas.second.v1.Widget.prototype.setWidgetId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.caseylucas.second.v1.Widget.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.caseylucas.second.v1.Widget.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caseylucas.second.v1.Widget.prototype.getCreatedAtTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caseylucas.second.v1.Widget.prototype.setCreatedAtTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.caseylucas.second.v1.Widget.prototype.clearCreatedAtTime = function() {
  this.setCreatedAtTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.caseylucas.second.v1.Widget.prototype.hasCreatedAtTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.caseylucas.second.v1.Widget.prototype.getUpdatedAtTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.caseylucas.second.v1.Widget.prototype.setUpdatedAtTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.caseylucas.second.v1.Widget.prototype.clearUpdatedAtTime = function() {
  this.setUpdatedAtTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.caseylucas.second.v1.Widget.prototype.hasUpdatedAtTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.caseylucas.second.v1);
