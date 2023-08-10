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
    describe('SummaryActivity', function() {
      beforeEach(function() {
        instance = new StravaApiV3.SummaryActivity();
      });

      it('should create an instance of SummaryActivity', function() {
        // TODO: update the code to test SummaryActivity
        expect(instance).to.be.a(StravaApiV3.SummaryActivity);
      });

      it('should have the property externalId (base name: "external_id")', function() {
        // TODO: update the code to test the property externalId
        expect(instance).to.have.property('externalId');
        // expect(instance.externalId).to.be(expectedValueLiteral);
      });

      it('should have the property uploadId (base name: "upload_id")', function() {
        // TODO: update the code to test the property uploadId
        expect(instance).to.have.property('uploadId');
        // expect(instance.uploadId).to.be(expectedValueLiteral);
      });

      it('should have the property athlete (base name: "athlete")', function() {
        // TODO: update the code to test the property athlete
        expect(instance).to.have.property('athlete');
        // expect(instance.athlete).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property distance (base name: "distance")', function() {
        // TODO: update the code to test the property distance
        expect(instance).to.have.property('distance');
        // expect(instance.distance).to.be(expectedValueLiteral);
      });

      it('should have the property movingTime (base name: "moving_time")', function() {
        // TODO: update the code to test the property movingTime
        expect(instance).to.have.property('movingTime');
        // expect(instance.movingTime).to.be(expectedValueLiteral);
      });

      it('should have the property elapsedTime (base name: "elapsed_time")', function() {
        // TODO: update the code to test the property elapsedTime
        expect(instance).to.have.property('elapsedTime');
        // expect(instance.elapsedTime).to.be(expectedValueLiteral);
      });

      it('should have the property totalElevationGain (base name: "total_elevation_gain")', function() {
        // TODO: update the code to test the property totalElevationGain
        expect(instance).to.have.property('totalElevationGain');
        // expect(instance.totalElevationGain).to.be(expectedValueLiteral);
      });

      it('should have the property elevHigh (base name: "elev_high")', function() {
        // TODO: update the code to test the property elevHigh
        expect(instance).to.have.property('elevHigh');
        // expect(instance.elevHigh).to.be(expectedValueLiteral);
      });

      it('should have the property elevLow (base name: "elev_low")', function() {
        // TODO: update the code to test the property elevLow
        expect(instance).to.have.property('elevLow');
        // expect(instance.elevLow).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property sportType (base name: "sport_type")', function() {
        // TODO: update the code to test the property sportType
        expect(instance).to.have.property('sportType');
        // expect(instance.sportType).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property startDateLocal (base name: "start_date_local")', function() {
        // TODO: update the code to test the property startDateLocal
        expect(instance).to.have.property('startDateLocal');
        // expect(instance.startDateLocal).to.be(expectedValueLiteral);
      });

      it('should have the property timezone (base name: "timezone")', function() {
        // TODO: update the code to test the property timezone
        expect(instance).to.have.property('timezone');
        // expect(instance.timezone).to.be(expectedValueLiteral);
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

      it('should have the property achievementCount (base name: "achievement_count")', function() {
        // TODO: update the code to test the property achievementCount
        expect(instance).to.have.property('achievementCount');
        // expect(instance.achievementCount).to.be(expectedValueLiteral);
      });

      it('should have the property kudosCount (base name: "kudos_count")', function() {
        // TODO: update the code to test the property kudosCount
        expect(instance).to.have.property('kudosCount');
        // expect(instance.kudosCount).to.be(expectedValueLiteral);
      });

      it('should have the property commentCount (base name: "comment_count")', function() {
        // TODO: update the code to test the property commentCount
        expect(instance).to.have.property('commentCount');
        // expect(instance.commentCount).to.be(expectedValueLiteral);
      });

      it('should have the property athleteCount (base name: "athlete_count")', function() {
        // TODO: update the code to test the property athleteCount
        expect(instance).to.have.property('athleteCount');
        // expect(instance.athleteCount).to.be(expectedValueLiteral);
      });

      it('should have the property photoCount (base name: "photo_count")', function() {
        // TODO: update the code to test the property photoCount
        expect(instance).to.have.property('photoCount');
        // expect(instance.photoCount).to.be(expectedValueLiteral);
      });

      it('should have the property totalPhotoCount (base name: "total_photo_count")', function() {
        // TODO: update the code to test the property totalPhotoCount
        expect(instance).to.have.property('totalPhotoCount');
        // expect(instance.totalPhotoCount).to.be(expectedValueLiteral);
      });

      it('should have the property map (base name: "map")', function() {
        // TODO: update the code to test the property map
        expect(instance).to.have.property('map');
        // expect(instance.map).to.be(expectedValueLiteral);
      });

      it('should have the property trainer (base name: "trainer")', function() {
        // TODO: update the code to test the property trainer
        expect(instance).to.have.property('trainer');
        // expect(instance.trainer).to.be(expectedValueLiteral);
      });

      it('should have the property commute (base name: "commute")', function() {
        // TODO: update the code to test the property commute
        expect(instance).to.have.property('commute');
        // expect(instance.commute).to.be(expectedValueLiteral);
      });

      it('should have the property manual (base name: "manual")', function() {
        // TODO: update the code to test the property manual
        expect(instance).to.have.property('manual');
        // expect(instance.manual).to.be(expectedValueLiteral);
      });

      it('should have the property _private (base name: "private")', function() {
        // TODO: update the code to test the property _private
        expect(instance).to.have.property('_private');
        // expect(instance._private).to.be(expectedValueLiteral);
      });

      it('should have the property flagged (base name: "flagged")', function() {
        // TODO: update the code to test the property flagged
        expect(instance).to.have.property('flagged');
        // expect(instance.flagged).to.be(expectedValueLiteral);
      });

      it('should have the property workoutType (base name: "workout_type")', function() {
        // TODO: update the code to test the property workoutType
        expect(instance).to.have.property('workoutType');
        // expect(instance.workoutType).to.be(expectedValueLiteral);
      });

      it('should have the property uploadIdStr (base name: "upload_id_str")', function() {
        // TODO: update the code to test the property uploadIdStr
        expect(instance).to.have.property('uploadIdStr');
        // expect(instance.uploadIdStr).to.be(expectedValueLiteral);
      });

      it('should have the property averageSpeed (base name: "average_speed")', function() {
        // TODO: update the code to test the property averageSpeed
        expect(instance).to.have.property('averageSpeed');
        // expect(instance.averageSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property maxSpeed (base name: "max_speed")', function() {
        // TODO: update the code to test the property maxSpeed
        expect(instance).to.have.property('maxSpeed');
        // expect(instance.maxSpeed).to.be(expectedValueLiteral);
      });

      it('should have the property hasKudoed (base name: "has_kudoed")', function() {
        // TODO: update the code to test the property hasKudoed
        expect(instance).to.have.property('hasKudoed');
        // expect(instance.hasKudoed).to.be(expectedValueLiteral);
      });

      it('should have the property hideFromHome (base name: "hide_from_home")', function() {
        // TODO: update the code to test the property hideFromHome
        expect(instance).to.have.property('hideFromHome');
        // expect(instance.hideFromHome).to.be(expectedValueLiteral);
      });

      it('should have the property gearId (base name: "gear_id")', function() {
        // TODO: update the code to test the property gearId
        expect(instance).to.have.property('gearId');
        // expect(instance.gearId).to.be(expectedValueLiteral);
      });

      it('should have the property kilojoules (base name: "kilojoules")', function() {
        // TODO: update the code to test the property kilojoules
        expect(instance).to.have.property('kilojoules');
        // expect(instance.kilojoules).to.be(expectedValueLiteral);
      });

      it('should have the property averageWatts (base name: "average_watts")', function() {
        // TODO: update the code to test the property averageWatts
        expect(instance).to.have.property('averageWatts');
        // expect(instance.averageWatts).to.be(expectedValueLiteral);
      });

      it('should have the property deviceWatts (base name: "device_watts")', function() {
        // TODO: update the code to test the property deviceWatts
        expect(instance).to.have.property('deviceWatts');
        // expect(instance.deviceWatts).to.be(expectedValueLiteral);
      });

      it('should have the property maxWatts (base name: "max_watts")', function() {
        // TODO: update the code to test the property maxWatts
        expect(instance).to.have.property('maxWatts');
        // expect(instance.maxWatts).to.be(expectedValueLiteral);
      });

      it('should have the property weightedAverageWatts (base name: "weighted_average_watts")', function() {
        // TODO: update the code to test the property weightedAverageWatts
        expect(instance).to.have.property('weightedAverageWatts');
        // expect(instance.weightedAverageWatts).to.be(expectedValueLiteral);
      });

    });
  });

}));