/*
 * Strava API v3
 * The [Swagger Playground](https://developers.strava.com/playground) is the easiest way to familiarize yourself with the Strava API by submitting HTTP requests and observing the responses before you write any client code. It will show what a response will look like with different endpoints depending on the authorization scope you receive from your athletes. To use the Playground, go to https://www.strava.com/settings/api and change your “Authorization Callback Domain” to developers.strava.com. Please note, we only support Swagger 2.0. There is a known issue where you can only select one scope at a time. For more information, please check the section “client code” at https://developers.strava.com/docs.
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.33-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Fault', 'model/Upload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Fault'), require('../model/Upload'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.UploadsApi = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.Fault, root.StravaApiV3.Upload);
  }
}(this, function(ApiClient, Fault, Upload) {
  'use strict';

  /**
   * Uploads service.
   * @module api/UploadsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new UploadsApi. 
   * @alias module:api/UploadsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUpload operation.
     * @callback module:api/UploadsApi~createUploadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Upload} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload Activity
     * Uploads a new data file to create an activity from. Requires activity:write scope.
     * @param {Object} opts Optional parameters
     * @param {File} opts.file The uploaded file.
     * @param {String} opts.name The desired name of the resulting activity.
     * @param {String} opts.description The desired description of the resulting activity.
     * @param {String} opts.trainer Whether the resulting activity should be marked as having been performed on a trainer.
     * @param {String} opts.commute Whether the resulting activity should be tagged as a commute.
     * @param {module:model/String} opts.dataType The format of the uploaded file.
     * @param {String} opts.externalId The desired external identifier of the resulting activity.
     * @param {module:api/UploadsApi~createUploadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Upload}
     */
    this.createUpload = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': opts['file'],
        'name': opts['name'],
        'description': opts['description'],
        'trainer': opts['trainer'],
        'commute': opts['commute'],
        'data_type': opts['dataType'],
        'external_id': opts['externalId']
      };

      var authNames = ['strava_oauth'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Upload;

      return this.apiClient.callApi(
        '/uploads', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUploadById operation.
     * @callback module:api/UploadsApi~getUploadByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Upload} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Upload
     * Returns an upload for a given identifier. Requires activity:write scope.
     * @param {Number} uploadId The identifier of the upload.
     * @param {module:api/UploadsApi~getUploadByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Upload}
     */
    this.getUploadById = function(uploadId, callback) {
      var postBody = null;

      // verify the required parameter 'uploadId' is set
      if (uploadId === undefined || uploadId === null) {
        throw new Error("Missing the required parameter 'uploadId' when calling getUploadById");
      }


      var pathParams = {
        'uploadId': uploadId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Upload;

      return this.apiClient.callApi(
        '/uploads/{uploadId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
