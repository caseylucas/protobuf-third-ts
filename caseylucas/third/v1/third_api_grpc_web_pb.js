/**
 * @fileoverview gRPC-Web generated client stub for caseylucas.third.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var caseylucas_second_v1_widget_pb = require('../../../caseylucas/second/v1/widget_pb.js')
const proto = {};
proto.caseylucas = {};
proto.caseylucas.third = {};
proto.caseylucas.third.v1 = require('./third_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.caseylucas.third.v1.ThirdAPIClient =
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
proto.caseylucas.third.v1.ThirdAPIPromiseClient =
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
 *   !proto.caseylucas.third.v1.GetPopularWidgetsRequest,
 *   !proto.caseylucas.third.v1.GetPopularWidgetsResponse>}
 */
const methodInfo_ThirdAPI_GetPopularWidgets = new grpc.web.AbstractClientBase.MethodInfo(
  proto.caseylucas.third.v1.GetPopularWidgetsResponse,
  /** @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.caseylucas.third.v1.GetPopularWidgetsResponse.deserializeBinary
);


/**
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.caseylucas.third.v1.GetPopularWidgetsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.caseylucas.third.v1.GetPopularWidgetsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.caseylucas.third.v1.ThirdAPIClient.prototype.getPopularWidgets =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/caseylucas.third.v1.ThirdAPI/GetPopularWidgets',
      request,
      metadata || {},
      methodInfo_ThirdAPI_GetPopularWidgets,
      callback);
};


/**
 * @param {!proto.caseylucas.third.v1.GetPopularWidgetsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.caseylucas.third.v1.GetPopularWidgetsResponse>}
 *     A native promise that resolves to the response
 */
proto.caseylucas.third.v1.ThirdAPIPromiseClient.prototype.getPopularWidgets =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/caseylucas.third.v1.ThirdAPI/GetPopularWidgets',
      request,
      metadata || {},
      methodInfo_ThirdAPI_GetPopularWidgets);
};


module.exports = proto.caseylucas.third.v1;

