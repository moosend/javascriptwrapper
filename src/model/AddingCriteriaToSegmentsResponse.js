/**
 * Moosend API
 * TODO: Add a description
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.AddingCriteriaToSegmentsResponse = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddingCriteriaToSegmentsResponse model module.
   * @module model/AddingCriteriaToSegmentsResponse
   * @version 1.0
   */

  /**
   * Constructs a new <code>AddingCriteriaToSegmentsResponse</code>.
   * @alias module:model/AddingCriteriaToSegmentsResponse
   * @class
   * @param code {Number} 
   * @param error {String} 
   * @param context {Number} 
   */
  var exports = function(code, error, context) {
    var _this = this;

    _this['Code'] = code;
    _this['Error'] = error;
    _this['Context'] = context;
  };

  /**
   * Constructs a <code>AddingCriteriaToSegmentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddingCriteriaToSegmentsResponse} obj Optional instance to populate.
   * @return {module:model/AddingCriteriaToSegmentsResponse} The populated <code>AddingCriteriaToSegmentsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'Number');
      }
      if (data.hasOwnProperty('Error')) {
        obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
      }
      if (data.hasOwnProperty('Context')) {
        obj['Context'] = ApiClient.convertToType(data['Context'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {Number} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * 
   * @member {String} Error
   */
  exports.prototype['Error'] = undefined;
  /**
   * 
   * @member {Number} Context
   */
  exports.prototype['Context'] = undefined;



  return exports;
}));


