var inherits = require('util').inherits;
// var Service, Characteristic;
class CommunityTypes {
    constructor(Characteristic) {
        // Characteristics
        this.TotalConsumption1 = function() {
            Characteristic.call(this, 'Total Consumption (kWh*1000)', 'E863F10C-079E-48FF-8F27-9C2605A29F52');
            this.setProps({
                format: Characteristic.Formats.FLOAT,
                unit: Characteristic.Units.SECONDS,
                maxValue: 4294967295,
                minValue: 0,
                minStep: 1,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.TotalConsumption1, Characteristic);
        this.CurrentConsumption1 = function() {
            Characteristic.call(this, 'Current Consumption (W*10)', 'E863F10D-079E-48FF-8F27-9C2605A29F52');
            this.setProps({
                format: Characteristic.Formats.FLOAT,
                unit: Characteristic.Units.SECONDS,
                maxValue: 65535,
                minValue: 0,
                minStep: 1,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.CurrentConsumption1, Characteristic);
        this.KilowattHours = function() {
            Characteristic.call(this, 'Total Consumption', 'E863F10C-079E-48FF-8F27-9C2605A29F52');
            this.setProps({
                format: Characteristic.Formats.UINT32,
                unit: 'kWh',
                minValue: 0,
                maxValue: 65535,
                minStep: 1,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.KilowattHours, Characteristic);
        this.Watts = function() {
            Characteristic.call(this, 'Consumption', 'E863F10D-079E-48FF-8F27-9C2605A29F52');
            this.setProps({
                format: Characteristic.Formats.UINT16,
                unit: 'W',
                minValue: 0,
                maxValue: 65535,
                minStep: 1,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.Watts, Characteristic);
        this.Timestamp = function() {
            Characteristic.call(this, "Timestamp", 'FF000001-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.Timestamp, Characteristic);
        this.AudioDataURL = function() {
            Characteristic.call(this, "Audio URL", 'FF000002-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
        };
        inherits(this.AudioDataURL, Characteristic);
        this.VideoDataURL = function() {
            Characteristic.call(this, "Video URL", 'FF000003-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
        };
        inherits(this.VideoDataURL, Characteristic);
        this.AudioVolume = function() {
            Characteristic.call(this, 'Audio Volume', '00001001-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT8,
                unit: Characteristic.Units.PERCENTAGE,
                maxValue: 100,
                minValue: 0,
                minStep: 1,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.AudioVolume, Characteristic);
        this.Muting = function() {
            Characteristic.call(this, 'Muting', '00001002-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT8,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.Muting, Characteristic);
        this.PlaybackState = function() {
            Characteristic.call(this, 'Playback State', '00002001-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT8,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.PlaybackState, Characteristic);
        this.PlaybackState.PLAYING = 0;
        this.PlaybackState.PAUSED = 1;
        this.PlaybackState.STOPPED = 2;
        this.SkipForward = function() {
            Characteristic.call(this, 'Skip Forward', '00002002-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.BOOL,
                perms: [Characteristic.Perms.WRITE]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.SkipForward, Characteristic);
        this.SkipBackward = function() {
            Characteristic.call(this, 'Skip Backward', '00002003-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.BOOL,
                perms: [Characteristic.Perms.WRITE]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.SkipBackward, Characteristic);
        this.ShuffleMode = function() {
            Characteristic.call(this, 'Shuffle Mode', '00002004-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT8,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.ShuffleMode, Characteristic);
        //NOTE: If GROUP or SET is not supported, accessories should coerce to ALBUM.
        // If ALBUM is not supported, coerce to ITEM.
        // In general, it is recommended for apps to only assume OFF, ITEM, and ALBUM
        // are supported unless it is known that the accessory supports other settings.
        this.ShuffleMode.OFF = 0;
        //NOTE: INDIVIDUAL is deprecated.
        this.ShuffleMode.ITEM = this.ShuffleMode.INDIVIDUAL = 1;
        this.ShuffleMode.GROUP = 2; // e.g. iTunes "Groupings"
        this.ShuffleMode.ALBUM = 3; // e.g. album or season
        this.ShuffleMode.SET = 4; // e.g. T.V. Series or album box set
        this.RepeatMode = function() {
            Characteristic.call(this, 'Repeat Mode', '00002005-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT8,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.RepeatMode, Characteristic);
        this.RepeatMode.OFF = 0;
        this.RepeatMode.ONE = 1;
        this.RepeatMode.ALL = 2;
        this.PlaybackSpeed = function() {
            Characteristic.call(this, 'Playback Speed', '00002006-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.FLOAT,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.PlaybackSpeed, Characteristic);
        this.MediaCurrentPosition = function() {
            Characteristic.call(this, 'Media Current Position', '00002007-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.FLOAT,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaCurrentPosition, Characteristic);
        this.MediaItemName = function() {
            Characteristic.call(this, 'Media Name', '00003001-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaItemName, Characteristic);
        this.MediaItemAlbumName = function() {
            Characteristic.call(this, 'Media Album Name', '00003002-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaItemAlbumName, Characteristic);
        this.MediaItemArtist = function() {
            Characteristic.call(this, 'Media Artist', '00003003-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaItemArtist, Characteristic);
        this.MediaItemDuration = function() {
            Characteristic.call(this, 'Media Duration', '00003005-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.FLOAT,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaItemDuration, Characteristic);
        this.StillImage = function() {
            Characteristic.call(this, 'Still Image', '00004001-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.DATA,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.StillImage, Characteristic);
        // Also known as MIME type...
        this.MediaTypeIdentifier = function() {
            Characteristic.call(this, 'Media Type Identifier', '00004002-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.STRING,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = null;
        };
        inherits(this.MediaTypeIdentifier, Characteristic);
        this.MediaWidth = function() {
            Characteristic.call(this, 'Media Width', '00004003-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT32,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaWidth, Characteristic);
        this.MediaHeight = function() {
            Characteristic.call(this, 'Media Width', '00004004-0000-1000-8000-135D67EC4377');
            this.setProps({
                format: Characteristic.Formats.UINT32,
                perms: [Characteristic.Perms.READ, Characteristic.Perms.WRITE, Characteristic.Perms.NOTIFY]
            });
            this.value = this.getDefaultValue();
        };
        inherits(this.MediaHeight, Characteristic);
        return this;
    }
}

module.exports.CommunityTypes = CommunityTypes;