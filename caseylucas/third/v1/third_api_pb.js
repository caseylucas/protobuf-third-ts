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

var caseylucas_second_v1_widget_pb = require('../../../caseylucas/second/v1/widget_pb.js');
goog.exportSymbol('proto.caseylucas.third.v1.GetPopularWidgetsRequest', null, global);
goog.exportSymbol('proto.caseylucas.third.v1.GetPopularWidgetsResponse', null, global);

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
proto.caseylucas.third.v1.GetPopularWidgetsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.caseylucas.third.v1.GetPopularWidgetsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.caseylucas.third.v1.GetPopularWidgetsRequest.displayName = 'proto.caseylucas.third.v1.GetPopularWidgetsRequest';
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
proto.caseylucas.third.v1.GetPopularWidgetsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.caseylucas.third.v1.GetPopularWidgetsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.third.v1.GetPopularWidgetsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.caseylucas.third.v1.GetPopularWidgetsRequest}
 */
proto.caseylucas.third.v1.GetPopularWidgetsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caseylucas.third.v1.GetPopularWidgetsRequest;
  return proto.caseylucas.third.v1.GetPopularWidgetsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caseylucas.third.v1.GetPopularWidgetsRequest}
 */
proto.caseylucas.third.v1.GetPopularWidgetsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.caseylucas.third.v1.GetPopularWidgetsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caseylucas.third.v1.GetPopularWidgetsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.third.v1.GetPopularWidgetsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



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
proto.caseylucas.third.v1.GetPopularWidgetsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.caseylucas.third.v1.GetPopularWidgetsResponse.repeatedFields_, null);
};
goog.inherits(proto.caseylucas.third.v1.GetPopularWidgetsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.caseylucas.third.v1.GetPopularWidgetsResponse.displayName = 'proto.caseylucas.third.v1.GetPopularWidgetsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.repeatedFields_ = [1];



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
proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.caseylucas.third.v1.GetPopularWidgetsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    widgetsList: jspb.Message.toObjectList(msg.getWidgetsList(),
    caseylucas_second_v1_widget_pb.Widget.toObject, includeInstance)
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
 * @return {!proto.caseylucas.third.v1.GetPopularWidgetsResponse}
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.caseylucas.third.v1.GetPopularWidgetsResponse;
  return proto.caseylucas.third.v1.GetPopularWidgetsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.caseylucas.third.v1.GetPopularWidgetsResponse}
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new caseylucas_second_v1_widget_pb.Widget;
      reader.readMessage(value,caseylucas_second_v1_widget_pb.Widget.deserializeBinaryFromReader);
      msg.addWidgets(value);
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
proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.caseylucas.third.v1.GetPopularWidgetsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWidgetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      caseylucas_second_v1_widget_pb.Widget.serializeBinaryToWriter
    );
  }
};


/**
 * repeated caseylucas.second.v1.Widget widgets = 1;
 * @return {!Array<!proto.caseylucas.second.v1.Widget>}
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.getWidgetsList = function() {
  return /** @type{!Array<!proto.caseylucas.second.v1.Widget>} */ (
    jspb.Message.getRepeatedWrapperField(this, caseylucas_second_v1_widget_pb.Widget, 1));
};


/** @param {!Array<!proto.caseylucas.second.v1.Widget>} value */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.setWidgetsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.caseylucas.second.v1.Widget=} opt_value
 * @param {number=} opt_index
 * @return {!proto.caseylucas.second.v1.Widget}
 */
proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.addWidgets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.caseylucas.second.v1.Widget, opt_index);
};


proto.caseylucas.third.v1.GetPopularWidgetsResponse.prototype.clearWidgetsList = function() {
  this.setWidgetsList([]);
};


goog.object.extend(exports, proto.caseylucas.third.v1);
