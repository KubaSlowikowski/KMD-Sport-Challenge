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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SummarySegment', function() {
      beforeEach(function() {
        instance = new StravaApiV3.SummarySegment();
      });

      it('should create an instance of SummarySegment', function() {
        // TODO: update the code to test SummarySegment
        expect(instance).to.be.a(StravaApiV3.SummarySegment);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property activityType (base name: "activity_type")', function() {
        // TODO: update the code to test the property activityType
        expect(instance).to.have.property('activityType');
        // expect(instance.activityType).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property averageGrade (base name: "average_grade")', function() {
        // TODO: update the code to test the property averageGrade
        expect(instance).to.have.property('averageGrade');
        // expect(instance.averageGrade).to.be(expectedValueLiteral);
      });

      it('should have the property maximumGrade (base name: "maximum_grade")', function() {
        // TODO: update the code to test the property maximumGrade
        expect(instance).to.have.property('maximumGrade');
        // expect(instance.maximumGrade).to.be(expectedValueLiteral);
      });

      it('should have the property elevationHigh (base name: "elevation_high")', function() {
        // TODO: update the code to test the property elevationHigh
        expect(instance).to.have.property('elevationHigh');
        // expect(instance.elevationHigh).to.be(expectedValueLiteral);
      });

      it('should have the property elevationLow (base name: "elevation_low")', function() {
        // TODO: update the code to test the property elevationLow
        expect(instance).to.have.property('elevationLow');
        // expect(instance.elevationLow).to.be(expectedValueLiteral);
      });

      it('should have the property startLatlng (base name: "start_latlng")', function() {
        // TODO: update the code to test the property startLatlng
        expect(instance).to.have.property('startLatlng');
        // expect(instance.startLatlng).to.be(expectedValueLiteral);
      });

      it('should have the property endLatlng (base name: "end_latlng")', function() {
        // TODO: update the code to test the property endLatlng
        expect(instance).to.have.property('endLatlng');
        // expect(instance.endLatlng).to.be(expectedValueLiteral);
      });

      it('should have the property climbCategory (base name: "climb_category")', function() {
        // TODO: update the code to test the property climbCategory
        expect(instance).to.have.property('climbCategory');
        // expect(instance.climbCategory).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property athletePrEffort (base name: "athlete_pr_effort")', function() {
        // TODO: update the code to test the property athletePrEffort
        expect(instance).to.have.property('athletePrEffort');
        // expect(instance.athletePrEffort).to.be(expectedValueLiteral);
      });

      it('should have the property athleteSegmentStats (base name: "athlete_segment_stats")', function() {
        // TODO: update the code to test the property athleteSegmentStats
        expect(instance).to.have.property('athleteSegmentStats');
        // expect(instance.athleteSegmentStats).to.be(expectedValueLiteral);
      });

    });
  });

}));