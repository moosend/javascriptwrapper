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
    root.MoosendApi.ImportOperation = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ImportOperation model module.
   * @module model/ImportOperation
   * @version 1.0
   */

  /**
   * Constructs a new <code>ImportOperation</code>.
   * @alias module:model/ImportOperation
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>ImportOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImportOperation} obj Optional instance to populate.
   * @return {module:model/ImportOperation} The populated <code>ImportOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CompletedOn')) {
        obj['CompletedOn'] = ApiClient.convertToType(data['CompletedOn'], 'String');
      }
      if (data.hasOwnProperty('CreatedOn')) {
        obj['CreatedOn'] = ApiClient.convertToType(data['CreatedOn'], 'String');
      }
      if (data.hasOwnProperty('DataHash')) {
        obj['DataHash'] = ApiClient.convertToType(data['DataHash'], 'String');
      }
      if (data.hasOwnProperty('EmailNotify')) {
        obj['EmailNotify'] = ApiClient.convertToType(data['EmailNotify'], 'String');
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'Number');
      }
      if (data.hasOwnProperty('Mappings')) {
        obj['Mappings'] = ApiClient.convertToType(data['Mappings'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('StartedOn')) {
        obj['StartedOn'] = ApiClient.convertToType(data['StartedOn'], 'String');
      }
      if (data.hasOwnProperty('Success')) {
        obj['Success'] = ApiClient.convertToType(data['Success'], 'Boolean');
      }
      if (data.hasOwnProperty('TotalDuplicate')) {
        obj['TotalDuplicate'] = ApiClient.convertToType(data['TotalDuplicate'], 'Number');
      }
      if (data.hasOwnProperty('TotalInserted')) {
        obj['TotalInserted'] = ApiClient.convertToType(data['TotalInserted'], 'Number');
      }
      if (data.hasOwnProperty('TotalInvalid')) {
        obj['TotalInvalid'] = ApiClient.convertToType(data['TotalInvalid'], 'Number');
      }
      if (data.hasOwnProperty('TotalMembers')) {
        obj['TotalMembers'] = ApiClient.convertToType(data['TotalMembers'], 'Number');
      }
      if (data.hasOwnProperty('TotalUnsubscribed')) {
        obj['TotalUnsubscribed'] = ApiClient.convertToType(data['TotalUnsubscribed'], 'Number');
      }
      if (data.hasOwnProperty('TotalUpdated')) {
        obj['TotalUpdated'] = ApiClient.convertToType(data['TotalUpdated'], 'Number');
      }
    }
    return obj;
  }

  /**
   * 
   * @member {String} CompletedOn
   */
  exports.prototype['CompletedOn'] = undefined;
  /**
   * 
   * @member {String} CreatedOn
   */
  exports.prototype['CreatedOn'] = undefined;
  /**
   * 
   * @member {String} DataHash
   */
  exports.prototype['DataHash'] = undefined;
  /**
   * 
   * @member {String} EmailNotify
   */
  exports.prototype['EmailNotify'] = undefined;
  /**
   * 
   * @member {Number} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * 
   * @member {String} Mappings
   */
  exports.prototype['Mappings'] = undefined;
  /**
   * 
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;
  /**
   * 
   * @member {String} StartedOn
   */
  exports.prototype['StartedOn'] = undefined;
  /**
   * 
   * @member {Boolean} Success
   */
  exports.prototype['Success'] = undefined;
  /**
   * 
   * @member {Number} TotalDuplicate
   */
  exports.prototype['TotalDuplicate'] = undefined;
  /**
   * 
   * @member {Number} TotalInserted
   */
  exports.prototype['TotalInserted'] = undefined;
  /**
   * 
   * @member {Number} TotalInvalid
   */
  exports.prototype['TotalInvalid'] = undefined;
  /**
   * 
   * @member {Number} TotalMembers
   */
  exports.prototype['TotalMembers'] = undefined;
  /**
   * 
   * @member {Number} TotalUnsubscribed
   */
  exports.prototype['TotalUnsubscribed'] = undefined;
  /**
   * 
   * @member {Number} TotalUpdated
   */
  exports.prototype['TotalUpdated'] = undefined;



  return exports;
}));


