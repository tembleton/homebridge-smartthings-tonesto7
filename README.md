# homebridge-smartthings-tonesto7

[![npm version](https://badge.fury.io/js/homebridge-smartthings-tonesto7.svg)](https://badge.fury.io/js/homebridge-smartthings-tonesto7)

Current Smartapp version - 1.1.3

This version is not compatible with prior versions of homebridge-smartthings Smartapp.

### Direct Updates from SmartThings
 * This method is nearly instant.
 * This option allows the hub to send updates directly to your homebridge-smartthings installation.
 * The hub must be able to send an http packet to your device so make sure to allow incoming traffic on the applicable port.
 * The port used for this can be configured by the "direct_port" setting and defaults to 8000.
 * The program will attempt to determine your IP address automatically, but that can be overridden by "direct_ip" which is useful if you have multiple addresses.
 * As a note, the hub isn't actual doing any of the processing so if you lose Internet, updates will stop. I'm told it "doesn't currently" support it, so there is hope.

When properly setup, you should see something like this in your Homebridge startup immediately after the PIN:
```
[1/29/2017, 8:28:45 AM] Homebridge is running on port 51826.
[1/29/2017, 8:28:45 AM] [SmartThings] Direct Connect Is Listening On 192.168.0.49:8000
[1/29/2017, 8:28:45 AM] [SmartThings] SmartThings Hub Communication Established
```

## Upgrade Existing Installation

1. Log into your SmartThings account at https://graph.api.smartthings.com/ Then goto "MySmartApps"
2. Click "Update From Repo" and select "homebridge-smartthings".
3. You should see the smartapp listed under "Obsolete". Check the box next to the smart app. Check the box next to Publish. Click Execute Update.
4. Close homebridge, if running.
5. Run "npm update homebridge -g" to make sure homebridge is up to date.
6. Run "npm update homebridge-smartthings -g" to update the smartthings module
 * If you didn't originally install with -g then simple omit that here.
7. Start Homebridge. After displaying the network PIN, it should display "Direct Connect Is Listening On XXX.XXX.XXX.XXX:8000" followed by "SmartThings Hub Communication Established".
 * If it displays Direct Connect is Listening... but not Communications Established then check your computer's local firewall for anything blocking TCP 8000 and make sure the listed IP address is on the same network as the SmartThings Hub.
8. Test the process. Make sure your lights show up in Home. Use the Smartthings app to toggle a light on or off and make sure the change is reflected on the IOS device. The Home app should update the status before you have time to switch from Smartthings back to Home.
9. All done.

## Installation

Installation comes in two parts:

### SmartThings API installation
A custom JSON API has been written to interface with Smartthings. If you have any other than the one called "" then you need to install the new one.
This plugin will NOT work with the original "JSON API" by pdlove due to a lack of features.

If you installed the previous update that doesn't allow selecting devices, you need to goto "My Locations" and then "List Smartapps" to remove the multiple installation.

* Log into your SmartThings account at https://graph.api.smartthings.com/
* Goto "My SmartApps"
* Click on Settings and add the repository with Owner of "tonesto7" and name of "homebridge-smartthings-tonesto7" and branch of "master" and then click save.
* Click "Update From Repo" and select "homebridge-smartthings-tonesto7"
* You should have Homebridge-SmartThings in the New section. Check it, check Publish at the bottom and click "Execute Update".

* Click on the app in the list and then click "App Settings"
* Scroll down to the OAuth section and click "Enable OAuth in Smartapp"
* Select "Update" at the bottom.

* In the SmartThings App, goto "Marketplace" and select "SmartApps". At the bottom of the list, select "My Apps"
* Select "Homebridge (SmartThings)" from the list.
* Tap the plus next to an appropriate device group and then check off each device you would like to use.
 * There are several categories because of the way Smartthings assigns capabilities.
  * Almost all devices contain the Refresh capability and are under the "Most Devices" group
  * Some sensors don't have a refresh and are under the "Sensor Devices" group.
  * Some devices, mainly Virtual Switches, only have the Switch Capability and are in the "All Switches".
 * If you select the same device in multiple categories it will only be shown once in HomeKit, so you can safely check them all in all groups.
 * If a device isn't listed, let me know by submitting an issue on GitHub.
* Tap Done and then Done.

### Homebridge Installation

1. Install homebridge using: npm install -g homebridge
2. Install this plugin using: npm install -g homebridge-smartthings-tonesto7
3. Update your configuration file. See sample config.json snippet below.

### Config.json Settings

Example of all settings. Not all ssettings are required. Read the breakdown below.
```
    {
        "platform": "SmartThings",
        "name": "SmartThings",
        "app_url": "https://graph.api.smartthings.com:443/api/smartapps/installations/",
        "app_id": "THIS-SHOULD-BE-YOUR-APPID",
        "access_token": "THIS-SHOULD-BE-YOUR-TOKEN",
        "polling_seconds": 3600,
        "update_method": "direct",
        "direct_ip": "192.168.0.45",
        "direct_port": 8000
    }
```
* "platform" and "name"
**_Required_**
 * This information is used by homebridge to identify the plugin and should be the settings above.

* "app_url", "app_id" and "access_token"
**_Required_**
 * To get this information, open SmartThings on your phone, goto "Automation">"SmartApps">"JSON Complete API" and tap on Config
 * The app_url in the example may be different for you.

* "polling_seconds"
**_Optional_** Defaults to 3600
 * Identifies how often to get full updates. At this interval, homebridge-smartthings will request a complete device dump from the API just in case any subscription events have been missed.
 * This defaults to once every hour. I have had it set to daily in my installation with no noticable issues.

* "update_method"
**_Optional_** Defaults to direct
 * See *Device Updates from SmartThings* for more information.
 * Options are: "direct", "pubnub", "api" and a recommended in that order.

* "direct_ip"
**_Optional_** Defaults to first available IP on your computer
 * This setting only applies if update_method is direct.
 * Most installations won't need this, but if for any reason it can't identify your ip address correctly, use this setting to force the IP presented to SmartThings for the hub to send to.

* "direct_port"
**_Optional_** Defaults to 8000
 * This setting only applies if update_method is direct.
 * This is the port that homebridge-smartthings will listen on for traffic from your hub. Make sure your firewall allows incoming traffic on this port from your hub's IP address.
 
## What's New

* 1.1.3
 * [SmartApp] Lot's of updates to add support for more device types in Homekit. (I will eventually update the list with more details)

