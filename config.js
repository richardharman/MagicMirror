/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		/*{
			module: "clock",
			position: "top_left"
		},*/
{
  module: 'MMM-Worldclock',
  position: 'top_right', // This can be any of the regions, best results in top_left or top_right regions
  config: {
    // See 'Configuration options' for more information.

    timeFormat: 'hh:mm A', //defined in moment.js format()
    style: 'top', //predefined 4 styles; 'top', 'left','right','bottom'
    offsetTimezone: null, // Or you can set `Europe/Berlin` to get timegap difference from this timezone. `null` will be UTC timegap.
    clocks: [
      {
        title: "Home",
      },
      {
        title: "Johannesburg", // Too long title could cause ugly text align.
        timezone: "Africa/Johannesburg", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        flag: "za",
      },
       {
        title: "London", // Too long title could cause ugly text align.
        timezone: "Europe/London", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        flag: "gb",
      },
       {
        title: "New York", // Too long title could cause ugly text align.
        timezone: "America/New_York", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        flag: "us",
      },
        {
        title: "Mumbai", // Too long title could cause ugly text align.
        timezone: "Asia/Kolkata", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        flag: "in",
      },
          {
        title: "Milan", // Too long title could cause ugly text align.
        timezone: "Europe/Rome", //When omitted, Localtime will be displayed. It might be not your purporse, I bet.
        flag: "it",
      },
      
      {
        timezone: "Africa/Johannesburg",
      },
    ]
 	 }
	 },
                {
    			module: 'DailyXKCD',
			position: 'top_left',
			config: {
			invertColors: true,
			showTitle: true,
			showAltText: false,
			randomComic: true
				}
 		},
		/*{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},*/
		/*{
			module: "compliments",
			position: "lower_third"
		},
		

		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},*/
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
