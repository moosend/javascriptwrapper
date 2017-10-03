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
    define(['ApiClient', 'model/CustomField53'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomField53'));
  } else {
    // Browser globals (root is window)
    if (!root.MoosendApi) {
      root.MoosendApi = {};
    }
    root.MoosendApi.Context52 = factory(root.MoosendApi.ApiClient, root.MoosendApi.CustomField53);
  }
}(this, function(ApiClient, CustomField53) {
  'use strict';




  /**
   * The Context52 model module.
   * @module model/Context52
   * @version 1.0
   */

  /**
   * Constructs a new <code>Context52</code>.
   * @alias module:model/Context52
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Context52</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context52} obj Optional instance to populate.
   * @return {module:model/Context52} The populated <code>Context52</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CreatedOn')) {
        obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'String');
      }
      if (data.hasOwnProperty('CustomFields')) {
        obj['CustomFields'] = ApiClient.convertToType(data['CustomFields'], [CustomField53]);
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('RemovedOn')) {
        obj['RemovedOn'] = ApiClient.convertToType(data['RemovedOn'], 'String');
      }
      if (data.hasOwnProperty('SubscribeMethod')) {
        obj['SubscribeMethod'] = ApiClient.convertToType(data['SubscribeMethod'], 'Number');
      }
      if (data.hasOwnProperty('SubscribeType')) {
        obj['SubscribeType'] = ApiClient.convertToType(data['SubscribeType'], 'Number');
      }
      if (data.hasOwnProperty('UnsubscribedFromID')) {
        obj['UnsubscribedFromID'] = ApiClient.convertToType(data['UnsubscribedFromID'], 'String');
      }
      if (data.hasOwnProperty('UnsubscribedOn')) {
        obj['UnsubscribedOn'] = ApiClient.convertToType(data['UnsubscribedOn'], 'String');
      }
      if (data.hasOwnProperty('UpdatedOn')) {
        obj['UpdatedOn'] = ApiClient.convertToType(data['UpdatedOn'], 'String');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} CreatedOn
   */
  exports.prototype['CreatedOn'] = undefined;
  /**
   * 
   * @member {Array.<module:model/CustomField53>} CustomFields
   */
  exports.prototype['CustomFields'] = undefined;
  /**
   * 
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * 
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * 
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * 
   * @member {String} RemovedOn
   */
  exports.prototype['RemovedOn'] = undefined;
  /**
   * 
   * @member {Number} SubscribeMethod
   */
  exports.prototype['SubscribeMethod'] = undefined;
  /**
   * 
   * @member {Number} SubscribeType
   */
  exports.prototype['SubscribeType'] = undefined;
  /**
   * 
   * @member {String} UnsubscribedFromID
   */
  exports.prototype['UnsubscribedFromID'] = undefined;
  /**
   * 
   * @member {String} UnsubscribedOn
   */
  exports.prototype['UnsubscribedOn'] = undefined;
  /**
   * 
   * @member {String} UpdatedOn
   */
  exports.prototype['UpdatedOn'] = undefined;



  return exports;
}));


