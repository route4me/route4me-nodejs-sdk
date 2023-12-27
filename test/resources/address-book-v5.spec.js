"use strict"

const request = require("superagent")
const saMock  = require("superagent-mocker")(request)

const helper  = require("./../helper")

const route4me = require("./../../dist")

const testApiKey = "11111111111111111111111111111111"


describe(helper.toSuiteName(__filename), () => {
	describe("SDK methods", () => {
		const route4meClient = new route4me.Route4Me(testApiKey)
		const resource = route4meClient.AddressBookV5
		let req

		beforeEach(() => {
			req = null
			saMock.get("*", (r) =>  { req = r; req.method = "GET";    return {} })
			saMock.post("*", (r) => { req = r; req.method = "POST";   return {} })
			saMock.del("*", (r) =>  { req = r; req.method = "DELETE"; return {} })
			saMock.put("*", (r) =>  { req = r; req.method = "PUT";    return {} })
		})

		afterEach(() => {
			saMock.clearRoutes()
		})

		describe("addAddress", () => {
			const data = {
				"address_1": "17205 RICHMOND TNPK, MILFORD, VA, 22514",
				"cached_lat": "38.024654",
				"cached_lng": "-77.338814",
				"address_stop_type": "DELIVERY",
				"member_id": 177496,
				"address_group": "",
				"address_alias": "301 MARKET SHELL",
				"first_name": "Gela",
				"last_name": "Gorason",
				"address_email": "ggora@gmail.com",
				"address_phone_number": "8046335852",
				"address_city": "Tbilisi",
				"address_state_id": "TB",
				"address_country_id": "GEO",
				"address_zip": "00167",
				"address_custom_data": {
					"sales rep id": "545",
					"sales rep name": "Kellye Foster",
					"retailer id": "173907",
				}
			}

			it("should call route4me", (done) => {
				resource.addAddress(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses",
						{},
						data
					)
					done()
				})
			})
		})

		describe("addMultipleAddresses", () => {
			const data = [{
				address_1: "17205 RICHMOND TNPK, MILFORD, VA, 22514", 
				cached_lat: "38.024654", 
				cached_lng: "-77.338814", 
				address_stop_type: "DELIVERY",
				member_id: 177496,
				address_city: "Tbilisi", 
				address_state_id: "TB", 
				address_country_id: "GEO",
				first_name: "Tusha", 
				last_name: "Grigoriani I"
			}, {
				address_1: "17205 RICHMOND TNPK, MILFORD, VA, 22514", 
				cached_lat: "38.024654", 
				cached_lng: "-77.338814", 
				address_stop_type: "DELIVERY",
				member_id: 177496,
				address_city: "Tbilisi", 
				address_state_id: "TB", 
				address_country_id: "GEO",
				first_name: "Tusha", 
				last_name: "Grigoriani II"
			}];

			it("should call route4me", (done) => {
				resource.addMultipleAddresses(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/batch-create",
						{},
						{ data }
					)
					done()
				})
			})
		})

		describe("getAddresses", () => {
			const options = {
				query: "Zeeweg"
			};

			it("getAddresses should call route4me with options", (done) => {
				resource.getAddresses(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/all",
						{ query: "Zeeweg" },
						null
					)
					done()
				})
			})

			it("getAddresses should call route4me without options", (done) => {
				resource.getAddresses((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/all",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getAddressesByBodyPayload", () => {
			const options = {
				filter: {
					selected_areas: [{
						type: "circle",
						value: { center: { lat: 52.4025, lng: 4.5601 }, distance: 10000 }
					}]
				}
			};

			it("getAddressesByBodyPayload should call route4me with options", (done) => {
				resource.getAddressesByBodyPayload(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/all",
						null,
						options
					)
					done()
				})
			})

			it("getAddressesByBodyPayload should call route4me without options", (done) => {
				resource.getAddressesByBodyPayload((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/all",
						null,
						{}
					)
					done()
				})
			})
		})

		describe("getAddressesPaginated", () => {
			const options = {
				query: "Zeeweg",
				page: 1,
				per_page: 5
			};

			it("getAddressesPaginated should call route4me with options", (done) => {
				resource.getAddressesPaginated(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/pagination",
						{
							"query": "Zeeweg",
							"page": "1",
							"per_page": "5"
						},
						null
					)
					done()
				})
			})

			it("getAddressesPaginated should call route4me without options", (done) => {
				resource.getAddressesPaginated((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/pagination",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getAddressesPaginatedByBodyPayload", () => {
			const options = {
				fields: ["address_id", "address_1", "first_name", "last_name", "address_city"],
				filter: {
					query: "Zeeweg",
					selected_areas: [{
						type: "circle",
						value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
					}]
				},
				order_by: [["address_1", "asc"]],
				page: 1,
				per_page: 15
			};

			it("getAddressesPaginatedByBodyPayload should call route4me with options", (done) => {
				resource.getAddressesPaginatedByBodyPayload(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/pagination",
						null,
						{
							fields: ["address_id", "address_1", "first_name", "last_name", "address_city"],
							filter: {
								query: "Zeeweg",
								selected_areas: [{
									type: "circle",
									value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
								}]
							},
							order_by: [["address_1", "asc"]],
							page: 1,
							per_page: 15
						}
					)
					done()
				})
			})

			it("getAddressesPaginatedByBodyPayload should call route4me without options", (done) => {
				resource.getAddressesPaginatedByBodyPayload((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/pagination",
						null,
						{}
					)
					done()
				})
			})
		})

		describe("getAddressClusters", () => {
			const options = {
				query: "Zeeweg"
			};

			it("getAddressClusters should call route4me with options", (done) => {
				resource.getAddressClusters(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/clustering",
						{ "query": "Zeeweg" },
						null
					)
					done()
				})
			})

			it("getAddressClusters should call route4me without options", (done) => {
				resource.getAddressClusters((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/clustering",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getAddressClustersByBodyPayload", () => {
			const options = {
				clustering: {
					precision: 2
				},
				filter: {
					selected_areas: [{
						type: "circle",
						value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
					}]
				}
			};

			it("getAddressClustersByBodyPayload should call route4me with options", (done) => {
				resource.getAddressClustersByBodyPayload(options, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/clustering",
						null,
						{
							clustering: {
								precision: 2
							},
							filter: {
								selected_areas: [{
									type: "circle",
									value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
								}]
							}
						}
					)
					done()
				})
			})

			it("getAddressClustersByBodyPayload should call route4me without options", (done) => {
				resource.getAddressClustersByBodyPayload((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/index/clustering",
						null,
						{}
					)
					done()
				})
			})
		})

		describe("getAddressById", () => {
			const addressId = 51101441;

			it("getAddressById should call route4me", (done) => {
				resource.getAddressById(addressId, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/show",
						{ "address_id": "51101441" },
						null
					)
					done()
				})
			})
		})

		describe("getAddressesByIds", () => {
			const addressIds = [51101697, 51101441];

			it("getAddressesByIds should call route4me", (done) => {
				resource.getAddressesByIds(addressIds, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/show",
						null,
						{ address_ids: [51101697, 51101441] }
					)
					done()
				})
			})
		})

		describe("updateAddressById", () => {
			const addressId = 85351277;
			const data = {
				last_name: "Grigoriani III"
			};

			it("should call route4me", (done) => {
				resource.updateAddressById(addressId, data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"PUT",
						route4meClient.baseUrl5() + `/api/v5.0/address-book/addresses/${addressId}`,
						{},
						{ last_name: "Grigoriani III" }
					)
					done()
				})
			})
		})

		describe("updateAddressesByIds", () => {
			const data = {
				service_time: 15,
				address_ids: [85352154, 85352153, 85352155, 85352152],
				address_city: "Tbilisi Vah"
			};

			it("should call route4me", (done) => {
				resource.updateAddressesByIds(data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/batch-update",
						{},
						{
							service_time: 15,
							address_ids: [85352154, 85352153, 85352155, 85352152],
							address_city: "Tbilisi Vah"
						}
					)
					done()
				})
			})
		})

		describe("updateAddressesByAreas", () => {
			const filter = {
				query: "",
				bounding_box: null,
				selected_areas: [{ 
					type: "circle", 
					value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
				}]
			};

			const data = {
				last_name: "Grigoriani V"
			};

			it("should call route4me", (done) => {
				resource.updateAddressesByAreas(filter, data, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"PUT",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/update-by-areas",
						{},
						{ filter, data }
					)
					done()
				})
			})
		})

		describe("deleteAddressesByIds", () => {
			const addressIds = [85352154, 85352153];

			it("should call route4me", (done) => {
				resource.deleteAddressesByIds(addressIds, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null

					helper.expectRequest5(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/delete",
						{},
						{ address_ids: [85352154, 85352153] }
					)

					done()
				})
			})
		})

		describe("deleteAddressesByAreas", () => {
			const filter = {
				query: "Zeeweg",
				bounding_box: null,
				selected_areas: [{
					type: "circle", 
					value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
				}]
			};

			it("should call route4me", (done) => {
				resource.deleteAddressesByAreas(filter, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null

					helper.expectRequest5(req,
						"DELETE",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/delete-by-areas",
						{},
						{ filter: filter }
					)

					done()
				})
			})
		})

		describe("getAddressCustomFields", () => {
			it("should call route4me", (done) => {
				resource.getAddressCustomFields((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/custom-fields",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getAddressesDepots", () => {
			it("should call route4me", (done) => {
				resource.getAddressesDepots((err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/depots",
						null,
						null
					)
					done()
				})
			})
		})

		describe("exportAddressesByIds", () => {
			it("should call route4me", (done) => {
				const addressIds = [85352155, 85352152];
				const filename = "test_export.csv";

				resource.exportAddressesByIds(addressIds, filename, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/export",
						null,
						{
							ids: [85352155, 85352152],
							filename: "test_export.csv"
						}
					)
					done()
				})
			})
		})

		describe("exportAddressesByAreas", () => {
			it("should call route4me", (done) => {
				const filter = {
					query: "",
					bounding_box: null,
					selected_areas: [{
						type: "circle", 
						value: { center: { lat: 38.024654, lng: -77.338814 }, distance: 10000 }
					}]
				};
	
				resource.exportAddressesByAreas(filter, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/export-by-areas",
						null,
						{ filter: filter }
					)
					done()
				})
			})
		})

		describe("exportAddressesByAreaIds", () => {
			it("should call route4me", (done) => {
				const territoryIds = [85352155, 85352152];
				const filename = "test_export.csv";

				resource.exportAddressesByAreaIds(territoryIds, filename, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"POST",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/export-by-area-ids",
						null,
						{
							territory_ids: [85352155, 85352152],
							filename: "test_export.csv"
						}
					)
					done()
				})
			})
		})

		describe("getAddressesAsynchronousJobStatus", () => {
			it("should call route4me", (done) => {
				const jobId = "85352155";

				resource.getAddressesAsynchronousJobStatus(jobId, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/job-tracker/status/85352155",
						null,
						null
					)
					done()
				})
			})
		})

		describe("getAddressesAsynchronousJobResult", () => {
			it("should call route4me", (done) => {
				const jobId = "85352155";

				resource.getAddressesAsynchronousJobResult(jobId, (err, res) => {
					expect(err).is.null
					expect(res).is.not.null
					helper.expectRequest5(req,
						"GET",
						route4meClient.baseUrl5() + "/api/v5.0/address-book/addresses/job-tracker/result/85352155",
						null,
						null
					)
					done()
				})
			})
		})
	})
})
