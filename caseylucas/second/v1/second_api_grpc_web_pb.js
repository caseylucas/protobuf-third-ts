/**
 * @fileoverview gRPC-Web generated client stub for caseylucas.second.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var caseylucas_second_v1_widget_pb = require('../../../caseylucas/second/v1/widget_pb.js')
const proto = {};
proto.caseylucas = {};
proto.caseylucas.second = {};
proto.caseylucas.second.v1 = require('./second_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.caseylucas.second.v1.SecondAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.caseylucas.second.v1.SecondAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.caseylucas.second.v1.AddWidgetRequest,
 *   !proto.caseylucas.second.v1.AddWidgetResponse>}
 */
const methodInfo_SecondAPI_AddWidget = new grpc.web.AbstractClientBase.MethodInfo(
  proto.caseylucas.second.v1.AddWidgetResponse,
  /** @param {!proto.caseylucas.second.v1.AddWidgetRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.caseylucas.second.v1.AddWidgetResponse.deserializeBinary
);


/**
 * @param {!proto.caseylucas.second.v1.AddWidgetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.caseylucas.second.v1.AddWidgetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.caseylucas.second.v1.AddWidgetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.caseylucas.second.v1.SecondAPIClient.prototype.addWidget =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/caseylucas.second.v1.SecondAPI/AddWidget',
      request,
      metadata || {},
      methodInfo_SecondAPI_AddWidget,
      callback);
};


/**
 * @param {!proto.caseylucas.second.v1.AddWidgetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.caseylucas.second.v1.AddWidgetResponse>}
 *     A native promise that resolves to the response
 */
proto.caseylucas.second.v1.SecondAPIPromiseClient.prototype.addWidget =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/caseylucas.second.v1.SecondAPI/AddWidget',
      request,
      metadata || {},
      methodInfo_SecondAPI_AddWidget);
};


module.exports = proto.caseylucas.second.v1;

