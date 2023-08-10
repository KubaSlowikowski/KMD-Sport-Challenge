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
    define(['ApiClient', 'model/HeartRateZoneRanges', 'model/PowerZoneRanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HeartRateZoneRanges'), require('./PowerZoneRanges'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.Zones = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.HeartRateZoneRanges, root.StravaApiV3.PowerZoneRanges);
  }
}(this, function(ApiClient, HeartRateZoneRanges, PowerZoneRanges) {
  'use strict';

  /**
   * The Zones model module.
   * @module model/Zones
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Zones</code>.
   * @alias module:model/Zones
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Zones</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Zones} obj Optional instance to populate.
   * @return {module:model/Zones} The populated <code>Zones</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('heart_rate'))
        obj.heartRate = HeartRateZoneRanges.constructFromObject(data['heart_rate']);
      if (data.hasOwnProperty('power'))
        obj.power = PowerZoneRanges.constructFromObject(data['power']);
    }
    return obj;
  }

  /**
   * @member {module:model/HeartRateZoneRanges} heartRate
   */
  exports.prototype.heartRate = undefined;

  /**
   * @member {module:model/PowerZoneRanges} power
   */
  exports.prototype.power = undefined;


  return exports;

}));
