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
    root.MoosendApi.SchedulingACampaignRequest = factory(root.MoosendApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SchedulingACampaignRequest model module.
   * @module model/SchedulingACampaignRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>SchedulingACampaignRequest</code>.
   * @alias module:model/SchedulingACampaignRequest
   * @class
   * @param dateTime {String} The date and time at which the campaign will be delivered.
   */
  var exports = function(dateTime) {
    var _this = this;

    _this['DateTime'] = dateTime;

  };

  /**
   * Constructs a <code>SchedulingACampaignRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SchedulingACampaignRequest} obj Optional instance to populate.
   * @return {module:model/SchedulingACampaignRequest} The populated <code>SchedulingACampaignRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DateTime')) {
        obj['DateTime'] = ApiClient.convertToType(data['DateTime'], 'String');
      }
      if (data.hasOwnProperty('Timezone')) {
        obj['Timezone'] = ApiClient.convertToType(data['Timezone'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date and time at which the campaign will be delivered.
   * @member {String} DateTime
   */
  exports.prototype['DateTime'] = undefined;
  /**
   * The timezone the specified date and time refers to. By default the timezone in your settings panel will be used. If specified, one of the following values must be used. * Dateline Standard Time * Samoa Standard Time * Hawaiian Standard Time * Alaskan Standard Time * Pacific Standard Time * Pacific Standard Time (Mexico) * US Mountain Standard Time * Mountain Standard Time (Mexico) * Mountain Standard Time * Central Standard Time * Central Standard Time (Mexico) * Canada Central Standard Time * SA Pacific Standard Time * US Eastern Standard Time * Eastern Standard Time * Venezuela Standard Time * Atlantic Standard Time * SA Western Standard Time * Central Brazilian Standard Time * Pacific SA Standard Time * Newfoundland Standard Time * E. South America Standard Time * Argentina Standard Time * SA Eastern Standard Time * Greenland Standard Time * Montevideo Standard Time * Mid-Atlantic Standard Time * Azores Standard Time * Cape Verde Standard Time * Greenwich Standard Time * GMT Standard Time * Morocco Standard Time * W. Central Africa Standard Time * Central European Standard Time * Romance Standard Time * W. Europe Standard Time * Namibia Standard Time * E. Europe Standard Time * Israel Standard Time * FLE Standard Time * South Africa Standard Time * Egypt Standard Time * Middle East Standard Time * GTB Standard Time * Jordan Standard Time * Iran Standard Time * Georgian Standard Time * E. Africa Standard Time * Russian Standard Time * Arab Standard Time * Arabic Standard Time * Caucasus Standard Time * Mauritius Standard Time * Azerbaijan Standard Time * Arabian Standard Time * Afghanistan Standard Time * West Asia Standard Time * Pakistan Standard Time * Ekaterinburg Standard Time * Sri Lanka Standard Time * India Standard Time * Nepal Standard Time * N. Central Asia Standard Time * Central Asia Standard Time * Myanmar Standard Time * North Asia Standard Time * SE Asia Standard Time * Taipei Standard Time * W. Australia Standard Time * Singapore Standard Time * North Asia East Standard Time * China Standard Time * Yakutsk Standard Time * Korea Standard Time * Tokyo Standard Time * AUS Central Standard Time * Cen. Australia Standard Time * AUS Eastern Standard Time * West Pacific Standard Time * Tasmania Standard Time * Vladivostok Standard Time * Central Pacific Standard Time * New Zealand Standard Time * Tonga Standard Time
   * @member {String} Timezone
   */
  exports.prototype['Timezone'] = undefined;



  return exports;
}));

