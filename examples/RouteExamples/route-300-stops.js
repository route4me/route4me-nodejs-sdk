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
        
        var tomorrow = new Date()
        var origintime = new Date(1970, 1, 1, 0, 0, 0, 0)
        if (tomorrow < origintime)
            tomorrow = new Date(1970, 1, 1, tomorrow.getUTCHours(), tomorrow.getUTCMinutes(), tomorrow.getUTCSeconds())
        var diffspan = Math.floor((tomorrow.getTime() - origintime.getTime())/ 1000)

		const optParam = {			
			"addresses": [
                 {
                    "address" : "Krausers, 595 Palmer Avenue, Hazlet, NJ, 07734",
                    "alias"         : "Krausers, 595 Palmer Avenue, Hazlet, NJ, 07734",
                    "is_depot"       : false,
                    "lat"      : 40.429671,
                    "lng"     : -74.132774,
                    "time"          : 0
                 },

                 {
                    "address" : "Krauszer's Food Store, 3193 Washington Ave, Parlin, NJ, 08859",
                    "alias"         : "Krauszer's Food Store, 3193 Washington Ave, Parlin, NJ, 08859",
                    "is_depot"       : false,
                    "lat"      : 40.468223,
                    "lng"     : -74.306587,
                    "time"          : 0
                 },

                 {
                    "address" : "Krauzer Foods, 58 Jackson Street, South River, NJ, 08882",
                    "alias"         : "Krauzer Foods, 58 Jackson Street, South River, NJ, 08882",
                    "is_depot"       : false,
                    "lat"      : 40.450583,
                    "lng"     : -74.382182,
                    "time"          : 0
                 },

                 {
                    "address" : "Krauzers Food Market, 546 Park Avenue, Freehold, NJ, 07728",
                    "alias"         : "Krauzers Food Market, 546 Park Avenue, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.249606,
                    "lng"     : -74.271902,
                    "time"          : 0
                 },

                 {
                    "address" : "Krauzers South River, 81 Main Street, South River, NJ, 08882",
                    "alias"         : "Krauzers South River, 81 Main Street, South River, NJ, 08882",
                    "is_depot"       : false,
                    "lat"      : 40.450583,
                    "lng"     : -74.382182,
                    "time"          : 0
                 },

                 {
                    "address" : "Krauzers, 309 Main Street, Sayerville, NJ, 08872",
                    "alias"         : "Krauzers, 309 Main Street, Sayerville, NJ, 08872",
                    "is_depot"       : false,
                    "lat"      : 40.470359,
                    "lng"     : -74.359202,
                    "time"          : 0
                 },
                {
                    "address" : "Kushira, 22-24 Paterson Ave, Newark, NJ, 07105",
                    "alias"         : "Kushira, 22-24 Paterson Ave, Newark, NJ, 07105",
                    "is_depot"       : false,
                    "lat"      : 40.723126,
                    "lng"     : -74.141612,
                    "time"          : 0
                 },

                 {
                    "address" : "Kwik Farms, 590 Shrewsbury Ave, Tinton Falls, NJ, 07724",
                    "alias"         : "Kwik Farms, 590 Shrewsbury Ave, Tinton Falls, NJ, 07724",
                    "is_depot"       : false,
                    "lat"      : 40.330025,
                    "lng"     : -74.074258,
                    "time"          : 0
                 },

                 {
                    "address" : "La Bagel #3, 377 Georges Street, New Brunswick, NJ, 08776",
                    "alias"         : "La Bagel #3, 377 Georges Street, New Brunswick, NJ, 08776",
                    "is_depot"       : false,
                    "lat"      : 40.495696,
                    "lng"     : -74.443867,
                    "time"          : 0
                 },

                 {
                    "address" : "La China Poblana, 114-116 Shrewbury Avenue, Red Bank, NJ, 07701",
                    "alias"         : "La China Poblana, 114-116 Shrewbury Avenue, Red Bank, NJ, 07701",
                    "is_depot"       : false,
                    "lat"      : 40.346942,
                    "lng"     : -74.076597,
                    "time"          : 0
                 },

                 {
                    "address" : "La Chiquita, 36 Astor St, Newark, NJ, 07108",
                    "alias"         : "La Chiquita, 36 Astor St, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.722866,
                    "lng"     : -74.183561,
                    "time"          : 0
                 },

                 {
                    "address" : "La Esperamza Food Market, 279 Ellis Avenue, Newark, NJ, 07103",
                    "alias"         : "La Esperamza Food Market, 279 Ellis Avenue, Newark, NJ, 07103",
                    "is_depot"       : false,
                    "lat"      : 40.756185,
                    "lng"     : -74.17351,
                    "time"          : 0
                 },

                 {
                    "address" : "La Mich Oceana, 109 Taylor Ave, Manasquan, NJ, 08736",
                    "alias"         : "La Mich Oceana, 109 Taylor Ave, Manasquan, NJ, 08736",
                    "is_depot"       : false,
                    "lat"      : 40.124934,
                    "lng"     : -74.046072,
                    "time"          : 0
                 },

                 {
                    "address" : "La Nany, 356 Union Ave, Paterson, NJ, 07503",
                    "alias"         : "La Nany, 356 Union Ave, Paterson, NJ, 07503",
                    "is_depot"       : false,
                    "lat"      : 40.919728,
                    "lng"     : -74.187345,
                    "time"          : 0
                 },

                 {
                    "address" : "La Palma Villa Grocery 1, 18 Broad Street, Freehold, NJ, 07728",
                    "alias"         : "La Palma Villa Grocery 1, 18 Broad Street, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.259859,
                    "lng"     : -74.278887,
                    "time"          : 0
                 },

                 {
                    "address" : "La Posada, 1055 Main Ave, Passaic, NJ, 07055",
                    "alias"         : "La Posada, 1055 Main Ave, Passaic, NJ, 07055",
                    "is_depot"       : false,
                    "lat"      : 40.872648,
                    "lng"     : -74.137303,
                    "time"          : 0
                 },

                 {
                    "address" : "La Tipica Grocery, 2500 Artic Avenue, Atlantic City, NJ, 08401",
                    "alias"         : "La Tipica Grocery, 2500 Artic Avenue, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.357862,
                    "lng"     : -74.442969,
                    "time"          : 0
                 },
                {
                    "address" : "Las Paisas, 143 Broadway, Prospect Park, NJ, 07508",
                    "alias"         : "Las Paisas, 143 Broadway, Prospect Park, NJ, 07508",
                    "is_depot"       : false,
                    "lat"      : 40.858621,
                    "lng"     : -74.130554,
                    "time"          : 0
                 },

                 {
                    "address" : "Las Placitas Mexicana, 317 Handy St, New Brunswick, NJ, 08070",
                    "alias"         : "Las Placitas Mexicana, 317 Handy St, New Brunswick, NJ, 08070",
                    "is_depot"       : false,
                    "lat"      : 40.490362,
                    "lng"     : -74.452509,
                    "time"          : 0
                 },

                 {
                    "address" : "Latino Groc, 752 River St, Paterson, NJ, 07524",
                    "alias"         : "Latino Groc, 752 River St, Paterson, NJ, 07524",
                    "is_depot"       : false,
                    "lat"      : 40.93793,
                    "lng"     : -74.151234,
                    "time"          : 0
                 },

                 {
                    "address" : "Linar, 162 Monmouth St, Red Bank, NJ, 07701",
                    "alias"         : "Linar, 162 Monmouth St, Red Bank, NJ, 07701",
                    "is_depot"       : false,
                    "lat"      : 40.349033,
                    "lng"     : -74.073362,
                    "time"          : 0
                 },

                 {
                    "address" : "Lincroft Senior Center, 41 Hurley Lane, Lincroft, NJ, 07758",
                    "alias"         : "Lincroft Senior Center, 41 Hurley Lane, Lincroft, NJ, 07758",
                    "is_depot"       : false,
                    "lat"      : 40.33218,
                    "lng"     : -74.124581,
                    "time"          : 0
                 },

                 {
                    "address" : "Long Branch Deli, 156 Long Branch Avenue, Long Branch, NJ, 07740",
                    "alias"         : "Long Branch Deli, 156 Long Branch Avenue, Long Branch, NJ, 07740",
                    "is_depot"       : false,
                    "lat"      : 40.31097,
                    "lng"     : -73.984022,
                    "time"          : 0
                 },

                 {
                    "address" : "Lopez Spmkt, 995 Bergen St, Newark, NJ, 07108",
                    "alias"         : "Lopez Spmkt, 995 Bergen St, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.709927,
                    "lng"     : -74.206793,
                    "time"          : 0
                 },

                 {
                    "address" : "Ls Deli, 175 Elizabeth Ave, Newark, NJ, 07108",
                    "alias"         : "Ls Deli, 175 Elizabeth Ave, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.717116,
                    "lng"     : -74.190947,
                    "time"          : 0
                 },

                 {
                    "address" : "Lucky 7 Deli, 1017 Rt 36, Union Beach, NJ, 07735",
                    "alias"         : "Lucky 7 Deli, 1017 Rt 36, Union Beach, NJ, 07735",
                    "is_depot"       : false,
                    "lat"      : 40.438336,
                    "lng"     : -74.163793,
                    "time"          : 0
                 },

                 {
                    "address" : "Lucky Superstore, 715 Main Street, Asbury Park, NJ, 07712",
                    "alias"         : "Lucky Superstore, 715 Main Street, Asbury Park, NJ, 07712",
                    "is_depot"       : false,
                    "lat"      : 40.220269,
                    "lng"     : -74.012208,
                    "time"          : 0
                 },

                 {
                    "address" : "Luisa Deli & Groc, 123 Elizabeth Ave, Newark, NJ, 07108",
                    "alias"         : "Luisa Deli & Groc, 123 Elizabeth Ave, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.718769,
                    "lng"     : -74.190058,
                    "time"          : 0
                 },

                 {
                    "address" : "Lymensada Mini Mart, 132 East 4th Street, Lakewood, NJ, 08701",
                    "alias"         : "Lymensada Mini Mart, 132 East 4th Street, Lakewood, NJ, 08701",
                    "is_depot"       : false,
                    "lat"      : 40.094515,
                    "lng"     : -74.206256,
                    "time"          : 0
                 },

                 {
                    "address" : "Madison Deli, 69 Route 34, South Amboy, NJ, 08831",
                    "alias"         : "Madison Deli, 69 Route 34, South Amboy, NJ, 08831",
                    "is_depot"       : false,
                    "lat"      : 40.432301,
                    "lng"     : -74.297294,
                    "time"          : 0
                 },

                 {
                    "address" : "Manhattan Bagel, 720 Newman Springs Rd, Tinton Falls, NJ, 07738",
                    "alias"         : "Manhattan Bagel, 720 Newman Springs Rd, Tinton Falls, NJ, 07738",
                    "is_depot"       : false,
                    "lat"      : 40.331405,
                    "lng"     : -74.123225,
                    "time"          : 0
                 },

                 {
                    "address" : "Manhattan Bagels, 881 Main Street, Sayerville, NJ, 08872",
                    "alias"         : "Manhattan Bagels, 881 Main Street, Sayerville, NJ, 08872",
                    "is_depot"       : false,
                    "lat"      : 40.476242,
                    "lng"     : -74.31866,
                    "time"          : 0
                 },

                 {
                    "address" : "Maywood Mkt, 74 West Pleasant Ave, Hackensack, NJ, 07601",
                    "alias"         : "Maywood Mkt, 74 West Pleasant Ave, Hackensack, NJ, 07601",
                    "is_depot"       : false,
                    "lat"      : 40.904762,
                    "lng"     : -74.063701,
                    "time"          : 0
                 },

                 {
                    "address" : "Mcbride Conv, 500 Mcbride Ave, Paterson, NJ, 07513",
                    "alias"         : "Mcbride Conv, 500 Mcbride Ave, Paterson, NJ, 07513",
                    "is_depot"       : false,
                    "lat"      : 40.907133,
                    "lng"     : -74.195232,
                    "time"          : 0
                 },

                 {
                    "address" : "McKinley Convenience, 100 McKinley Convenience, Manahawkin, NJ, 08050",
                    "alias"         : "McKinley Convenience, 100 McKinley Convenience, Manahawkin, NJ, 08050",
                    "is_depot"       : false,
                    "lat"      : 39.69202,
                    "lng"     : -74.268679,
                    "time"          : 0
                 },

                 {
                    "address" : "Mejias Grc, 164 Madison Ave, Passaic, NJ, 07055",
                    "alias"         : "Mejias Grc, 164 Madison Ave, Passaic, NJ, 07055",
                    "is_depot"       : false,
                    "lat"      : 40.864086,
                    "lng"     : -74.124176,
                    "time"          : 0
                 },

                 {
                    "address" : "Mendoker Quality Bakery, 530 Shrewsbury Avenue, Tinton Falls, NJ, 07701",
                    "alias"         : "Mendoker Quality Bakery, 530 Shrewsbury Avenue, Tinton Falls, NJ, 07701",
                    "is_depot"       : false,
                    "lat"      : 40.348865,
                    "lng"     : -74.437009,
                    "time"          : 0
                 },

                 {
                    "address" : "Metropan, 420 21st Ave, Paterson, NJ, 07514",
                    "alias"         : "Metropan, 420 21st Ave, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.906114,
                    "lng"     : -74.154414,
                    "time"          : 0
                 },

                 {
                    "address" : "Mi Casa, 67 E South St, Freehold, NJ, 07728",
                    "alias"         : "Mi Casa, 67 E South St, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.256763,
                    "lng"     : -74.273335,
                    "time"          : 0
                 },

                 {
                    "address" : "Mid Shore Meats, 801 Fisher Blvd, Toms River, NJ, 08753",
                    "alias"         : "Mid Shore Meats, 801 Fisher Blvd, Toms River, NJ, 08753",
                    "is_depot"       : false,
                    "lat"      : 39.967992,
                    "lng"     : -74.131572,
                    "time"          : 0
                 },

                 {
                    "address" : "Millstone Food Market, 673 Route 33, Millstone, NJ, 08535",
                    "alias"         : "Millstone Food Market, 673 Route 33, Millstone, NJ, 08535",
                    "is_depot"       : false,
                    "lat"      : 40.261439,
                    "lng"     : -74.435975,
                    "time"          : 0
                 },

                 {
                    "address" : "Minute Mart, 148 White Head Ave, South River, NJ, 08882",
                    "alias"         : "Minute Mart, 148 White Head Ave, South River, NJ, 08882",
                    "is_depot"       : false,
                    "lat"      : 40.447007,
                    "lng"     : -74.373784,
                    "time"          : 0
                 },

                 {
                    "address" : "Mm Groc, 1272 Springfield Ave, Passaic, NJ, 07055",
                    "alias"         : "Mm Groc, 1272 Springfield Ave, Passaic, NJ, 07055",
                    "is_depot"       : false,
                    "lat"      : 40.724698,
                    "lng"     : -74.241679,
                    "time"          : 0
                 },

                 {
                    "address" : "Moosas Market, 230 N. New Jersey Ave, Atlantic City, NJ, 08401",
                    "alias"         : "Moosas Market, 230 N. New Jersey Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.369259,
                    "lng"     : -74.421825,
                    "time"          : 0
                 },
                {
                    "address" : "Morell & Cepeda, 315 21st Street, Paterson, NJ, 07514",
                    "alias"         : "Morell & Cepeda, 315 21st Street, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.907441,
                    "lng"     : -74.16033,
                    "time"          : 0
                 },

                 {
                    "address" : "Morganville Deli & Liquor, 172 Tenant Road, Morganville, NJ, 07751",
                    "alias"         : "Morganville Deli & Liquor, 172 Tenant Road, Morganville, NJ, 07751",
                    "is_depot"       : false,
                    "lat"      : 40.368815,
                    "lng"     : -74.264081,
                    "time"          : 0
                 },

                 {
                    "address" : "Munchies, 314 Sylvania Ave, Neptune, NJ, 07753",
                    "alias"         : "Munchies, 314 Sylvania Ave, Neptune, NJ, 07753",
                    "is_depot"       : false,
                    "lat"      : 40.205113,
                    "lng"     : -74.045022,
                    "time"          : 0
                 },

                 {
                    "address" : "My Placita, 204 Dayron, Paterson, NJ, 07504",
                    "alias"         : "My Placita, 204 Dayron, Paterson, NJ, 07504",
                    "is_depot"       : false,
                    "lat"      : 40.91279,
                    "lng"     : -74.138676,
                    "time"          : 0
                 },

                 {
                    "address" : "Nashville Market, 5101 Vetnor Ave, Vetnor City, NJ, 08406",
                    "alias"         : "Nashville Market, 5101 Vetnor Ave, Vetnor City, NJ, 08406",
                    "is_depot"       : false,
                    "lat"      : 39.344312,
                    "lng"     : -74.469856,
                    "time"          : 0
                 },

                 {
                    "address" : "Natures Reward, 3124 Bridge Ave, Point Pleasant, NJ, 08742",
                    "alias"         : "Natures Reward, 3124 Bridge Ave, Point Pleasant, NJ, 08742",
                    "is_depot"       : false,
                    "lat"      : 40.076345,
                    "lng"     : -74.085964,
                    "time"          : 0
                 },

                 {
                    "address" : "Neptune Deli, 1-211 Route 35 South, Neptune City, NJ, 07753",
                    "alias"         : "Neptune Deli, 1-211 Route 35 South, Neptune City, NJ, 07753",
                    "is_depot"       : false,
                    "lat"      : 40.214545,
                    "lng"     : -74.030095,
                    "time"          : 0
                 },

                 {
                    "address" : "New Bergen Food, 943 Bergen St, Elizabeth, NJ, 07206",
                    "alias"         : "New Bergen Food, 943 Bergen St, Elizabeth, NJ, 07206",
                    "is_depot"       : false,
                    "lat"      : 40.653461,
                    "lng"     : -74.197261,
                    "time"          : 0
                 },

                 {
                    "address" : "New City Grocery, 2608 Pacific Ave, Atlantic City, NJ, 08401",
                    "alias"         : "New City Grocery, 2608 Pacific Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.354239,
                    "lng"     : -74.442334,
                    "time"          : 0
                 },

                 {
                    "address" : "New Farmers Market, 2732 Atlantic Ave, Atlantic City, NJ, 08401",
                    "alias"         : "New Farmers Market, 2732 Atlantic Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.354931,
                    "lng"     : -74.445481,
                    "time"          : 0
                 },

                 {
                    "address" : "New Latin Deli, 3623 Winchester Ave, Atlantic City, NJ, 08401",
                    "alias"         : "New Latin Deli, 3623 Winchester Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.35306,
                    "lng"     : -74.455537,
                    "time"          : 0
                 },

                 {
                    "address" : "New York Deli, 649 N. New York avenue, Atlantic City, NJ, 08401",
                    "alias"         : "New York Deli, 649 N. New York avenue, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.369198,
                    "lng"     : -74.434158,
                    "time"          : 0
                 },

                 {
                    "address" : "Nicasias, 253 Main St, Keansburg, NJ, 07734",
                    "alias"         : "Nicasias, 253 Main St, Keansburg, NJ, 07734",
                    "is_depot"       : false,
                    "lat"      : 40.443224,
                    "lng"     : -74.129878,
                    "time"          : 0
                 },

                 {
                    "address" : "Nohelis Groc, 364 5th Ave, Newark, NJ, 07112",
                    "alias"         : "Nohelis Groc, 364 5th Ave, Newark, NJ, 07112",
                    "is_depot"       : false,
                    "lat"      : 40.760559,
                    "lng"     : -74.18531,
                    "time"          : 0
                 },

                 {
                    "address" : "Nouri Bros, 999 Main St, Paterson, NJ, 07503",
                    "alias"         : "Nouri Bros, 999 Main St, Paterson, NJ, 07503",
                    "is_depot"       : false,
                    "lat"      : 40.894001,
                    "lng"     : -74.158519,
                    "time"          : 0
                 },

                 {
                    "address" : "Noya Bazaar, 139 Wayne Ave, Paterson, NJ, 07505",
                    "alias"         : "Noya Bazaar, 139 Wayne Ave, Paterson, NJ, 07505",
                    "is_depot"       : false,
                    "lat"      : 40.919132,
                    "lng"     : -74.186458,
                    "time"          : 0
                 },

                 {
                    "address" : "Oakhill Deli, 78 South Street, Freehold, NJ, 07728",
                    "alias"         : "Oakhill Deli, 78 South Street, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.2566,
                    "lng"     : -74.273895,
                    "time"          : 0
                 },

                 {
                    "address" : "Ocean Bay Diner, 1803 Route 35 South, Sayerville, NJ, 08872",
                    "alias"         : "Ocean Bay Diner, 1803 Route 35 South, Sayerville, NJ, 08872",
                    "is_depot"       : false,
                    "lat"      : 40.464455,
                    "lng"     : -74.267104,
                    "time"          : 0
                 },

                 {
                    "address" : "Ocean County Correctional Facility, 114 Hooper Ave, Toms River, NJ, 08753",
                    "alias"         : "Ocean County Correctional Facility, 114 Hooper Ave, Toms River, NJ, 08753",
                    "is_depot"       : false,
                    "lat"      : 39.953836,
                    "lng"     : -74.194426,
                    "time"          : 0
                 },

                 {
                    "address" : "Ocean Gate Market, 216 Ocean Gate Market, Ocean Gate, NJ, 08740",
                    "alias"         : "Ocean Gate Market, 216 Ocean Gate Market, Ocean Gate, NJ, 08740",
                    "is_depot"       : false,
                    "lat"      : 39.928493,
                    "lng"     : -74.140786,
                    "time"          : 0
                 },

                 {
                    "address" : "One Stop Deli, 1826 Rt 35 North, Sayerville, NJ, 08872",
                    "alias"         : "One Stop Deli, 1826 Rt 35 North, Sayerville, NJ, 08872",
                    "is_depot"       : false,
                    "lat"      : 40.465032,
                    "lng"     : -74.267977,
                    "time"          : 0
                 },

                 {
                    "address" : "One Stop, 450 Rt 35 N, Neptune, NJ, 07753",
                    "alias"         : "One Stop, 450 Rt 35 N, Neptune, NJ, 07753",
                    "is_depot"       : false,
                    "lat"      : 40.219447,
                    "lng"     : -74.032187,
                    "time"          : 0
                 },

                 {
                    "address" : "Original Quality Market, 416 11th Avenue, East Orange, NJ, 07017",
                    "alias"         : "Original Quality Market, 416 11th Avenue, East Orange, NJ, 07017",
                    "is_depot"       : false,
                    "lat"      : 40.921862,
                    "lng"     : -74.150214,
                    "time"          : 0
                 },

                 {
                    "address" : "Pacific Mini, 2610 Pacific Ave, Atlantic City, NJ, 08401",
                    "alias"         : "Pacific Mini, 2610 Pacific Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.35422,
                    "lng"     : -74.442381,
                    "time"          : 0
                 },

                 {
                    "address" : "Patel Foods, 989 Route 9 North, Parlin, NJ, 08859",
                    "alias"         : "Patel Foods, 989 Route 9 North, Parlin, NJ, 08859",
                    "is_depot"       : false,
                    "lat"      : 40.455067,
                    "lng"     : -74.295686,
                    "time"          : 0
                 },

                 {
                    "address" : "Pathway Market, 42 Pilgrim pathway, Ocean Grove, NJ, 07756",
                    "alias"         : "Pathway Market, 42 Pilgrim pathway, Ocean Grove, NJ, 07756",
                    "is_depot"       : false,
                    "lat"      : 40.212786,
                    "lng"     : -74.00703,
                    "time"          : 0
                 },

                 {
                    "address" : "Pats Mkt, 677 Newman Springs Rd, Lincroft, NJ, 07738",
                    "alias"         : "Pats Mkt, 677 Newman Springs Rd, Lincroft, NJ, 07738",
                    "is_depot"       : false,
                    "lat"      : 40.330632,
                    "lng"     : -74.119752,
                    "time"          : 0
                 },

                 {
                    "address" : "Pena And Morei, 307 Broadway, Heldon, NJ, 07508",
                    "alias"         : "Pena And Morei, 307 Broadway, Heldon, NJ, 07508",
                    "is_depot"       : false,
                    "lat"      : 40.956753,
                    "lng"     : -74.188582,
                    "time"          : 0
                 },

                 {
                    "address" : "Picks Deli, 1500 Main Street, Belmar, NJ, 07719",
                    "alias"         : "Picks Deli, 1500 Main Street, Belmar, NJ, 07719",
                    "is_depot"       : false,
                    "lat"      : 40.175265,
                    "lng"     : -74.026946,
                    "time"          : 0
                 },

                 {
                    "address" : "Pinebrook Liquors & Deli, 1870 Wayside Road, Tinton Falls, NJ, 07724",
                    "alias"         : "Pinebrook Liquors & Deli, 1870 Wayside Road, Tinton Falls, NJ, 07724",
                    "is_depot"       : false,
                    "lat"      : 40.28636,
                    "lng"     : -74.095283,
                    "time"          : 0
                 },

                 {
                    "address" : "Pleasantville Gas, 1101  S Main St, Pleasantville, NJ, 08232",
                    "alias"         : "Pleasantville Gas, 1101  S Main St, Pleasantville, NJ, 08232",
                    "is_depot"       : false,
                    "lat"      : 39.381348,
                    "lng"     : -74.532306,
                    "time"          : 0
                 },

                 {
                    "address" : "Pochi, 1341 Springfield Ave, Maywood, NJ, 07607",
                    "alias"         : "Pochi, 1341 Springfield Ave, Maywood, NJ, 07607",
                    "is_depot"       : false,
                    "lat"      : 40.724029,
                    "lng"     : -74.244734,
                    "time"          : 0
                 },

                 {
                    "address" : "Ponte Vecchio, 3863 Route 516, Old Bridge, NJ, 08857",
                    "alias"         : "Ponte Vecchio, 3863 Route 516, Old Bridge, NJ, 08857",
                    "is_depot"       : false,
                    "lat"      : 40.402437,
                    "lng"     : -74.298044,
                    "time"          : 0
                 },

                 {
                    "address" : "Prime Deli, 1221 Asbury Avenue, Asbury Park, NJ, 07712",
                    "alias"         : "Prime Deli, 1221 Asbury Avenue, Asbury Park, NJ, 07712",
                    "is_depot"       : false,
                    "lat"      : 40.222173,
                    "lng"     : -74.01957,
                    "time"          : 0
                 },

                 {
                    "address" : "Prime Market, 449 Herbertsville Road, Bricktown, NJ, 08724",
                    "alias"         : "Prime Market, 449 Herbertsville Road, Bricktown, NJ, 08724",
                    "is_depot"       : false,
                    "lat"      : 40.102325,
                    "lng"     : -74.104611,
                    "time"          : 0
                 },

                 {
                    "address" : "Prompt Catering LLC, 521 Raritan Street, Sayerville, NJ, 08872",
                    "alias"         : "Prompt Catering LLC, 521 Raritan Street, Sayerville, NJ, 08872",
                    "is_depot"       : false,
                    "lat"      : 40.478299,
                    "lng"     : -74.297118,
                    "time"          : 0
                 },

                 {
                    "address" : "Pse & G, 60 S Newark St, Paterson, NJ, 07514",
                    "alias"         : "Pse & G, 60 S Newark St, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.915172,
                    "lng"     : -74.171049,
                    "time"          : 0
                 },

                 {
                    "address" : "Que Chula Es Puebla, 210 Dayton Avenue, Newark, NJ, 07108",
                    "alias"         : "Que Chula Es Puebla, 210 Dayton Avenue, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.874758,
                    "lng"     : -74.122109,
                    "time"          : 0
                 },

                 {
                    "address" : "Quick Food Mart, 250 Route 9, Barnegat, NJ, 08005",
                    "alias"         : "Quick Food Mart, 250 Route 9, Barnegat, NJ, 08005",
                    "is_depot"       : false,
                    "lat"      : 39.753011,
                    "lng"     : -74.222953,
                    "time"          : 0
                 },

                 {
                    "address" : "Quick Food, 234 Old Stage Rd, East Brunswick, NJ, 08816",
                    "alias"         : "Quick Food, 234 Old Stage Rd, East Brunswick, NJ, 08816",
                    "is_depot"       : false,
                    "lat"      : 40.40657,
                    "lng"     : -74.386443,
                    "time"          : 0
                 },

                 {
                    "address" : "Quick Stop Deli, 814 Amboy Ave, Perth Amboy, NJ, 08861",
                    "alias"         : "Quick Stop Deli, 814 Amboy Ave, Perth Amboy, NJ, 08861",
                    "is_depot"       : false,
                    "lat"      : 40.527608,
                    "lng"     : -74.275038,
                    "time"          : 0
                 },

                 {
                    "address" : "Quick Stop Foods, 120 West Sylvania, Neptune City, NJ, 07753",
                    "alias"         : "Quick Stop Foods, 120 West Sylvania, Neptune City, NJ, 07753",
                    "is_depot"       : false,
                    "lat"      : 40.198761,
                    "lng"     : -74.03182,
                    "time"          : 0
                 },

                 {
                    "address" : "R & G Food Ctr, 144 Vreeland Ave, Newark, NJ, 07107",
                    "alias"         : "R & G Food Ctr, 144 Vreeland Ave, Newark, NJ, 07107",
                    "is_depot"       : false,
                    "lat"      : 40.76638,
                    "lng"     : -74.185647,
                    "time"          : 0
                 },

                 {
                    "address" : "R&R Groc, 286 14th Ave, Irvington, NJ, 07111",
                    "alias"         : "R&R Groc, 286 14th Ave, Irvington, NJ, 07111",
                    "is_depot"       : false,
                    "lat"      : 40.73986,
                    "lng"     : -74.204978,
                    "time"          : 0
                 },

                 {
                    "address" : "Rainbow Deli & L, 292 Lakeview Avenue, Little Falls, NJ, 07424",
                    "alias"         : "Rainbow Deli & L, 292 Lakeview Avenue, Little Falls, NJ, 07424",
                    "is_depot"       : false,
                    "lat"      : 40.885017,
                    "lng"     : -74.138497,
                    "time"          : 0
                 },

                 {
                    "address" : "Randy Grocery, 46 Quincy, Passaic, NJ, 07055",
                    "alias"         : "Randy Grocery, 46 Quincy, Passaic, NJ, 07055",
                    "is_depot"       : false,
                    "lat"      : 40.867337,
                    "lng"     : -74.122781,
                    "time"          : 0
                 },

                 {
                    "address" : "Rd Spmkt, 346 14th Ave, Newark, NJ, 07103",
                    "alias"         : "Rd Spmkt, 346 14th Ave, Newark, NJ, 07103",
                    "is_depot"       : false,
                    "lat"      : 40.73986,
                    "lng"     : -74.204978,
                    "time"          : 0
                 },

                 {
                    "address" : "Rhode Island Market, 101 N Rhone Island Ave, Atlantic City, NJ, 08401",
                    "alias"         : "Rhode Island Market, 101 N Rhone Island Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.368863,
                    "lng"     : -74.416528,
                    "time"          : 0
                 },

                 {
                    "address" : "Rio Via Supermarket, 562 S Park St, Clifton, NJ, 07011",
                    "alias"         : "Rio Via Supermarket, 562 S Park St, Clifton, NJ, 07011",
                    "is_depot"       : false,
                    "lat"      : 40.881156,
                    "lng"     : -74.141612,
                    "time"          : 0
                 },

                 {
                    "address" : "Robert Grocery, 71 Clinton Place, Newark, NJ, 07102",
                    "alias"         : "Robert Grocery, 71 Clinton Place, Newark, NJ, 07102",
                    "is_depot"       : false,
                    "lat"      : 40.720399,
                    "lng"     : -74.210768,
                    "time"          : 0
                 },

                 {
                    "address" : "Rodriguez Grocery, 224 S. Orange Ave, Paterson, NJ, 07513",
                    "alias"         : "Rodriguez Grocery, 224 S. Orange Ave, Paterson, NJ, 07513",
                    "is_depot"       : false,
                    "lat"      : 40.738746,
                    "lng"     : -74.192629,
                    "time"          : 0
                 },

                 {
                    "address" : "S&M Groc, 487 Market St, Irvington, NJ, 07111",
                    "alias"         : "S&M Groc, 487 Market St, Irvington, NJ, 07111",
                    "is_depot"       : false,
                    "lat"      : 40.726324,
                    "lng"     : -74.228643,
                    "time"          : 0
                 },

                 {
                    "address" : "Sams Food Mart, 303 Rt 36 N, Hazlet, NJ, 07730",
                    "alias"         : "Sams Food Mart, 303 Rt 36 N, Hazlet, NJ, 07730",
                    "is_depot"       : false,
                    "lat"      : 40.438034,
                    "lng"     : -74.143822,
                    "time"          : 0
                 },

                 {
                    "address" : "San Martin Grocery, 127 Passaic Ave, Passaic, NJ, 07055",
                    "alias"         : "San Martin Grocery, 127 Passaic Ave, Passaic, NJ, 07055",
                    "is_depot"       : false,
                    "lat"      : 40.859614,
                    "lng"     : -74.124275,
                    "time"          : 0
                 },

                 {
                    "address" : "Sandwich Stop, 104 S Franklin Ave, Pleasantville, NJ, 08232",
                    "alias"         : "Sandwich Stop, 104 S Franklin Ave, Pleasantville, NJ, 08232",
                    "is_depot"       : false,
                    "lat"      : 39.389619,
                    "lng"     : -74.52014,
                    "time"          : 0
                 },

                 {
                    "address" : "Save More, 506 21st Ave, Paterson, NJ, 07513",
                    "alias"         : "Save More, 506 21st Ave, Paterson, NJ, 07513",
                    "is_depot"       : false,
                    "lat"      : 40.905816,
                    "lng"     : -74.151835,
                    "time"          : 0
                 },

                 {
                    "address" : "Scarlett Groc, 75 5th St, W Paterson, NJ, 07424",
                    "alias"         : "Scarlett Groc, 75 5th St, W Paterson, NJ, 07424",
                    "is_depot"       : false,
                    "lat"      : 40.927511,
                    "lng"     : -74.176373,
                    "time"          : 0
                 },

                 {
                    "address" : "Seastreak, 325 Shore Dr, Highland, NJ, 07732",
                    "alias"         : "Seastreak, 325 Shore Dr, Highland, NJ, 07732",
                    "is_depot"       : false,
                    "lat"      : 40.409412,
                    "lng"     : -73.996244,
                    "time"          : 0
                 },

                 {
                    "address" : "Shahin Groc, 1542 Atlantic Ave, Atlantic City, NJ, 08401",
                    "alias"         : "Shahin Groc, 1542 Atlantic Ave, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.361097,
                    "lng"     : -74.430216,
                    "time"          : 0
                 },

                 {
                    "address" : "Shalay Shaleish Café, 130 Livingston ave, New Brunswick, NJ, 08091",
                    "alias"         : "Shalay Shaleish Café, 130 Livingston ave, New Brunswick, NJ, 08091",
                    "is_depot"       : false,
                    "lat"      : 40.488921,
                    "lng"     : -74.448212,
                    "time"          : 0
                 },

                 {
                    "address" : "Sheepshead Bagels, 2095 Rt 35 N, Holmdel, NJ, 07748",
                    "alias"         : "Sheepshead Bagels, 2095 Rt 35 N, Holmdel, NJ, 07748",
                    "is_depot"       : false,
                    "lat"      : 40.414517,
                    "lng"     : -74.142318,
                    "time"          : 0
                 },

                 {
                    "address" : "Shell Gas, 390 Shrewsbury Avenue, Red Bank, NJ, 07701",
                    "alias"         : "Shell Gas, 390 Shrewsbury Avenue, Red Bank, NJ, 07701",
                    "is_depot"       : false,
                    "lat"      : 40.337487,
                    "lng"     : -74.075389,
                    "time"          : 0
                 },

                 {
                    "address" : "Shop Smart, 773 Springfield Ave, Newark, NJ, 07108",
                    "alias"         : "Shop Smart, 773 Springfield Ave, Newark, NJ, 07108",
                    "is_depot"       : false,
                    "lat"      : 40.728866,
                    "lng"     : -74.217217,
                    "time"          : 0
                 },

                 {
                    "address" : "Silverton Pharm, 1824 Hooper Ave, Toms River, NJ, 08753",
                    "alias"         : "Silverton Pharm, 1824 Hooper Ave, Toms River, NJ, 08753",
                    "is_depot"       : false,
                    "lat"      : 40.011365,
                    "lng"     : -74.147465,
                    "time"          : 0
                 },

                 {
                    "address" : "Sipo's Bakery, 365 Smith Street, Perth Amboy, NJ, 08861",
                    "alias"         : "Sipo's Bakery, 365 Smith Street, Perth Amboy, NJ, 08861",
                    "is_depot"       : false,
                    "lat"      : 40.511425,
                    "lng"     : -74.278813,
                    "time"          : 0
                 },

                 {
                    "address" : "Smiths Farm Market, 2810 Allaire Road, Wall Township, NJ, 07719",
                    "alias"         : "Smiths Farm Market, 2810 Allaire Road, Wall Township, NJ, 07719",
                    "is_depot"       : false,
                    "lat"      : 40.152529,
                    "lng"     : -74.073501,
                    "time"          : 0
                 },

                 {
                    "address" : "Snack Station Barnet Hospital, 680 Broadway, Irvington, NJ, 07111",
                    "alias"         : "Snack Station Barnet Hospital, 680 Broadway, Irvington, NJ, 07111",
                    "is_depot"       : false,
                    "lat"      : 40.917592,
                    "lng"     : -74.144103,
                    "time"          : 0
                 },

                 {
                    "address" : "St.Benedicts, 165 Bethany Rd, Holmdel, NJ, 07730",
                    "alias"         : "St.Benedicts, 165 Bethany Rd, Holmdel, NJ, 07730",
                    "is_depot"       : false,
                    "lat"      : 40.40416,
                    "lng"     : -74.203567,
                    "time"          : 0
                 },

                 {
                    "address" : "Stop & Save Mini Market, 420 Central Ave, Paterson, NJ, 07514",
                    "alias"         : "Stop & Save Mini Market, 420 Central Ave, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.757528,
                    "lng"     : -74.218494,
                    "time"          : 0
                 },

                 {
                    "address" : "Subzi Mundi, 2058 Route 130 Suite#10, Monmouth Junction, NJ, 08852",
                    "alias"         : "Subzi Mundi, 2058 Route 130 Suite#10, Monmouth Junction, NJ, 08852",
                    "is_depot"       : false,
                    "lat"      : 40.40805,
                    "lng"     : -74.506502,
                    "time"          : 0
                 },

                 {
                    "address" : "Sunoco A Plus Food Store, 943 Route 9 North, Sayreville, NJ, 08879",
                    "alias"         : "Sunoco A Plus Food Store, 943 Route 9 North, Sayreville, NJ, 08879",
                    "is_depot"       : false,
                    "lat"      : 40.409682,
                    "lng"     : -74.348256,
                    "time"          : 0
                 },

                 {
                    "address" : "Sunoco, 95 Highway 36, Keyport, NJ, 07735",
                    "alias"         : "Sunoco, 95 Highway 36, Keyport, NJ, 07735",
                    "is_depot"       : false,
                    "lat"      : 40.427168,
                    "lng"     : -74.197201,
                    "time"          : 0
                 },

                 {
                    "address" : "Sunrise, 1600 Main Street, Belmar, NJ, 07719",
                    "alias"         : "Sunrise, 1600 Main Street, Belmar, NJ, 07719",
                    "is_depot"       : false,
                    "lat"      : 40.174388,
                    "lng"     : -74.026944,
                    "time"          : 0
                 },

                 {
                    "address" : "Sunshine Deli, 61 White Head Ave, South River, NJ, 08882",
                    "alias"         : "Sunshine Deli, 61 White Head Ave, South River, NJ, 08882",
                    "is_depot"       : false,
                    "lat"      : 40.445177,
                    "lng"     : -74.371003,
                    "time"          : 0
                 },

                 {
                    "address" : "The Broadway Diner, 126 Broadway (North), South Amboy, NJ, 08879",
                    "alias"         : "The Broadway Diner, 126 Broadway (North), South Amboy, NJ, 08879",
                    "is_depot"       : false,
                    "lat"      : 40.484253,
                    "lng"     : -74.280944,
                    "time"          : 0
                 },

                 {
                    "address" : "The Country Kitchen, 2501 Belmar Blvd, Belmar, NJ, 07719",
                    "alias"         : "The Country Kitchen, 2501 Belmar Blvd, Belmar, NJ, 07719",
                    "is_depot"       : false,
                    "lat"      : 40.176369,
                    "lng"     : -74.062386,
                    "time"          : 0
                 },

                 {
                    "address" : "The New Eastside Groc, 462 10th Ave, Paterson, NJ, 07514",
                    "alias"         : "The New Eastside Groc, 462 10th Ave, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.923346,
                    "lng"     : -74.145269,
                    "time"          : 0
                 },

                 {
                    "address" : "Tinton Falls Deli, 1191 Sycamore Avenue, Tinton Falls, NJ, 07724",
                    "alias"         : "Tinton Falls Deli, 1191 Sycamore Avenue, Tinton Falls, NJ, 07724",
                    "is_depot"       : false,
                    "lat"      : 40.305772,
                    "lng"     : -74.09978,
                    "time"          : 0
                 },
                {
                    "address" : "Tm Family Conv, 51 N Main St, Paterson, NJ, 07514",
                    "alias"         : "Tm Family Conv, 51 N Main St, Paterson, NJ, 07514",
                    "is_depot"       : false,
                    "lat"      : 40.924336,
                    "lng"     : -74.17162,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tnc Mini Mart, 80 Eats 1St Ave, Atlantic Highlands, NJ, 07716",
                    "alias"         : "Tnc Mini Mart, 80 Eats 1St Ave, Atlantic Highlands, NJ, 07716",
                    "is_depot"       : false,
                    "lat"      : 40.413674,
                    "lng"     : -74.037695,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tony's Freehold Grill, 59 East Main Street, Freehold, NJ, 07728",
                    "alias"         : "Tony's Freehold Grill, 59 East Main Street, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.261613,
                    "lng"     : -74.272369,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tony'S Mini Mart, 305 Park Ave, Paterson, NJ, 07524",
                    "alias"         : "Tony'S Mini Mart, 305 Park Ave, Paterson, NJ, 07524",
                    "is_depot"       : false,
                    "lat"      : 40.914833,
                    "lng"     : -74.152895,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tony'S Pizza, 759 Main Ave, Paterson, NJ, 07501",
                    "alias"         : "Tony'S Pizza, 759 Main Ave, Paterson, NJ, 07501",
                    "is_depot"       : false,
                    "lat"      : 40.863545,
                    "lng"     : -74.128925,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Torres Mini Market, 403 Bruck Avenue, Perth Amboy, NJ, 08861",
                    "alias"         : "Torres Mini Market, 403 Bruck Avenue, Perth Amboy, NJ, 08861",
                    "is_depot"       : false,
                    "lat"      : 40.528262,
                    "lng"     : -74.271842,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Torres Supermarket, 168 Grove Street, Newark, NJ, 07105",
                    "alias"         : "Torres Supermarket, 168 Grove Street, Newark, NJ, 07105",
                    "is_depot"       : false,
                    "lat"      : 40.749295,
                    "lng"     : -74.207298,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Town & Surf, 77 First Ave, Atlantic Highlands, NJ, 07716",
                    "alias"         : "Town & Surf, 77 First Ave, Atlantic Highlands, NJ, 07716",
                    "is_depot"       : false,
                    "lat"      : 40.413983,
                    "lng"     : -74.038003,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Town n Country Inn, 35 Broadway @ Rt 35 North, Keyport, NJ, 07735",
                    "alias"         : "Town n Country Inn, 35 Broadway @ Rt 35 North, Keyport, NJ, 07735",
                    "is_depot"       : false,
                    "lat"      : 40.38752,
                    "lng"     : -74.097893,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tropico Mini Mart, 40 Broad Street, Keyport, NJ, 07725",
                    "alias"         : "Tropico Mini Mart, 40 Broad Street, Keyport, NJ, 07725",
                    "is_depot"       : false,
                    "lat"      : 40.437838,
                    "lng"     : -74.202413,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Tulcingo Grocery, 256 Ocean Ave, Lakewood, NJ, 08701",
                    "alias"         : "Tulcingo Grocery, 256 Ocean Ave, Lakewood, NJ, 08701",
                    "is_depot"       : false,
                    "lat"      : 40.090165,
                    "lng"     : -74.205323,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Twin Pond Farm, 1459 - 1473 Route 9 North, Howell, NJ, 07731",
                    "alias"         : "Twin Pond Farm, 1459 - 1473 Route 9 North, Howell, NJ, 07731",
                    "is_depot"       : false,
                    "lat"      : 40.192329,
                    "lng"     : -74.25131,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Victoria Mini Mt, 394 E 18th St, Clifton, NJ, 07011",
                    "alias"         : "Victoria Mini Mt, 394 E 18th St, Clifton, NJ, 07011",
                    "is_depot"       : false,
                    "lat"      : 40.881156,
                    "lng"     : -74.141612,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Viva Mexico, 296 River Avenue, Lakeood, NJ, 08701",
                    "alias"         : "Viva Mexico, 296 River Avenue, Lakeood, NJ, 08701",
                    "is_depot"       : false,
                    "lat"      : 40.079432,
                    "lng"     : -74.216707,
                    "time"          : 0
                 },
        
                 {
                    "address" : "W Fresh, 4412 Rt 9 South, Freehold, NJ, 07728",
                    "alias"         : "W Fresh, 4412 Rt 9 South, Freehold, NJ, 07728",
                    "is_depot"       : false,
                    "lat"      : 40.286583,
                    "lng"     : -74.295474,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Waterside, 101 Boardwalk, Atlantic City, NJ, 08401",
                    "alias"         : "Waterside, 101 Boardwalk, Atlantic City, NJ, 08401",
                    "is_depot"       : false,
                    "lat"      : 39.365196,
                    "lng"     : -74.410547,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Welsh Farms (76 Gas), 659 Rt 36, Belford, NJ, 07718",
                    "alias"         : "Welsh Farms (76 Gas), 659 Rt 36, Belford, NJ, 07718",
                    "is_depot"       : false,
                    "lat"      : 40.41911,
                    "lng"     : -74.084993,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Welsh Farms, 33 West Main Street, Farmingdale, NJ, 07727",
                    "alias"         : "Welsh Farms, 33 West Main Street, Farmingdale, NJ, 07727",
                    "is_depot"       : false,
                    "lat"      : 40.199729,
                    "lng"     : -74.174155,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Willow Deli, 290 Willow Drive, Little Silver, NJ, 07739",
                    "alias"         : "Willow Deli, 290 Willow Drive, Little Silver, NJ, 07739",
                    "is_depot"       : false,
                    "lat"      : 40.328604,
                    "lng"     : -74.040089,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Wilson Ave Deli, 198 Wilson Ave, Port Monmouth, NJ, 07758",
                    "alias"         : "Wilson Ave Deli, 198 Wilson Ave, Port Monmouth, NJ, 07758",
                    "is_depot"       : false,
                    "lat"      : 40.426408,
                    "lng"     : -74.103064,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Winward Deli, 254 Maple Ave, Red Bank, NJ, 07701",
                    "alias"         : "Winward Deli, 254 Maple Ave, Red Bank, NJ, 07701",
                    "is_depot"       : false,
                    "lat"      : 40.342252,
                    "lng"     : -74.067954,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Wp Grocery, 497 12th Ave, Paterson, NJ, 07513",
                    "alias"         : "Wp Grocery, 497 12th Ave, Paterson, NJ, 07513",
                    "is_depot"       : false,
                    "lat"      : 40.919401,
                    "lng"     : -74.142398,
                    "time"          : 0
                 },
        
                 {
                    "address" : "Yellow Rose Diner, 41 Route 36 North, Keyport, NJ, 07735",
                    "alias"         : "Yellow Rose Diner, 41 Route 36 North, Keyport, NJ, 07735",
                    "is_depot"       : false,
                    "lat"      : 40.427893,
                    "lng"     : -74.194583,
                    "time"          : 0
                 },
                 {
                    "address" : "Zoilas, 124 Pasaic St, Paterson, NJ, 07513",
                    "alias"         : "Zoilas, 124 Pasaic St, Paterson, NJ, 07513",
                    "is_depot"       : false,
                    "lat"      : 40.913417,
                    "lng"     : -74.170402,
                    "time"          : 0
                 }
			],
			"parameters": {
				"algorithm_type": 4,
                "route_name": "route 300 stops",
                "rt": true,
                "route_date": diffspan,
                "route_time": 25200,
                "route_max_duration": 36000,
				"vehicle_max_distance_mi": 10000,
                "optimize": "Distance",
                "distance_unit": "mi",
				"device_type": "web",
				"travel_mode": "Driving",
				"parts": 5
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
