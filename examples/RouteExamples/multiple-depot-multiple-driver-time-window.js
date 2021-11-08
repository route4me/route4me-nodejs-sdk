"use strict"

const path = require("path")
const chai = require("chai")
const debug = require("debug")("route4me-node:examples")
require("../init-examples-suite")
const helper  = require("../../test/helper")

helper.describeIntegration(helper.toSuiteName(__filename), function T() {
	this.timeout(5000)
	this.slow(3000)
	it(path.basename(__filename), (done) => {
		// const Route4Me = require("route4me-node")
		const expect = chai.expect
		const apiKey   = "11111111111111111111111111111111"
		const route4me = new Route4Me(apiKey)
        
        const today = new Date()
        var tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        var origintime = new Date(1970, 1, 1, 0, 0, 0, 0)
        if (tomorrow < origintime)
            tomorrow = new Date(1970, 1, 1, tomorrow.getUTCHours(), tomorrow.getUTCMinutes(), tomorrow.getUTCSeconds())
        var diffspan = Math.floor((tomorrow.getTime() - origintime.getTime())/ 1000)

		const optParam = {			
			"addresses": [
			  {
                "address"   : "455 S 4th St, Louisville, KY 40202",
                "is_depot"         : true,
                "lat"        : 38.251698,
                "lng"       : -85.757308,
                "time"            : 300,
                "time_window_start" : 28800,  
                "time_window_end"   : 30477
			  },
			  {
				"address"   : "1604 PARKRIDGE PKWY, Louisville, KY, 40214",
                "lat"        : 38.141598,
                "lng"       : -85.793846,
                "time"            : 300,
                "time_window_start" : 30477,
                "time_window_end"   : 33406
			  },
			  {
				"address"   : "1407 א53MCCOY, Louisville, KY, 40215",
                "lat"        : 38.202496,
                "lng"       : -85.786514,
                "time"            : 300,
                "time_window_start" : 33406,
                "time_window_end"   : 36228
			  },
              {
				"address"   : "4805 BELLEVUE AVE, Louisville, KY, 40215",
                "lat"        : 38.178844,
                "lng"       : -85.774864,
                "time"            : 300,
                "time_window_start" : 36228,
                "time_window_end"   : 37518
			  },
              {
				"address"   : "730 CECIL AVENUE, Louisville, KY, 40211",
                "lat"        : 38.248684,
                "lng"       : -85.821121,
                "time"            : 300,
                "time_window_start" : 37518,
                "time_window_end"   : 39550
			  },
              {
				"address"   : "650 SOUTH 29TH ST UNIT 315, Louisville, KY, 40211",
                "lat"        : 38.251923,
                "lng"       : -85.800034,
                "time"            : 300,
                "time_window_start" : 39550,
                "time_window_end"   : 41348
			  },
              {
				"address"   : "4629 HILLSIDE DRIVE, Louisville, KY, 40216",
                "lat"        : 38.176067,
                "lng"       : -85.824638,
                "time"            : 300,
                "time_window_start" : 41348,
                "time_window_end"   : 42261
			  },
              {
				"address"   : "4738 BELLEVUE AVE, Louisville, KY, 40215",
                "lat"        : 38.179806,
                "lng"       : -85.775558,
                "time"            : 300,
                "time_window_start" : 42261,
                "time_window_end"   : 45195
			  },
              {
				"address"   : "318 SO. 39TH STREET, Louisville, KY, 40212",
                "lat"        : 38.259335,
                "lng"       : -85.815094,
                "time"            : 300,
                "time_window_start" : 45195,
                "time_window_end"   : 46549
			  },
              {
				"address"   : "1324 BLUEGRASS AVE, Louisville, KY, 40215",
                "lat"        : 38.179253,
                "lng"       : -85.785118,
                "time"            : 300,
                "time_window_start" : 46549,
                "time_window_end"   : 47353
			  },
              {
				"address"   : "7305 ROYAL WOODS DR, Louisville, KY, 40214",
                "is_depot"         : true,
                "lat"        : 38.162472,
                "lng"       : -85.792854,
                "time"            : 300,
                "time_window_start" : 47353,
                "time_window_end"   : 50924
			  },
              {
				"address"   : "1661 W HILL ST, Louisville, KY, 40210",
                "lat"        : 38.229584,
                "lng"       : -85.783966,
                "time"            : 300,
                "time_window_start" : 50924,
                "time_window_end"   : 51392
			  },
              {
				"address"   : "3222 KINGSWOOD WAY, Louisville, KY, 40216",
                "lat"        : 38.210606,
                "lng"       : -85.822594,
                "time"            : 300,
                "time_window_start" : 51392,
                "time_window_end"   : 52451
			  },
              {
				"address"   : "1922 PALATKA RD, Louisville, KY, 40214",
                "lat"        : 38.153767,
                "lng"       : -85.796783,
                "time"            : 300,
                "time_window_start" : 52451,
                "time_window_end"   : 55631
			  },
              {
				"address"   : "1314 SOUTH 26TH STREET, Louisville, KY, 40210",
                "lat"        : 38.235847,
                "lng"       : -85.796852,
                "time"            : 300,
                "time_window_start" : 55631,
                "time_window_end"   : 58516
			  },
              {
				"address"   : "2135 MCCLOSKEY AVENUE, Louisville, KY, 40210",
                "lat"        : 38.218662,
                "lng"       : -85.789032,
                "time"            : 300,
                "time_window_start" : 58516,
                "time_window_end"   : 61080
			  },
              {
				"address"   : "1409 PHYLLIS AVE, Louisville, KY, 40215",
                "lat"        : 38.206154,
                "lng"       : -85.781387,
                "time"            : 100,
                "time_window_start" : 61080,
                "time_window_end"   : 61504
			  },
              {
                "address"   : "1409 PHYLLIS AVE, Louisville, KY, 40215",
                "lat"        : 38.206154,
                "lng"       : -85.781387,
                "time"            : 100,
                "time_window_start" : 61080,
                "time_window_end"   : 61504 
              },
              {   
                "address"   : "4504 SUNFLOWER AVE, Louisville, KY, 40216",
                "lat"        : 38.187511,
                "lng"       : -85.839149,
                "time"            : 300,
                "time_window_start" : 61504,
                "time_window_end"   : 62061 
              },
              {
                "address"   : "2512 GREENWOOD AVE, Louisville, KY, 40210",
                "lat"        : 38.241405,
                "lng"       : -85.795059,
                "time"            : 300,
                "time_window_start" : 62061,
                "time_window_end"   : 65012 
              },
              {
                "address"   : "5500 WILKE FARM AVE, Louisville, KY, 40216",
                "lat"        : 38.166065,
                "lng"       : -85.863319,
                "time"            : 300,
                "time_window_start" : 65012,
                "time_window_end"   : 67541 
              },
              { 
                "address"   : "3640 LENTZ AVE, Louisville, KY, 40215",
                "lat"        : 38.193283,
                "lng"       : -85.786201,
                "time"            : 300,
                "time_window_start" : 67541,
                "time_window_end"   : 69120 
              },
              { 
                "address"   : "1020 BLUEGRASS AVE, Louisville, KY, 40215",
                "lat"        : 38.17952,
                "lng"       : -85.780037,
                "time"            : 300,
                "time_window_start" : 69120,
                "time_window_end"   : 70572 
              },
              {
                "address"   : "123 NORTH 40TH ST, Louisville, KY, 40212",
                "lat"        : 38.26498,
                "lng"       : -85.814156,
                "time"            : 300,
                "time_window_start" : 70572,
                "time_window_end"   : 73177 
              },
              { 
                "address"   : "7315 ST ANDREWS WOODS CIRCLE UNIT 104, Louisville, KY, 40214",
                "lat"        : 38.151072,
                "lng"       : -85.802867,
                "time"            : 300,
                "time_window_start" : 73177,
                "time_window_end"   : 75231 
              },
              {
                "address"   : "3210 POPLAR VIEW DR, Louisville, KY, 40216",
                "lat"        : 38.182594,
                "lng"       : -85.849937,
                "time"            : 300,
                "time_window_start" : 75231,
                "time_window_end"   : 77663 
              },
              {
                "address"   : "4519 LOUANE WAY, Louisville, KY, 40216",
                "lat"        : 38.1754,
                "lng"       : -85.811447,
                "time"            : 300,
                "time_window_start" : 77663,
                "time_window_end"   : 79796
              },
              {
                "address"   : "6812 MANSLICK RD, Louisville, KY, 40214",
                "lat"        : 38.161839,
                "lng"       : -85.798279,
                "time"            : 300,
                "time_window_start" : 79796,
                "time_window_end"   : 80813 
              },
              {
                "address"   : "1524 HUNTOON AVENUE, Louisville, KY, 40215",
                "lat"        : 38.172031,
                "lng"       : -85.788353,
                "time"            : 300,
                "time_window_start" : 80813,
                "time_window_end"   : 83956 
              },
              { 
                "address"   : "1307 LARCHMONT AVE, Louisville, KY, 40215",
                "lat"        : 38.209663,
                "lng"       : -85.779816,
                "time"            : 300,
                "time_window_start" : 83956,
                "time_window_end"   : 84365 
              },
              {
                "address"   : "434 N 26TH STREET #2, Louisville, KY, 40212",
                "lat"        : 38.26844,
                "lng"       : -85.791962,
                "time"            : 300,
                "time_window_start" : 84365,
                "time_window_end"   : 85367 
              },
              { 
                "address"   : "678 WESTLAWN ST, Louisville, KY, 40211",
                "lat"        : 38.250397,
                "lng"       : -85.80629,
                "time"            : 300,
                "time_window_start" : 85367,
                "time_window_end"   : 86400 
              },
              { 
                "address"   : "2308 W BROADWAY, Louisville, KY, 40211",
                "lat"        : 38.248882,
                "lng"       : -85.790421,
                "time"            : 300,
                "time_window_start" : 86400,
                "time_window_end"   : 88703
              },
              { 
                "address"    : "2332 WOODLAND AVE, Louisville, KY, 40210",
                "lat"        : 38.233579,
                "lng"       : -85.794257,
                "time"            : 300,
                "time_window_start" : 88703,
                "time_window_end"   : 89320 
              },
              {
                "address"   : "1706 WEST ST. CATHERINE, Louisville, KY, 40210",
                "lat"        : 38.239697,
                "lng"       : -85.783928,
                "time"            : 300,
                "time_window_start" : 89320,
                "time_window_end"   : 90054
              },
              {
                "address"   : "1699 WATHEN LN, Louisville, KY, 40216",
                "lat"        : 38.216465,
                "lng"       : -85.792397,
                "time"            : 300,
                "time_window_start" : 90054,
                "time_window_end"   : 91150
              },
              {
                "address"   : "2416 SUNSHINE WAY, Louisville, KY, 40216",
                "lat"        : 38.186245,
                "lng"       : -85.831787,
                "time"            : 300,
                "time_window_start" : 91150,
                "time_window_end"   : 91915 
              },
              { 
                "address"   : "6925 MANSLICK RD, Louisville, KY, 40214",
                "lat"        : 38.158466,
                "lng"       : -85.798355,
                "time"            : 300,
                "time_window_start" : 91915,
                "time_window_end"   : 93407
              },
              { 
                "address"   : "2707 7TH ST, Louisville, KY, 40215",
                "lat"        : 38.212438,
                "lng"       : -85.785082,
                "time"            : 300,
                "time_window_start" : 93407,
                "time_window_end"   : 95992 
              },
              { 
                "address"   : "2014 KENDALL LN, Louisville, KY, 40216",
                "lat"        : 38.179394,
                "lng"       : -85.826668,
                "time"            : 300,
                "time_window_start" : 95992,
                "time_window_end"   : 99307
              },
              {
                "address"   : "612 N 39TH ST, Louisville, KY, 40212",
                "lat"        : 38.273354,
                "lng"       : -85.812012,
                "time"            : 300,
                "time_window_start" : 99307,
                "time_window_end"   : 102906 
              },
              {
                "address"   : "2215 ROWAN ST, Louisville, KY, 40212",
                "lat"        : 38.261703,
                "lng"       : -85.786781,
                "time"            : 300,
                "time_window_start" : 102906,
                "time_window_end"   : 106021 
              },
              { 
                "address"   : "1826 W. KENTUCKY ST, Louisville, KY, 40210",
                "lat"        : 38.241611,
                "lng"       : -85.78653,
                "time"            : 300,
                "time_window_start" : 106021,
                "time_window_end"   : 107276 
              },
              { 
                "address"   : "1810 GREGG AVE, Louisville, KY, 40210",
                "lat"        : 38.224716,
                "lng"       : -85.796211,
                "time"            : 300,
                "time_window_start" : 107276,
                "time_window_end"   : 107948 
              },
              {
                "address"   : "4103 BURRRELL DRIVE, Louisville, KY, 40216",
                "lat"        : 38.191753,
                "lng"       : -85.825836,
                "time"            : 300,
                "time_window_start" : 107948,
                "time_window_end"   : 108414 
              },
              {
                "address"   : "359 SOUTHWESTERN PKWY, Louisville, KY, 40212",
                "lat"        : 38.259903,
                "lng"       : -85.823463,
                "time"            : 200,
                "time_window_start" : 108414,
                "time_window_end"   : 108685
              },
              {
                "address"   : "2407 W CHESTNUT ST, Louisville, KY, 40211",
                "lat"        : 38.252781,
                "lng"       : -85.792109,
                "time"            : 300,
                "time_window_start" : 108685,
                "time_window_end"   : 110109 
              },
              {
                "address"   : "225 S 22ND ST, Louisville, KY, 40212",
                "lat"        : 38.257616,
                "lng"       : -85.786658,
                "time"            : 300,
                "time_window_start" : 110109,
                "time_window_end"   : 111375 
              },
              {
                "address"   : "1404 MCCOY AVE, Louisville, KY, 40215",
                "lat"        : 38.202122,
                "lng"       : -85.786072,
                "time"            : 300,
                "time_window_start" : 111375,
                "time_window_end"   : 112120
              },
              {
                "address"   : "117 FOUNT LANDING CT, Louisville, KY, 40212",
                "lat"        : 38.270061,
                "lng"       : -85.799438,
                "time"            : 300,
                "time_window_start" : 112120,
                "time_window_end"   : 114095
              },
              {
                "address"   : "5504 SHOREWOOD DRIVE, Louisville, KY, 40214",
                "lat"        : 38.145851,
                "lng"       : -85.7798,
                "time"            : 300,
                "time_window_start" : 114095,
                "time_window_end"   : 115743
              },
              {
                "address"   : "1406 CENTRAL AVE, Louisville, KY, 40208",
                "lat"        : 38.211025,
                "lng"       : -85.780251,
                "time"            : 300,
                "time_window_start" : 115743,
                "time_window_end"   : 117716
              },
              { 
                "address"   : "901 W WHITNEY AVE, Louisville, KY, 40215",
                "lat"        : 38.194115,
                "lng"       : -85.77494,
                "time"            : 300,
                "time_window_start" : 117716,
                "time_window_end"   : 119078
              },
              { 
                "address"   : "2109 SCHAFFNER AVE, Louisville, KY, 40210",
                "lat"        : 38.219699,
                "lng"       : -85.779363,
                "time"            : 300,
                "time_window_start" : 119078,
                "time_window_end"   : 121147
              },
              { 
                "address"   : "2906 DIXIE HWY, Louisville, KY, 40216",
                "lat"        : 38.209278,
                "lng"       : -85.798653,
                "time"            : 300,
                "time_window_start" : 121147,
                "time_window_end"   : 124281
              },
              { 
                "address"   : "814 WWHITNEY AVE, Louisville, KY, 40215",
                "lat"        : 38.193596,
                "lng"       : -85.773521,
                "time"            : 300,
                "time_window_start" : 124281,
                "time_window_end"   : 124675
              },
              { 
                "address"   : "1610 ALGONQUIN PWKY, Louisville, KY, 40210",
                "lat"        : 38.222153,
                "lng"       : -85.784187,
                "time"            : 300,
                "time_window_start" : 124675,
                "time_window_end"   : 127148
              },
              {
                "address"   : "3524 WHEELER AVE, Louisville, KY, 40215",
                "lat"        : 38.195293,
                "lng"       : -85.788643,
                "time"            : 300,
                "time_window_start" : 127148,
                "time_window_end"   : 130667
              },
              {
                "address"   : "5009 NEW CUT RD, Louisville, KY, 40214",
                "lat"        : 38.165905,
                "lng"       : -85.779701,
                "time"            : 300,
                "time_window_start" : 130667,
                "time_window_end"   : 131980
              },
              {
                "address"   : "3122 ELLIOTT AVE, Louisville, KY, 40211",
                "lat"        : 38.251213,
                "lng"       : -85.804199,
                "time"            : 300,
                "time_window_start" : 131980,
                "time_window_end"   : 134402
              },
              {
                "address"   : "911 GAGEL AVE, Louisville, KY, 40216",
                "lat"        : 38.173512,
                "lng"       : -85.807854,
                "time"            : 300,
                "time_window_start" : 134402,
                "time_window_end"   : 136787
              },
              { 
                "address"   : "4020 GARLAND AVE #lOOA, Louisville, KY, 40211",
                "lat"        : 38.246181,
                "lng"       : -85.818901,
                "time"            : 300,
                "time_window_start" : 136787,
                "time_window_end"   : 138073
              },
              { 
                "address"   : "5231 MT HOLYOKE DR, Louisville, KY, 40216",
                "lat"        : 38.169369,
                "lng"       : -85.85704,
                "time"            : 300,
                "time_window_start" : 138073,
                "time_window_end"   : 141407
              },
              {
                "address"   : "1339 28TH S #2, Louisville, KY, 40211",
                "lat"        : 38.235275,
                "lng"       : -85.800156,
                "time"            : 300,
                "time_window_start" : 141407,
                "time_window_end"   : 143561
              },
              {
                "address"   : "836 S 36TH ST, Louisville, KY, 40211",
                "lat"        : 38.24651,
                "lng"       : -85.811234,
                "time"            : 300,
                "time_window_start" : 143561,
                "time_window_end"   : 145941
              },
              {
                "address"   : "2132 DUNCAN STREET, Louisville, KY, 40212",
                "lat"        : 38.262135,
                "lng"       : -85.785172,
                "time"            : 300,
                "time_window_start" : 145941,
                "time_window_end"   : 148296
              },
              { 
                "address"   : "3529 WHEELER AVE, Louisville, KY, 40215",
                "lat"        : 38.195057,
                "lng"       : -85.787949,
                "time"            : 300,
                "time_window_start" : 148296,
                "time_window_end"   : 150177
              },
              {
                "address"   : "2829 DE MEL #11, Louisville, KY, 40214",
                "lat"        : 38.171662,
                "lng"       : -85.807271,
                "time"            : 300,
                "time_window_start" : 150177,
                "time_window_end"   : 150981
              },
              { 
                "address"   : "1325 EARL AVENUE, Louisville, KY, 40215",
                "lat"        : 38.204556,
                "lng"       : -85.781555,
                "time"            : 300,
                "time_window_start" : 150981,
                "time_window_end"   : 151854
              },
              {
                "address"   : "3632 MANSLICK RD #10, Louisville, KY, 40215",
                "lat"        : 38.193542,
                "lng"       : -85.801147,
                "time"            : 300,
                "time_window_start" : 151854,
                "time_window_end"   : 152613
              },
              {
                "address"   : "637 S 41ST ST, Louisville, KY, 40211",
                "lat"        : 38.253632,
                "lng"       : -85.81897,
                "time"            : 300,
                "time_window_start" : 152613,
                "time_window_end"   : 156131
              },
              { 
                "address"   : "3420 VIRGINIA AVENUE, Louisville, KY, 40211",
                "lat"        : 38.238693,
                "lng"       : -85.811386,
                "time"            : 300,
                "time_window_start" : 156131,
                "time_window_end"   : 157212
              },
              {
                "address"   : "3501 MALIBU CT APT 6, Louisville, KY, 40216",
                "lat"        : 38.166481,
                "lng"       : -85.825928,
                "time"            : 300,
                "time_window_start" : 157212,
                "time_window_end"   : 158655
              },
              { 
                "address"   : "4912 DIXIE HWY, Louisville, KY, 40216",
                "lat"        : 38.170728,
                "lng"       : -85.826817,
                "time"            : 300,
                "time_window_start" : 158655,
                "time_window_end"   : 159145
              },
              { 
                "address"   : "7720 DINGLEDELL RD, Louisville, KY, 40214",
                "lat"        : 38.162472,
                "lng"       : -85.792854,
                "time"            : 300,
                "time_window_start" : 159145,
                "time_window_end"   : 161831
              },
              { 
                "address"   : "2123 RATCLIFFE AVE, Louisville, KY, 40210",
                "lat"        : 38.21978,
                "lng"       : -85.797615,
                "time"            : 300,
                "time_window_start" : 161831,
                "time_window_end"   : 163705
              },
              {  
                "address"   : "1321 OAKWOOD AVE, Louisville, KY, 40215",
                "lat"        : 38.17704,
                "lng"       : -85.783829,
                "time"            : 300,
                "time_window_start" : 163705,
                "time_window_end"   : 164953
              },
              {
                "address"   : "2223 WEST KENTUCKY STREET, Louisville, KY, 40210",
                "lat"        : 38.242516,
                "lng"       : -85.790695,
                "time"            : 300,
                "time_window_start" : 164953,
                "time_window_end"   : 166189
              },
              {
                "address"   : "8025 GLIMMER WAY #3308, Louisville, KY, 40214",
                "lat"        : 38.131981,
                "lng"       : -85.77935,
                "time"            : 300,
                "time_window_start" : 166189,
                "time_window_end"   : 166640
              },
              {
                "address"   : "1155 S 28TH ST, Louisville, KY, 40211",
                "lat"        : 38.238621,
                "lng"       : -85.799911,
                "time"            : 300,
                "time_window_start" : 166640,
                "time_window_end"   : 168147
              },
              { 
                "address"   : "840 IROQUOIS AVE, Louisville, KY, 40214",
                "lat"        : 38.166355,
                "lng"       : -85.779396,
                "time"            : 300,
                "time_window_start" : 168147,
                "time_window_end"   : 170385
              },
              { 
                "address"   : "5573 BRUCE AVE, Louisville, KY, 40214",
                "lat"        : 38.145222,
                "lng"       : -85.779205,
                "time"            : 300,
                "time_window_start" : 170385,
                "time_window_end"   : 171096
              },
              {
                "address"   : "1727 GALLAGHER, Louisville, KY, 40210",
                "lat"        : 38.239334,
                "lng"       : -85.784882,
                "time"            : 300,
                "time_window_start" : 171096,
                "time_window_end"   : 171951
              },
              {
                "address"   : "1309 CATALPA ST APT 204, Louisville, KY, 40211",
                "lat"        : 38.236524,
                "lng"       : -85.801619,
                "time"            : 300,
                "time_window_start" : 171951,
                "time_window_end"   : 172393
              },
              {
                "address"   : "1330 ALGONQUIN PKWY, Louisville, KY, 40208",
                "lat"        : 38.219846,
                "lng"       : -85.777344,
                "time"            : 300,
                "time_window_start" : 172393,
                "time_window_end"   : 175337
              },
              {
                "address"   : "823 SUTCLIFFE, Louisville, KY, 40211",
                "lat"        : 38.246956,
                "lng"       : -85.811569,
                "time"            : 300,
                "time_window_start" : 175337,
                "time_window_end"   : 176867
             },
             {
                "address"   : "4405 CHURCHMAN AVENUE #2, Louisville, KY, 40215",
                "lat"        : 38.177768,
                "lng"       : -85.792545,
                "time"            : 300,
                "time_window_start" : 176867,
                "time_window_end"   : 178051
             },
             {
                "address"   : "3211 DUMESNIL ST #1, Louisville, KY, 40211",
                "lat"        : 38.237789,
                "lng"       : -85.807968,
                "time"            : 300,
                "time_window_start" : 178051,
                "time_window_end"   : 179083
             },
             { 
                "address"   : "3904 WEWOKA AVE, Louisville, KY, 40212",
                "lat"        : 38.270367,
                "lng"       : -85.813118,
                "time"            : 300,
                "time_window_start" : 179083,
                "time_window_end"   : 181543
             },
             { 
                "address"   : "660 SO. 42ND STREET, Louisville, KY, 40211",
                "lat"        : 38.252865,
                "lng"       : -85.822624,
                "time"            : 300,
                "time_window_start" : 181543,
                "time_window_end"   : 184193
             },
             {
                "address"   : "3619  LENTZ  AVE, Louisville, KY, 40215",
                "lat"        : 38.193249,
                "lng"       : -85.785492,
                "time"            : 300,
                "time_window_start" : 184193,
                "time_window_end"   : 185853
             },
             {
                "address"   : "4305  STOLTZ  CT, Louisville, KY, 40215",
                "lat"        : 38.178707,
                "lng"       : -85.787292,
                "time"            : 300,
                "time_window_start" : 185853,
                "time_window_end"   : 187252 
             }
			],
			"parameters": {
				        "algorithm_type": 4,
                "route_name": "Multiple Depot, Multiple Driver, Time Window",
                "route_date": diffspan,
                "route_time": 60 * 60 * 7,
                "rt": true,
                "route_max_duration": 86400 * 3,
                "vehicle_capacity": 99,
		        		"vehicle_max_distance_mi": 99999,
                "optimize": "Time",
                "distance_unit": "mi",
		        		"device_type": "web",
		        		"travel_mode": "Driving",
		        		"metric": 3
			}
		}
		
		route4me.Routes.routeexamples_optiomization(optParam, (err, route) => {
			debug("error  ", err)
			debug("result ", route)
			expect(err).is.null
			expect(route).exist
			console.log(route)
		})
		// TODO: remove `done` call from examples
		done()
	})
})