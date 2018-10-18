# homebridge-smartthings-tonesto7

This is based off of @pdlove homebridge-smartthings

[![npm version](https://badge.fury.io/js/homebridge-smartthings-tonesto7.svg)](https://badge.fury.io/js/homebridge-smartthings-tonesto7)

**```Current SmartApp version: 1.5.0```**

<br>

# Change Log:

#### SmartThing App:

***v1.0.0*** - Overhauled JSON API app from Paul's SmartThings version.

***v1.0.1*** - SmartHomeMonitor Support is set to Off by Default.

***v1.1.3*** - App Cleanups.  Added lot's of features.

***v1.1.4*** - Removed Hampton Fan input (No longer Necessary with My modified Device Handler).

***v1.1.5*** - Disabled Irrigation for now until i can make it work more consistent.

***v1.1.6*** - Command Tweaks to prevent errors.

***v1.1.8*** - Fixes for Mode Devices, added Routine Devices.

***v1.2.0*** - Added ability to selectively remove temp from Contact/Water Sensors, and lot's of Code Cleanup.

***v1.2.0*** - Update SmartApp to support new icon.

***v1.3.0*** - The SmartThings and Hubitat Apps now share 99.9% of the same code. With the exception being the hubaction declarations and a static variable defining the platform type

***v1.4.0*** - Add support for multiple HSM locations, and other Bugfixes mainly related to Hubitat Side

***v1.4.1*** - SHM/HSM fixes and added support for triggering intrusion alerts under HomeKit

***v1.5.0*** - Added support for the service to send commands directly to the hub locally (SmartThings ONLY)
***v1.5.0*** - Added toggle to control whether local commands are allowed
***v1.5.0*** - Added ability to trigger service restart when you exit the app (Will only restart on it's own if using process/service manager like PM2/systemd)



#### Homebridge Plugin:

***v1.1.5*** - Lot's of new capabilities supported in HomeKit

***v1.1.7*** - Updated the README

***v1.1.8*** - Cleanup of the Irrigation code

***v1.1.9*** - Forgot to remove some logging

***v1.2.0*** - Added in capability exclusion feature to match @pdlove plugin

***v1.2.3*** - Minor Cleanups

***v1.3.0*** - The SmartThings and Hubitat NPM package now share 99.9% the same code. All except 2 static variables defining the platform type

***v1.3.1*** - Bug fixes from code merge

***v1.3.2*** - More Bug fixes from code merge

***v1.3.3*** - Fixed Detection Issues in plugin

***v1.4.0*** - Fixed Hubitat support, working windows shades, allow multiple location SHM/HSM instances, lot's of cleanups and restructures.
***v1.4.0*** - Warning:  This will recreate a new Alarm device under Homekit.  There is a possiblity it might also reset all of your Homekit Devices, rooms and options

***v1.4.1*** - SHM/HSM fixes and added support for triggering intrusion alerts under HomeKit

***v1.5.0*** - Added support for the service to send commands directly to the hub locally (SmartThings ONLY)
***v1.5.0*** - Added toggle to control whether local commands are allowed
***v1.5.0*** - Added ability to trigger service restart when you exit the app (Will only restart on it's own if using process/service manager like PM2/systemd)

<br>

## This version is not compatible with prior versions of homebridge-smartthings Smartapp.

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
[1/29/2017, 8:28:45 AM] [SmartThings] Direct Connect Is Listening On 10.0.0.70:8000
[1/29/2017, 8:28:45 AM] [SmartThings] SmartThings Hub Communication Established
```

# Installation

Installation comes in two parts:

## 1. SmartApp Installation

* Log into your SmartThings account at [SmartThings IDE](https://account.smartthings.com/login)

_Note New SmartThings users: You must first enable github integration. (If you use github for work you will probably want to set up a new account as it will request access to your private repos). Only after enabling integration will you see the settings button_

* Click on <u><b>```My SmartApps```</b></u>
* Click on Settings and Add the New repository:
   * Owner: <u>```tonesto7```</u>
   * Name: <u>```homebridge-smartthings-tonesto7```</u>
   * Branch: <u>```master```</u>
   * Click <u><b>```Save```</b></u>.
* Click <u><b>```Update From Repo```</b></u>
   * Select <u>```homebridge-smartthings-tonesto7```</u>
* You should have <u>homebridge-smartthings.groovy</u> in the New section. 
   * Check the Box next to <u>```homebridge-smartthings.groovy```</u> 
   * Check <u><b>```Publish```</b></u> at the bottom
   * Click <u><b>```Execute Update```</b></u>.

* Click on the <u>```Homebridge-SmartThings```</u> app in the list:
   * Click <u><b>```App Settings```</b></u>
   * Scroll down to the OAuth section and click <u><b>```Enable OAuth in Smartapp```</b></u>
   * Click <u><b>```Update```</b></u> at the bottom.

<br>

## 2. SmartApp Configuration

* In the SmartThings Mobile App, goto <u>```Marketplace```</u> and select <u>```SmartApps```</u>. 
* At the bottom of the list, select <u>```My Apps```</u>
* Select <u>```Homebridge (SmartThings)```</u> from the choices on thelist.
* Configuring the App:

   <u>There are 4 inputs at the top that can be used to force a device to be discovered as a specific type in HomeKit</u>
   
   Any other devices being added just Tap on the input next to an appropriate device group and then select each device you would like to use (The same devices can be in any of the Sensor, Switch, Other inputs)
    * There are several categories because of the way SmartThings assigns capabilities. So you might not see your device in one, but might in another.
    * Almost all devices contain the Refresh capability and are under the "Other Devices" group
    * Some sensors don't have a refresh and are under the "Sensor Devices" group.
    * Some devices, mainly Virtual Switches, only have the Switch Capability and are in the "Switch Devices".
    
    <b>Selecting the same device in multiple categories it will only be shown once in HomeKit, so you can safely check them all in all groups</b>

 * Tap <u><b>```Done```</b></u>
 * Tap <u><b>```Done```</b></u> 
 You are finished with the App configuration!

<br>

## 3. Homebridge Plugin Installation:

 1. Install homebridge using: ```npm i -g homebridge``` (For Homebridge Install: [Homebridge Instructions](https://github.com/nfarina/homebridge/blob/master/README.md))
 2. Install SmartThings plugin using: ```npm i -g homebridge-smartthings-tonesto7```
 3. Update your configuration file. See sample config.json snippet below.

  <h3 style="padding: 0em .6em;">Config.json Settings Example</h3>

  <h4 style="padding: 0em .6em; margin-bottom: 5px;"><u>Example of all settings. Not all settings are required. Read the breakdown below</u></h4>
   
   <div style="overflow:auto;width:auto;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f8f8f2">{</span>
   <span style="color: #f92672">&quot;platform&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;SmartThings&quot;</span><span style="color: #f8f8f2">,</span> 
   <span style="color: #f92672">&quot;name&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;SmartThings&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;app_url&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;https://graph.api.smartthings.com:443/api/smartapps/installations/&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;app_id&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;YOUR_APPS_ID&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;access_token&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;THIS-SHOULD-BE-YOUR-TOKEN&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;update_method&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;direct&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;direct_ip&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #e6db74">&quot;10.0.0.70&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;direct_port&quot;</span><span style="color: #f8f8f2">:</span> <span style="color: #ae81ff">8000</span><span style="color: #f8f8f2">,</span>
   <span style="color: #f92672">&quot;excluded_capabilities&quot;</span><span style="color: #f8f8f2">: {</span>
   <span style="color: lightblue">    &quot;SMARTTHINGS-DEVICE-ID-1&quot;</span><span style="color: #f8f8f2">: [</span>
   <span style="color: orange">       &quot;Switch&quot;</span><span style="color: #f8f8f2">,</span>
   <span style="color: orange">       &quot;Temperature Measurement&quot;</span>
   <span style="color: #f8f8f2">    ]</span>
   <span style="color: #f8f8f2">}<br>}</span>
   </pre></div>


 * <p><u>platform</u> & <u>name</u>  <small style="color: orange; font-weight: 600;"><i>Required</i></small><br>
    This information is used by homebridge to identify the plugin and should be the settings above.</p>

 * <p><u>app_url</u> & <u>access_token</u>  <small style="color: orange; font-weight: 600;"><i>Required</i></small><br>
    To get this information, open Homebridge (SmartThings) SmartApp in your SmartThings Classic Mobile App, and tap on "View Configuration Data for Homebridge"<br><small style="color: yellow;"><b>Notice:</b> The app_url in the example above may be different for you.</small></p>

 * <p><u>direct_ip</u>  <small style="color: #f92672; font-weight: 600;"><i>Optional</i></small><br>
    Defaults to first available IP on your computer<br><small style="color: gray;">Most installations won't need this, but if for any reason it can't identify your ip address correctly, use this setting to force the IP presented to SmartThings for the hub to send to.</small></p>

 * <p><u>direct_port</u>  <small style="color: #f92672; font-weight: 600;"><i>Optional</i></small><br>
   Defaults to 8000<br><small style="color: gray;">This is the port that homebridge-smartthings plugin will listen on for traffic from your hub. Make sure your firewall allows incoming traffic on this port from your hub's IP address.</small></p>

 * <p><u>local_commands</u>  <small style="color: #f92672; font-weight: 600;"><i>Optional</i></small><br>
    This will allow the service to send homekit commands to hub locally (SmartThings only)</p>

 * <p><u>excluded_capabilities</u>  <small style="color: #f92672; font-weight: 600;"><i>Optional</i></small><br>
   Defaults to None<br><small style="color: gray;">Specify the SmartThings device by ID and the associated capabilities you want homebridge-smartthings to ignore<br>This prevents a SmartThings device creating unwanted or redundant HomeKit accessories</small></p>