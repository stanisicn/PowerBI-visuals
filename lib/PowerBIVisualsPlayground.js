/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/// <reference path="./_references.ts"/>
	window.jsCommon = window.jsCommon || {};
	window.powerbi = window.powerbi || {};
	window.debug = window.debug || {};
	window.InJs = window.InJs || {};
	// require("../VisualsContracts/module.ts");
	// require("../VisualsCommon/module.ts");
	// require("../VisualsData/module.ts");
	// require("../VisualsExtensibility/module.ts");
	// require("../Visuals/module.ts");
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(85);
	__webpack_require__(86);

	

/***/ },
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 59 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../../Typedefs/jquery/jquery.d.ts"/>
	/// <reference path="../../Typedefs/d3/d3.d.ts"/>

	

/***/ },
/* 60 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var SampleDataViews = (function () {
	                function SampleDataViews() {
	                }
	                SampleDataViews.prototype.getName = function () {
	                    return this.name;
	                };
	                SampleDataViews.prototype.getDisplayName = function () {
	                    return this.displayName;
	                };
	                SampleDataViews.prototype.hasPlugin = function (pluginName) {
	                    return this.visuals.indexOf(pluginName) >= 0;
	                };
	                SampleDataViews.prototype.getRandomValue = function (min, max) {
	                    var value = Math.random() * (max - min) + min;
	                    return Math.ceil(value * 100) / 100;
	                };
	                SampleDataViews.prototype.randomElement = function (arr) {
	                    return arr[Math.floor(Math.random() * arr.length)];
	                };
	                return SampleDataViews;
	            }());
	            sampleDataViews.SampleDataViews = SampleDataViews;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 61 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SQExprBuilder = powerbi.data.SQExprBuilder;
	            var createDataViewScopeIdentity = powerbi.data.createDataViewScopeIdentity;
	            var CarLogosData = (function (_super) {
	                __extends(CarLogosData, _super);
	                function CarLogosData() {
	                    _super.apply(this, arguments);
	                    this.name = "CarLogosData";
	                    this.displayName = "Car logos";
	                    this.visuals = ['chicletSlicer'];
	                    this.sampleData = [5, 10, 15, 20, 25];
	                    this.categoryValues = ["BMW", "Mercedes", "Honda", "Toyota", "Ferrari"];
	                    this.carImages = [
	                        "https://raw.githubusercontent.com/Microsoft/PowerBI-visuals/resources/images/chicletSlicer/bmw.png",
	                        "https://raw.githubusercontent.com/Microsoft/PowerBI-visuals/resources/images/chicletSlicer/mercedes.png",
	                        "https://raw.githubusercontent.com/Microsoft/PowerBI-visuals/resources/images/chicletSlicer/honda.png",
	                        "https://raw.githubusercontent.com/Microsoft/PowerBI-visuals/resources/images/chicletSlicer/toyota.gif",
	                        "https://raw.githubusercontent.com/Microsoft/PowerBI-visuals/resources/images/chicletSlicer/ferrari.png"
	                    ];
	                }
	                CarLogosData.prototype.getDataViewMetadataColumn = function (groupName) {
	                    return {
	                        displayName: 'Sales Count',
	                        format: "g",
	                        isMeasure: true,
	                        queryName: 'sales',
	                        roles: {
	                            Values: true
	                        },
	                        type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                        objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
	                        groupName: groupName
	                    };
	                };
	                CarLogosData.prototype.getDataViewMetadata = function (columns) {
	                    if (columns === void 0) { columns = []; }
	                    return {
	                        columns: [
	                            {
	                                displayName: 'Car',
	                                queryName: 'Country',
	                                roles: {
	                                    Category: true
	                                },
	                                type: powerbi.ValueType.fromDescriptor({ text: true })
	                            },
	                            {
	                                displayName: 'Image',
	                                format: "g",
	                                queryName: 'Image',
	                                roles: {
	                                    Image: true
	                                },
	                                type: powerbi.ValueType.fromDescriptor({ text: true })
	                            }
	                        ].concat(columns),
	                        objects: {
	                            general: {
	                                columns: 1
	                            }
	                        }
	                    };
	                };
	                CarLogosData.prototype.getValuesByIndex = function (index) {
	                    return this.sampleData.map(function (data, id) {
	                        return index === id ? data : null;
	                    });
	                };
	                CarLogosData.prototype.getDataViews = function () {
	                    var _this = this;
	                    var fieldExpr = SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });
	                    var categoryIdentities = this.categoryValues.map(function (value) {
	                        var expr = SQExprBuilder.equal(fieldExpr, SQExprBuilder.text(value));
	                        return createDataViewScopeIdentity(expr);
	                    });
	                    var imageFieldExpr = SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "Image" } });
	                    var imageIdentities = this.carImages.map(function (value) {
	                        var expr = SQExprBuilder.equal(imageFieldExpr, SQExprBuilder.text(value));
	                        return createDataViewScopeIdentity(expr);
	                    });
	                    var dataViewMetadataColumns = [];
	                    var columns = this.categoryValues.map(function (car, i) {
	                        var dataViewMetadataColumn = _this.getDataViewMetadataColumn(_this.carImages[i]);
	                        dataViewMetadataColumns.push(dataViewMetadataColumn);
	                        return {
	                            source: dataViewMetadataColumn,
	                            identity: imageIdentities[i],
	                            values: _this.getValuesByIndex(i)
	                        };
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = this.getDataViewMetadata(dataViewMetadataColumns), dataValues = DataViewTransform.createValueColumns(columns, [fieldExpr, imageFieldExpr], dataViewMetadata.columns[1]);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: this.categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                CarLogosData.prototype.randomize = function () { };
	                return CarLogosData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.CarLogosData = CarLogosData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 62 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var DistrictSalesData = (function (_super) {
	                __extends(DistrictSalesData, _super);
	                function DistrictSalesData() {
	                    _super.apply(this, arguments);
	                    this.name = "DistrictSalesData";
	                    this.displayName = "District Sales";
	                    this.visuals = ['scatterChart'];
	                    this.sampleData = [
	                        [300, 100, 200, 120, 80, 50, 240],
	                        [200, 150, 70, 30, 68, 145, 190],
	                        [30, 5, 10, 20, 40, 60, 70]
	                    ];
	                    this.sampleMin = 10;
	                    this.sampleMax = 300;
	                }
	                DistrictSalesData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });
	                    var categoryValues = ["FD - 01", "FD - 02", "FD - 03", "FD - 04", "LI - 01", "LI - 02", "LI - 03"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'series',
	                                isMeasure: false,
	                                queryName: 'series',
	                                roles: {
	                                    "Category": true,
	                                    "Series": true
	                                },
	                                type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Text)
	                            },
	                            {
	                                displayName: 'Total Sales Variance %',
	                                groupName: 'Total Sales Variance %',
	                                isMeasure: true,
	                                queryName: "x",
	                                roles: { "X": true },
	                                type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Double)
	                            },
	                            {
	                                displayName: 'Sales Per Sq Ft',
	                                groupName: 'Sales Per Sq Ft',
	                                isMeasure: true,
	                                queryName: "y",
	                                roles: { "Y": true },
	                                type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Double)
	                            },
	                            {
	                                displayName: 'valueSize',
	                                groupName: 'valueSize',
	                                isMeasure: true,
	                                queryName: "size",
	                                roles: { "Size": true },
	                                type: powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Double)
	                            }
	                        ],
	                        objects: { categoryLabels: { show: true } },
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            values: this.sampleData[0]
	                        }, {
	                            source: dataViewMetadata.columns[2],
	                            values: this.sampleData[1]
	                        }, {
	                            source: dataViewMetadata.columns[3],
	                            values: this.sampleData[2]
	                        }];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    var seriesIdentityField = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: 'e', name: 'series' } });
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                        identityFields: [seriesIdentityField],
	                                        objects: [
	                                            { dataPoint: { fill: { solid: { color: 'red' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'blue' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'green' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'black' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'yellow' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'brown' } } } },
	                                            { dataPoint: { fill: { solid: { color: 'pink' } } } }]
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                DistrictSalesData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    });
	                };
	                return DistrictSalesData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.DistrictSalesData = DistrictSalesData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 63 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var ValueType = powerbi.ValueType;
	            var PrimitiveType = powerbi.PrimitiveType;
	            var FileStorageData = (function (_super) {
	                __extends(FileStorageData, _super);
	                function FileStorageData() {
	                    _super.apply(this, arguments);
	                    this.name = "FileStorageData";
	                    this.displayName = "File storage data";
	                    this.visuals = ['treemap',
	                    ];
	                    this.sampleData = [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34];
	                    this.sampleMin = 30000;
	                    this.sampleMax = 1000000;
	                }
	                FileStorageData.prototype.getDataViews = function () {
	                    var treeMapMetadata = {
	                        columns: [
	                            { displayName: 'EventCount', queryName: 'select1', isMeasure: true, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
	                            { displayName: 'MedalCount', queryName: 'select2', isMeasure: true, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) }
	                        ]
	                    };
	                    var columns = [
	                        { displayName: 'Program Files', queryName: 'select1', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                        { displayName: 'Documents and Settings', queryName: 'select2', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                        { displayName: 'Windows', queryName: 'select3', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                        { displayName: 'Recovery', queryName: 'select4', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                        { displayName: 'Users', queryName: 'select5', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                        { displayName: 'ProgramData', queryName: 'select6', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double), roles: { Values: true } },
	                    ];
	                    var values = [];
	                    for (var i = 0; i < columns.length; i++) {
	                        values.push({
	                            source: columns[i],
	                            values: [this.sampleData[i]]
	                        });
	                    }
	                    return [{
	                            metadata: treeMapMetadata,
	                            categorical: {
	                                values: DataViewTransform.createValueColumns(values)
	                            }
	                        }];
	                };
	                FileStorageData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                };
	                return FileStorageData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.FileStorageData = FileStorageData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 64 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ImageData = (function (_super) {
	                __extends(ImageData, _super);
	                function ImageData() {
	                    _super.apply(this, arguments);
	                    this.name = "ImageData";
	                    this.displayName = "Image data";
	                    this.visuals = ['image',
	                    ];
	                    this.sampleImages = [
	                        "data:image/png;base64,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YCG/Mmkpk3G+NV8AAKB8ZVrGfGfsdwJAQu4XAAAof1+M+/7MVwGAGQAAAMqbufpPyIz9fmVS7jcttwEAAEDZcsb6ljE/ZQJA0v2GGQAAAMqdmQFwxnxn7Pc1TBmeySRXK5OOOw+YIMCWQAAAysuXi/0D8vnD8gV7yNc4Y++WAJBcq0wmKp8v5Iz/Abk1gnzsEgQAwLPMTj+Z3X4tt/t9vgpn8O/2RQCYdVhGCWfwT61xnhd1Bv2gc/0f+DoEAAAAj/pi8Dcz/Gba3+8EgEB3KdRN/x+uUTgmAYvm6wAAAABJRU5ErkJggiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA=",
	                        "data:image/png;base64,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axFM8qzOhV1kyC0dYB9p0pE9tg+W4UX8rPzcLJLdpLF0Gwo/q15mnUeC32ja9tOf/hR9fX3uxjAAiy9fgk9+/Gb09UWgpl/6bJKKkyeO46I5F2PcuHE/pRQNPF46huwA3nnXFz82efLk544fPxratnUzYrEYJEkyvqF6IUMURWiahn1796D+TB0+9elbcdfnvohf//oJxKLRvMl1unDdXEipBONfFn+eTFaedXXEk2+Vrd+baSfXLJtFY9XJic46mFJKceDAAaxfvx6iKMLv9+PLX/4yKKV4+umnoaoqQqEQ7rjjjowBmVcPdm3B04VlrxuY+ezduxevv/46Ojs7cf311+Paa68FAESjUTz55JN44IEHMnTp7OzE008/jQcffBA9PT34r//6LxQWFoJSijvuuAMTJ07E2rVr0dPTA1VVcffdd6O+vh6///3v8cMf/tCQu337dmzfvh3f+ta3HO3l1Z1dXq50hBBs70jgj+dipo/V65kcvgAIKJp6/i+myZfDJ5U46syyLZe80cJwnPr3Otat31y9b//+7+3atT3jNS8AjHMKYFptLb74hS9klC3wBXH/lbdh77l3EE/GsWz6QiyacjFa+zohCALK4lHUlFahqrgCUTkOlWq4af5VKA6EM74IMZz2ZY0BrPZy6/iZrz/rospu3M6VjlfGbiGUC531eChpdvxYtG5luMnXz3V7jx07hrVr19rOA+a8YEEYD3796/D7A+jo6MniLctJbN68CWvuuKsJFI9d5BD9A4boAH72bz43ffLkyU+efPdYaMubG0EIQXFxMSKRyAXv/AEwPptWVFSEaDSCP/z+adx51+fxyU/eit8/+xvLlvjIIdfOyysHUwTQSsfqrDy+mqrh0HN7oAzIRpoUkDDvtqV4+lwMsmZawbUmIZKUbOt3St0Mcq7scpFmtmffvn34xje+kfGZsCeeeAI33HADampqsG3bNmzevBlXX331kHR1q5+bPBZtMpnEpk2bcOedd6Kurg4HDx7E0qVLcfjwYRw6dAi9vb1Zzutzzz2H/v5+AMCpU6ewevVqLF++3OB7+PBh+P1+3HfffTh37hzWrl2LefPm4dixY0gmk8Y26N69e5FMJrn2spxzp0nPrf1WOkopFI3iV6cjg5E/cFbuMC190o6CosZwpvlPmD150Fmwa0M3+vIWJKOBsXY+84lNb+5E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"
	                    ];
	                    this.sampleIndex = 0;
	                    this.sampleData = this.sampleImages[this.sampleIndex];
	                }
	                ImageData.prototype.getDataViews = function () {
	                    return [{
	                            metadata: {
	                                columns: [],
	                                objects: { general: { imageUrl: this.sampleData } }
	                            }
	                        }];
	                };
	                ImageData.prototype.randomize = function () {
	                    this.sampleIndex++;
	                    if (this.sampleIndex >= this.sampleImages.length) {
	                        this.sampleIndex = 0;
	                    }
	                    this.sampleData = this.sampleImages[this.sampleIndex];
	                };
	                return ImageData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.ImageData = ImageData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 65 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var ProfitLossData = (function (_super) {
	                __extends(ProfitLossData, _super);
	                function ProfitLossData() {
	                    _super.apply(this, arguments);
	                    this.name = "ProfitLossData";
	                    this.displayName = "Profit/Loss data";
	                    this.visuals = ['waterfallChart'];
	                    this.sampleData = [
	                        [742731.43, -162066.43, 283085.78, -300263.49, 376074.57, -814724.34]
	                    ];
	                    this.sampleMin = -1000000;
	                    this.sampleMax = 1000000;
	                }
	                ProfitLossData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });
	                    var categoryValues = ["Australia", "Canada", "France", "Germany", "United Kingdom", "United States"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Country',
	                                groupName: 'Country',
	                                queryName: 'Country',
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { Category: true }
	                            },
	                            {
	                                displayName: 'Sales Amount (2014)',
	                                groupName: 'Sales Amount (2014)',
	                                queryName: 'Sales Amount (2014)',
	                                format: "$0,000.00",
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
	                                roles: { Y: true }
	                            }
	                        ]
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            // Sales Amount for 2014
	                            values: this.sampleData[0],
	                        }
	                    ];
	                    var seriesIdentityField = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: 'e', name: 'series' } });
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                        identityFields: [seriesIdentityField]
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                ProfitLossData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    });
	                };
	                return ProfitLossData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.ProfitLossData = ProfitLossData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 66 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var RichtextData = (function (_super) {
	                __extends(RichtextData, _super);
	                function RichtextData() {
	                    _super.apply(this, arguments);
	                    this.name = "RichtextData";
	                    this.displayName = "Richtext data";
	                    this.visuals = ['textbox'];
	                    this.sampleData = [
	                        "Example Text",
	                        "company's data",
	                        "Power BI",
	                        "visualization",
	                        "spot trends",
	                        "charts",
	                        "simple drag-and-drop gestures",
	                        "personalized dashboards"
	                    ];
	                    this.sampleSingleData = this.sampleData[0];
	                    this.sampleTextStyle = {
	                        fontFamily: "Heading",
	                        fontSize: "24px",
	                        textDecoration: "underline",
	                        fontWeight: "300",
	                        fontStyle: "italic",
	                        float: "left"
	                    };
	                }
	                RichtextData.prototype.getDataViews = function () {
	                    // 1 paragraphs, with formatting
	                    var paragraphs = [
	                        {
	                            horizontalTextAlignment: "center",
	                            textRuns: [{
	                                    value: this.sampleSingleData,
	                                    textStyle: this.sampleTextStyle
	                                }]
	                        }];
	                    return this.buildParagraphsDataView(paragraphs);
	                };
	                RichtextData.prototype.buildParagraphsDataView = function (paragraphs) {
	                    return [{ metadata: { columns: [], objects: { general: { paragraphs: paragraphs } } } }];
	                };
	                RichtextData.prototype.randomize = function () {
	                    this.sampleSingleData = this.randomElement(this.sampleData);
	                    this.sampleTextStyle.fontSize = this.getRandomValue(12, 40) + "px";
	                    this.sampleTextStyle.fontWeight = this.getRandomValue(300, 700).toString();
	                };
	                return RichtextData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.RichtextData = RichtextData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 67 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SalesByCountryData = (function (_super) {
	                __extends(SalesByCountryData, _super);
	                function SalesByCountryData() {
	                    _super.apply(this, arguments);
	                    this.name = "SalesByCountryData";
	                    this.displayName = "Sales By Country";
	                    this.visuals = ['default'];
	                    this.sampleData = [
	                        [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34],
	                        [123455.43, 40566.43, 200457.78, 5000.49, 320000.57, 450000.34]
	                    ];
	                    this.sampleMin = 30000;
	                    this.sampleMax = 1000000;
	                    this.sampleSingleData = 55943.67;
	                }
	                SalesByCountryData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });
	                    var categoryValues = ["Australia", "Canada", "France", "Germany", "United Kingdom", "United States"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Country',
	                                queryName: 'Country',
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { Category: true }
	                            },
	                            {
	                                displayName: 'Sales Amount (2014)',
	                                isMeasure: true,
	                                format: "$0,000.00",
	                                queryName: 'sales1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
	                                roles: { X: true }
	                            },
	                            {
	                                displayName: 'Sales Amount (2015)',
	                                isMeasure: true,
	                                format: "$0,000.00",
	                                queryName: 'sales2',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { Y: true }
	                            }
	                        ],
	                        objects: {
	                            crosshair: { show: true }
	                        }
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            // Sales Amount for 2014
	                            values: this.sampleData[0],
	                        },
	                        {
	                            source: dataViewMetadata.columns[2],
	                            // Sales Amount for 2015
	                            values: this.sampleData[1],
	                        }
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    var tableDataValues = categoryValues.map(function (countryName, idx) {
	                        return [countryName, columns[0].values[idx], columns[1].values[idx]];
	                    });
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            },
	                            table: {
	                                rows: tableDataValues,
	                                columns: dataViewMetadata.columns,
	                            },
	                            single: { value: this.sampleSingleData }
	                        }];
	                };
	                SalesByCountryData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    });
	                    this.sampleSingleData = this.getRandomValue(this.sampleMin, this.sampleMax);
	                };
	                return SalesByCountryData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SalesByCountryData = SalesByCountryData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 68 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SalesByDayOfWeekData = (function (_super) {
	                __extends(SalesByDayOfWeekData, _super);
	                function SalesByDayOfWeekData() {
	                    _super.apply(this, arguments);
	                    this.name = "SalesByDayOfWeekData";
	                    this.displayName = "Sales by day of week";
	                    this.visuals = ['comboChart',
	                        'dataDotClusteredColumnComboChart',
	                        'dataDotStackedColumnComboChart',
	                        'lineStackedColumnComboChart',
	                        'lineClusteredColumnComboChart',
	                        'asterPlot',
	                        'radarChart'
	                    ];
	                    this.sampleData1 = [
	                        [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34, 570921.34],
	                        [123455.43, 40566.43, 200457.78, 5000.49, 320000.57, 450000.34, 140832.67]
	                    ];
	                    this.sampleMin1 = 30000;
	                    this.sampleMax1 = 1000000;
	                    this.sampleData2 = [
	                        [31, 17, 24, 30, 37, 40, 12],
	                        [30, 35, 20, 25, 32, 35, 15]
	                    ];
	                    this.sampleMin2 = 10;
	                    this.sampleMax2 = 45;
	                }
	                SalesByDayOfWeekData.prototype.getDataViews = function () {
	                    //first dataView - Sales by day of week
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "day of week" } });
	                    var categoryValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Day',
	                                queryName: 'Day',
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { Category: true }
	                            },
	                            {
	                                displayName: 'Previous week sales',
	                                isMeasure: true,
	                                format: "$0,000.00",
	                                queryName: 'sales1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
	                                roles: { Y: true }
	                            },
	                            {
	                                displayName: 'This week sales',
	                                isMeasure: true,
	                                format: "$0,000.00",
	                                queryName: 'sales2',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { Y: true }
	                            }
	                        ]
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            // Sales Amount for 2014
	                            values: this.sampleData1[0],
	                        },
	                        {
	                            source: dataViewMetadata.columns[2],
	                            // Sales Amount for 2015
	                            values: this.sampleData1[1],
	                        }
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    var tableDataValues = categoryValues.map(function (dayName, idx) {
	                        return [dayName, columns[0].values[idx], columns[1].values[idx]];
	                    });
	                    //first dataView - Sales by day of week END
	                    //second dataView - Temperature by day of week
	                    var fieldExprTemp = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table2", name: "day of week" } });
	                    var categoryValuesTemp = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	                    var categoryIdentitiesTemp = categoryValuesTemp.map(function (value) {
	                        var exprTemp = powerbi.data.SQExprBuilder.equal(fieldExprTemp, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(exprTemp);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadataTemp = {
	                        columns: [
	                            {
	                                displayName: 'Day',
	                                queryName: 'Day',
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { Category: true }
	                            },
	                            {
	                                displayName: 'Previous week temperature',
	                                isMeasure: true,
	                                queryName: 'temp1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { Y: true }
	                            },
	                            {
	                                displayName: 'This week temperature',
	                                isMeasure: true,
	                                queryName: 'temp2',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { Y: true }
	                            }
	                        ]
	                    };
	                    var columnsTemp = [
	                        {
	                            source: dataViewMetadataTemp.columns[1],
	                            // temperature prev week
	                            values: this.sampleData2[0],
	                        },
	                        {
	                            source: dataViewMetadataTemp.columns[2],
	                            // temperature this week
	                            values: this.sampleData2[1],
	                        }
	                    ];
	                    var dataValuesTemp = DataViewTransform.createValueColumns(columnsTemp);
	                    var tableDataValuesTemp = categoryValuesTemp.map(function (dayName, idx) {
	                        return [dayName, columnsTemp[0].values[idx], columnsTemp[1].values[idx]];
	                    });
	                    //first dataView - Sales by day of week END
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            },
	                            table: {
	                                rows: tableDataValues,
	                                columns: dataViewMetadata.columns,
	                            }
	                        },
	                        {
	                            metadata: dataViewMetadataTemp,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadataTemp.columns[0],
	                                        values: categoryValuesTemp,
	                                        identity: categoryIdentitiesTemp,
	                                    }],
	                                values: dataValuesTemp
	                            },
	                            table: {
	                                rows: tableDataValuesTemp,
	                                columns: dataViewMetadataTemp.columns,
	                            }
	                        }];
	                };
	                SalesByDayOfWeekData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData1 = this.sampleData1.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin1, _this.sampleMax1); });
	                    });
	                    this.sampleData2 = this.sampleData2.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin2, _this.sampleMax2); });
	                    });
	                };
	                return SalesByDayOfWeekData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SalesByDayOfWeekData = SalesByDayOfWeekData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 69 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var ServicesByUsers = (function (_super) {
	                __extends(ServicesByUsers, _super);
	                function ServicesByUsers() {
	                    _super.apply(this, arguments);
	                    this.name = "ServicesByUsers";
	                    this.displayName = "Services by users";
	                    this.visuals = ['radarChart'];
	                    this.sampleData = [
	                        [59, 56, 42, 34, 48, 14, 7, 78, 85, 90, 18, 7, 8, 9, 10],
	                        [48, 46, 29, 11, 14, 5, 14, 6, 24, 17, 15, 12, 67, 56, 16]
	                    ];
	                    this.sampleMin = 1;
	                    this.sampleMax = 100;
	                    this.sampleSingleData = 50;
	                }
	                ServicesByUsers.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "country" } });
	                    var categoryValues = ["Email", "Social Networks", "Internet Banking", "News Sportsites", "Search Engine",
	                        "View Shopping sites", "Paying Online", "Buy Online", "Online Gaming", "Offline Gaming", "Photo Video",
	                        "Reading", "Listen Music", "Watch TV", "Listen Radio"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Devices',
	                                queryName: 'Devices',
	                                type: powerbi.ValueType.fromDescriptor({ text: true })
	                            },
	                            {
	                                displayName: 'Smartphone',
	                                isMeasure: true,
	                                format: "0.00",
	                                queryName: 'smartphone',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: '#1F77B4' } } } },
	                            },
	                            {
	                                displayName: 'Tablet',
	                                isMeasure: true,
	                                format: "0.00",
	                                queryName: 'Tablet',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: '#FF7F0E' } } } }
	                            }
	                        ]
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            values: this.sampleData[0],
	                        },
	                        {
	                            source: dataViewMetadata.columns[2],
	                            values: this.sampleData[1],
	                        }
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    var tableDataValues = categoryValues.map(function (countryName, idx) {
	                        return [countryName, columns[0].values[idx], columns[1].values[idx]];
	                    });
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            },
	                            table: {
	                                rows: tableDataValues,
	                                columns: dataViewMetadata.columns,
	                            },
	                            single: { value: this.sampleSingleData }
	                        }];
	                };
	                ServicesByUsers.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function (item) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    });
	                    this.sampleSingleData = this.getRandomValue(this.sampleMin, this.sampleMax);
	                };
	                return ServicesByUsers;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.ServicesByUsers = ServicesByUsers;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 70 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SimpleDotPlotData = (function (_super) {
	                __extends(SimpleDotPlotData, _super);
	                function SimpleDotPlotData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleDotPlotData";
	                    this.displayName = "Simple DotPlot Data";
	                    this.visuals = ["dotPlot"];
	                    this.categoryValues = ['Betty', 'Mey', 'Nancy', 'Anna', 'Ben', 'David', 'Tim'];
	                    this.sampleValues = [4, 4, 2, 3, 5, 2, 2];
	                    this.sampleValueMin = 0;
	                    this.sampleValueMax = 10;
	                }
	                SimpleDotPlotData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "names" } });
	                    var categoryIdentities = this.categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    var dataViewMetadata = {
	                        columns: [{
	                                displayName: 'Name',
	                                queryName: 'Name',
	                                type: ValueType.fromDescriptor({
	                                    text: true
	                                }),
	                                roles: {
	                                    Category: true
	                                }
	                            },
	                            {
	                                displayName: 'Count',
	                                queryName: 'Count',
	                                type: powerbi.ValueType.fromDescriptor({ integer: true }),
	                                roles: {
	                                    Series: true
	                                }
	                            }]
	                    }, columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            values: this.sampleValues
	                        }
	                    ], dataValues = DataViewTransform.createValueColumns(columns);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: this.categoryValues,
	                                        identity: categoryIdentities
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                SimpleDotPlotData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleValues = this.sampleValues.map(function (item) {
	                        return _this.getRandomValue(_this.sampleValueMin, _this.sampleValueMax);
	                    });
	                };
	                return SimpleDotPlotData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleDotPlotData = SimpleDotPlotData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 71 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var PrimitiveType = powerbi.PrimitiveType;
	            var SimpleTimelineData = (function (_super) {
	                __extends(SimpleTimelineData, _super);
	                function SimpleTimelineData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleTimelineData";
	                    this.displayName = "Simple Timeline Data";
	                    this.visuals = ["timeline"];
	                }
	                SimpleTimelineData.prototype.getDataViews = function () {
	                    var rows = [
	                        ['01.01.2014'],
	                        ['02.01.2014'],
	                        ['03.01.2014'],
	                        ['04.01.2014'],
	                        ['05.01.2014'],
	                        ['06.01.2014'],
	                        ['07.01.2014'],
	                        ['08.01.2014'],
	                        ['09.01.2014'],
	                        ['10.01.2014'],
	                        ['11.01.2014'],
	                        ['12.01.2014'],
	                        ['13.01.2014'],
	                        ['14.01.2014'],
	                        ['15.01.2014'],
	                        ['16.01.2014'],
	                        ['17.01.2014'],
	                        ['18.01.2014'],
	                        ['19.01.2014'],
	                        ['20.01.2014'],
	                        ['21.01.2014'],
	                        ['22.01.2014'],
	                        ['23.01.2014'],
	                        ['24.01.2014'],
	                        ['25.01.2014'],
	                        ['26.01.2014'],
	                        ['27.01.2014'],
	                        ['28.01.2014'],
	                        ['29.01.2014'],
	                        ['30.01.2014'],
	                        ['31.01.2014'],
	                        ['01.02.2014'],
	                        ['02.02.2014'],
	                        ['03.02.2014'],
	                        ['04.02.2014'],
	                        ['05.02.2014'],
	                        ['06.02.2014'],
	                        ['07.02.2014'],
	                        ['08.02.2014'],
	                        ['09.02.2014'],
	                        ['10.02.2014'],
	                        ['11.02.2014'],
	                        ['12.02.2014'],
	                        ['13.02.2014'],
	                        ['14.02.2014'],
	                        ['15.02.2014'],
	                        ['16.02.2014'],
	                        ['17.02.2014'],
	                        ['18.02.2014'],
	                        ['19.02.2014'],
	                        ['20.02.2014'],
	                        ['21.02.2014'],
	                        ['22.02.2014'],
	                        ['23.02.2014'],
	                        ['24.02.2014'],
	                        ['25.02.2014'],
	                        ['26.02.2014'],
	                        ['27.02.2014'],
	                        ['28.02.2014'],
	                        ['01.03.2014'],
	                        ['02.03.2014'],
	                        ['03.03.2014'],
	                        ['04.03.2014'],
	                        ['05.03.2014'],
	                        ['06.03.2014'],
	                        ['07.03.2014'],
	                        ['08.03.2014'],
	                        ['09.03.2014'],
	                        ['10.03.2014'],
	                        ['11.03.2014'],
	                        ['12.03.2014'],
	                        ['13.03.2014'],
	                        ['14.03.2014'],
	                        ['15.03.2014'],
	                        ['16.03.2014'],
	                        ['17.03.2014'],
	                        ['18.03.2014'],
	                        ['19.03.2014'],
	                        ['20.03.2014'],
	                        ['21.03.2014'],
	                        ['22.03.2014'],
	                        ['23.03.2014'],
	                        ['24.03.2014'],
	                        ['25.03.2014'],
	                        ['26.03.2014'],
	                        ['27.03.2014'],
	                        ['28.03.2014'],
	                        ['29.03.2014'],
	                        ['30.03.2014'],
	                        ['30.03.2017']
	                    ];
	                    var categoryValues = rows.map(function (value) {
	                        var arr = value[0].split('.');
	                        return (new Date(Number(arr[2]), Number(arr[1]) - 1, Number(arr[0]))); // months in JavaScript start with 0
	                    });
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Team',
	                                queryName: 'Team',
	                                type: powerbi.ValueType.fromDescriptor({ text: true })
	                            },
	                            {
	                                displayName: 'Volume',
	                                isMeasure: true,
	                                queryName: 'volume1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                            },
	                        ]
	                    };
	                    var seriesIdentityField = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: 'e', name: 'series' } });
	                    var dataTypeString = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Text);
	                    var groupSource1 = { displayName: 'group1', type: dataTypeString, index: 0 };
	                    return [{
	                            metadata: { columns: [groupSource1] },
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identityFields: [seriesIdentityField],
	                                        objects: [
	                                            {
	                                                dataPoint: {
	                                                    fill: {
	                                                        solid: {
	                                                            color: 'rgb(165, 172, 175)'
	                                                        }
	                                                    }
	                                                }
	                                            },
	                                            {
	                                                dataPoint: {
	                                                    fill: {
	                                                        solid: {
	                                                            color: 'rgb(175, 30, 44)'
	                                                        }
	                                                    }
	                                                }
	                                            },
	                                        ]
	                                    }],
	                            },
	                            table: {
	                                columns: [groupSource1],
	                                rows: [],
	                            }
	                        }];
	                };
	                SimpleTimelineData.prototype.randomize = function () {
	                };
	                return SimpleTimelineData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleTimelineData = SimpleTimelineData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 72 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SimpleFunnelData = (function (_super) {
	                __extends(SimpleFunnelData, _super);
	                function SimpleFunnelData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleFunnelData";
	                    this.displayName = "Simple funnel data";
	                    this.visuals = ['funnel'];
	                    this.sampleData = [814724.34, 742731.43, 376074.57, 200263.49, 140063.49, 96066.43];
	                    this.sampleMin = 3000;
	                    this.sampleMax = 1000000;
	                }
	                SimpleFunnelData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "funnel", name: "country" } });
	                    var categoryValues = ["Australia", "Canada", "France", "Germany", "United Kingdom", "United States"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Country',
	                                queryName: 'Country',
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { Category: true }
	                            },
	                            {
	                                displayName: 'Sales Amount (2014)',
	                                isMeasure: true,
	                                format: "$0,000.00",
	                                queryName: 'sales1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
	                                roles: { "Y": true }
	                            }
	                        ]
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            // Sales Amount for 2014
	                            values: this.sampleData,
	                        },
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                SimpleFunnelData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    this.sampleData.sort(function (a, b) { return b - a; });
	                };
	                return SimpleFunnelData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleFunnelData = SimpleFunnelData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 73 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SimpleGaugeData = (function (_super) {
	                __extends(SimpleGaugeData, _super);
	                function SimpleGaugeData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleGaugeData";
	                    this.displayName = "Simple gauge data";
	                    this.visuals = ['gauge', 'owlGauge'
	                    ];
	                    this.sampleData = [50, 250, 300, 500];
	                    this.sampleMin = 50;
	                    this.sampleMax = 1500;
	                }
	                SimpleGaugeData.prototype.getDataViews = function () {
	                    var gaugeDataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'col2',
	                                roles: { 'MinValue': true },
	                                isMeasure: true,
	                                objects: { general: { formatString: '$0' } },
	                            }, {
	                                displayName: 'col1',
	                                roles: { 'Y': true },
	                                isMeasure: true,
	                                objects: { general: { formatString: '$0' } },
	                            }, {
	                                displayName: 'col4',
	                                roles: { 'TargetValue': true },
	                                isMeasure: true,
	                                objects: { general: { formatString: '$0' } },
	                            }, {
	                                displayName: 'col3',
	                                roles: { 'MaxValue': true },
	                                isMeasure: true,
	                                objects: { general: { formatString: '$0' } },
	                            }],
	                    };
	                    return [{
	                            metadata: gaugeDataViewMetadata,
	                            single: { value: this.sampleData[1] },
	                            categorical: {
	                                values: DataViewTransform.createValueColumns([
	                                    {
	                                        source: gaugeDataViewMetadata.columns[0],
	                                        values: [this.sampleData[0]],
	                                    }, {
	                                        source: gaugeDataViewMetadata.columns[1],
	                                        values: [this.sampleData[1]],
	                                    }, {
	                                        source: gaugeDataViewMetadata.columns[2],
	                                        values: [this.sampleData[2]],
	                                    }, {
	                                        source: gaugeDataViewMetadata.columns[3],
	                                        values: [this.sampleData[3]],
	                                    }])
	                            }
	                        }];
	                };
	                SimpleGaugeData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
	                    this.sampleData.sort(function (a, b) { return a - b; });
	                };
	                return SimpleGaugeData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleGaugeData = SimpleGaugeData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 74 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var PrimitiveType = powerbi.PrimitiveType;
	            var SimpleMatrixData = (function (_super) {
	                __extends(SimpleMatrixData, _super);
	                function SimpleMatrixData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleMatrixData";
	                    this.displayName = "Simple matrix data";
	                    this.visuals = ['matrix', 'sunburst'
	                    ];
	                }
	                SimpleMatrixData.prototype.getDataViews = function () {
	                    var dataTypeNumber = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double);
	                    var dataTypeString = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Text);
	                    var measureSource1 = { displayName: 'measure1', type: dataTypeNumber, isMeasure: true, index: 3, objects: { general: { formatString: '#.0' } } };
	                    var measureSource2 = { displayName: 'measure2', type: dataTypeNumber, isMeasure: true, index: 4, objects: { general: { formatString: '#.00' } } };
	                    var measureSource3 = { displayName: 'measure3', type: dataTypeNumber, isMeasure: true, index: 5, objects: { general: { formatString: '#' } } };
	                    var rowGroupSource1 = { displayName: 'RowGroup1', queryName: 'RowGroup1', type: dataTypeString, index: 0 };
	                    var rowGroupSource1Column = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "t", name: "rowgroup1" } });
	                    var rowGroupSource2 = { displayName: 'RowGroup2', queryName: 'RowGroup2', type: dataTypeString, index: 1 };
	                    var rowGroupSource2Column = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "t", name: "rowgroup2" } });
	                    var rowGroupSource3 = { displayName: 'RowGroup3', queryName: 'RowGroup3', type: dataTypeString, index: 2 };
	                    var rowGroupSource3Column = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "t", name: "rowgroup3" } });
	                    var matrixThreeMeasuresThreeRowGroups = {
	                        rows: {
	                            root: {
	                                children: [
	                                    {
	                                        value: 'North America',
	                                        children: [
	                                            {
	                                                value: 'Canada',
	                                                children: [
	                                                    {
	                                                        value: 'Ontario',
	                                                        values: {
	                                                            0: { value: 1000 },
	                                                            1: { value: 1001, valueSourceIndex: 1 },
	                                                            2: { value: 1002, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Ontario'))),
	                                                    },
	                                                    {
	                                                        value: 'Quebec',
	                                                        values: {
	                                                            0: { value: 1010 },
	                                                            1: { value: 1011, valueSourceIndex: 1 },
	                                                            2: { value: 1012, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Quebec'))),
	                                                    }
	                                                ],
	                                                identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource2Column, powerbi.data.SQExprBuilder.text('Canada'))),
	                                                childIdentityFields: [rowGroupSource3Column]
	                                            },
	                                            {
	                                                value: 'USA',
	                                                children: [
	                                                    {
	                                                        value: 'Washington',
	                                                        values: {
	                                                            0: { value: 1100 },
	                                                            1: { value: 1101, valueSourceIndex: 1 },
	                                                            2: { value: 1102, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Washington'))),
	                                                    },
	                                                    {
	                                                        value: 'Oregon',
	                                                        values: {
	                                                            0: { value: 1110 },
	                                                            1: { value: 1111, valueSourceIndex: 1 },
	                                                            2: { value: 1112, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Oregon'))),
	                                                    }
	                                                ],
	                                                identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource2Column, powerbi.data.SQExprBuilder.text('USA'))),
	                                                childIdentityFields: [rowGroupSource3Column]
	                                            }
	                                        ],
	                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource1Column, powerbi.data.SQExprBuilder.text('North America'))),
	                                        childIdentityFields: [rowGroupSource2Column]
	                                    },
	                                    {
	                                        value: 'South America',
	                                        children: [
	                                            {
	                                                value: 'Brazil',
	                                                children: [
	                                                    {
	                                                        value: 'Amazonas',
	                                                        values: {
	                                                            0: { value: 2000 },
	                                                            1: { value: 2001, valueSourceIndex: 1 },
	                                                            2: { value: 2002, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Amazonas'))),
	                                                    },
	                                                    {
	                                                        value: 'Mato Grosso',
	                                                        values: {
	                                                            0: { value: 2010 },
	                                                            1: { value: 2011, valueSourceIndex: 1 },
	                                                            2: { value: 2012, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Mato Grosso'))),
	                                                    }
	                                                ],
	                                                identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource2Column, powerbi.data.SQExprBuilder.text('Brazil'))),
	                                                childIdentityFields: [rowGroupSource3Column]
	                                            },
	                                            {
	                                                value: 'Chile',
	                                                children: [
	                                                    {
	                                                        value: 'Arica',
	                                                        values: {
	                                                            0: { value: 2100 },
	                                                            1: { value: 2101, valueSourceIndex: 1 },
	                                                            2: { value: 2102, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Arica'))),
	                                                    },
	                                                    {
	                                                        value: 'Parinacota',
	                                                        values: {
	                                                            0: { value: 2110 },
	                                                            1: { value: 2111, valueSourceIndex: 1 },
	                                                            2: { value: 2112, valueSourceIndex: 2 }
	                                                        },
	                                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource3Column, powerbi.data.SQExprBuilder.text('Parinacota'))),
	                                                    }
	                                                ],
	                                                identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource2Column, powerbi.data.SQExprBuilder.text('Chile'))),
	                                                childIdentityFields: [rowGroupSource3Column]
	                                            }
	                                        ],
	                                        identity: powerbi.data.createDataViewScopeIdentity(powerbi.data.SQExprBuilder.equal(rowGroupSource1Column, powerbi.data.SQExprBuilder.text('South America'))),
	                                        childIdentityFields: [rowGroupSource2Column]
	                                    },
	                                ],
	                                childIdentityFields: [rowGroupSource1Column],
	                            },
	                            levels: [
	                                { sources: [rowGroupSource1] },
	                                { sources: [rowGroupSource2] },
	                                { sources: [rowGroupSource3] }
	                            ]
	                        },
	                        columns: {
	                            root: {
	                                children: [
	                                    { level: 0 },
	                                    { level: 0, levelSourceIndex: 1 },
	                                    { level: 0, levelSourceIndex: 2 }
	                                ]
	                            },
	                            levels: [{
	                                    sources: [
	                                        measureSource1,
	                                        measureSource2,
	                                        measureSource3
	                                    ]
	                                }]
	                        },
	                        valueSources: [
	                            measureSource1,
	                            measureSource2,
	                            measureSource3
	                        ]
	                    };
	                    return [{
	                            metadata: { columns: [rowGroupSource1, rowGroupSource2, rowGroupSource3], segment: {} },
	                            matrix: matrixThreeMeasuresThreeRowGroups
	                        }];
	                };
	                SimpleMatrixData.prototype.randomize = function () {
	                };
	                return SimpleMatrixData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleMatrixData = SimpleMatrixData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 75 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var PrimitiveType = powerbi.PrimitiveType;
	            var SimpleTableData = (function (_super) {
	                __extends(SimpleTableData, _super);
	                function SimpleTableData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleTableData";
	                    this.displayName = "Simple table data";
	                    this.visuals = ['table',
	                    ];
	                }
	                SimpleTableData.prototype.getDataViews = function () {
	                    var dataTypeNumber = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double);
	                    var dataTypeString = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Text);
	                    var groupSource1 = { displayName: 'group1', type: dataTypeString, index: 0 };
	                    var groupSource2 = { displayName: 'group2', type: dataTypeString, index: 1 };
	                    var groupSource3 = { displayName: 'group3', type: dataTypeString, index: 2 };
	                    var measureSource1 = { displayName: 'measure1', type: dataTypeNumber, isMeasure: true, index: 3, objects: { general: { formatString: '#.0' } } };
	                    var measureSource2 = { displayName: 'measure2', type: dataTypeNumber, isMeasure: true, index: 4, objects: { general: { formatString: '#.00' } } };
	                    var measureSource3 = { displayName: 'measure3', type: dataTypeNumber, isMeasure: true, index: 5, objects: { general: { formatString: '#' } } };
	                    return [{
	                            metadata: { columns: [groupSource1, measureSource1, groupSource2, measureSource2, groupSource3, measureSource3] },
	                            table: {
	                                columns: [groupSource1, measureSource1, groupSource2, measureSource2, groupSource3, measureSource3],
	                                rows: [
	                                    ['A', 100, 'aa', 101, 'aa1', 102],
	                                    ['A', 103, 'aa', 104, 'aa2', 105],
	                                    ['A', 106, 'ab', 107, 'ab1', 108],
	                                    ['B', 109, 'ba', 110, 'ba1', 111],
	                                    ['B', 112, 'bb', 113, 'bb1', 114],
	                                    ['B', 115, 'bb', 116, 'bb2', 117],
	                                    ['C', 118, 'cc', 119, 'cc1', 120],
	                                ]
	                            }
	                        }];
	                };
	                SimpleTableData.prototype.randomize = function () {
	                };
	                return SimpleTableData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleTableData = SimpleTableData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 76 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var TeamScoreData = (function (_super) {
	                __extends(TeamScoreData, _super);
	                function TeamScoreData() {
	                    _super.apply(this, arguments);
	                    this.name = "TeamScoreData";
	                    this.displayName = "Team score data";
	                    this.visuals = ['cheerMeter',
	                    ];
	                }
	                TeamScoreData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "teams" } });
	                    var categoryValues = ["Seahawks", "49ers"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Team',
	                                queryName: 'Team',
	                                type: powerbi.ValueType.fromDescriptor({ text: true })
	                            },
	                            {
	                                displayName: 'Volume',
	                                isMeasure: true,
	                                queryName: 'volume1',
	                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                            },
	                        ]
	                    };
	                    var columns = [
	                        {
	                            source: dataViewMetadata.columns[1],
	                            values: [90, 30],
	                        },
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                        objects: [
	                                            {
	                                                dataPoint: {
	                                                    fill: {
	                                                        solid: {
	                                                            color: 'rgb(165, 172, 175)'
	                                                        }
	                                                    }
	                                                }
	                                            },
	                                            {
	                                                dataPoint: {
	                                                    fill: {
	                                                        solid: {
	                                                            color: 'rgb(175, 30, 44)'
	                                                        }
	                                                    }
	                                                }
	                                            },
	                                        ]
	                                    }],
	                                values: dataValues,
	                            },
	                        }];
	                };
	                TeamScoreData.prototype.randomize = function () {
	                };
	                return TeamScoreData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.TeamScoreData = TeamScoreData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 77 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var ProductSalesByDate = (function (_super) {
	                __extends(ProductSalesByDate, _super);
	                function ProductSalesByDate() {
	                    _super.call(this);
	                    this.name = "ProductSalesByDate";
	                    this.displayName = "Product sales by date";
	                    this.visuals = ['streamGraph'];
	                    this.sampleData = this.generateData(ProductSalesByDate.seriesCount, ProductSalesByDate.valueCount);
	                    this.dates = this.generateDates(ProductSalesByDate.valueCount);
	                }
	                ProductSalesByDate.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "date" } });
	                    var categoryValues = this.dates;
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.dateTime(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: this.generateColumnMetadata(ProductSalesByDate.seriesCount)
	                    };
	                    var columns = this.generateColumns(dataViewMetadata, ProductSalesByDate.seriesCount);
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    var tableDataValues = categoryValues.map(function (countryName, idx) {
	                        return [countryName, columns[0].values[idx], columns[1].values[idx]];
	                    });
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            },
	                            table: {
	                                rows: tableDataValues,
	                                columns: dataViewMetadata.columns,
	                            },
	                            single: { value: [].concat.apply([], this.sampleData) }
	                        }];
	                };
	                ProductSalesByDate.prototype.randomize = function () {
	                    this.sampleData = this.generateData(ProductSalesByDate.seriesCount, ProductSalesByDate.valueCount);
	                };
	                ProductSalesByDate.prototype.generateColumnMetadata = function (n) {
	                    var columns = [{
	                            displayName: 'Date',
	                            queryName: 'Date',
	                            type: powerbi.ValueType.fromDescriptor({ dateTime: true })
	                        }];
	                    for (var i = 0; i < n; i++) {
	                        columns.push({
	                            displayName: 'Product ' + (i + 1),
	                            isMeasure: true,
	                            format: "$0,000.00",
	                            queryName: 'sales' + i,
	                            groupName: 'Product ' + (i + 1),
	                            type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                        });
	                    }
	                    return columns;
	                };
	                ProductSalesByDate.prototype.generateDates = function (n) {
	                    var dates = [];
	                    for (var i = 0; i < n; i++) {
	                        var randDate = this.randomDate(new Date(2014, 0, 1), new Date(2015, 5, 10));
	                        if (_.contains(dates, randDate)) {
	                            i--;
	                        }
	                        else {
	                            dates.push(randDate);
	                        }
	                    }
	                    return dates.sort(function (a, b) {
	                        if (a.getTime() > b.getTime())
	                            return 1;
	                        return -1;
	                    });
	                };
	                ProductSalesByDate.prototype.randomDate = function (start, end) {
	                    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	                };
	                ProductSalesByDate.prototype.generateColumns = function (dataViewMetadata, n) {
	                    var columns = [];
	                    for (var i = 0; i < n; i++) {
	                        columns.push({
	                            source: dataViewMetadata.columns[i + 1],
	                            // Sales Amount for 2014
	                            values: this.sampleData[i],
	                        });
	                    }
	                    return columns;
	                };
	                ProductSalesByDate.prototype.generateData = function (n, m) {
	                    var data = [];
	                    for (var i = 0; i < n; i++) {
	                        data.push(this.generateSeries(m));
	                    }
	                    return data;
	                };
	                // Inspired by Lee Byron's test data generator.
	                ProductSalesByDate.prototype.generateSeries = function (n) {
	                    var generateValue = function (a) {
	                        var x = 1 / (.1 + Math.random()), y = 2 * Math.random() - .5, z = 10 / (.1 + Math.random());
	                        for (var i = 0; i < n; i++) {
	                            var w = (i / n - y) * z;
	                            a[i] += x * Math.exp(-w * w);
	                        }
	                    };
	                    var a = [], i;
	                    for (i = 0; i < n; ++i)
	                        a[i] = 0;
	                    for (i = 0; i < 5; ++i)
	                        generateValue(a);
	                    return a.map(function (d, i) { return Math.max(0, d) * 10000; });
	                };
	                ProductSalesByDate.seriesCount = 4;
	                ProductSalesByDate.valueCount = 50;
	                return ProductSalesByDate;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.ProductSalesByDate = ProductSalesByDate;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 78 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var SimpleTreeData = (function (_super) {
	                __extends(SimpleTreeData, _super);
	                function SimpleTreeData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleTreeData";
	                    this.displayName = "Tree data";
	                    this.visuals = ['comboChart'];
	                }
	                SimpleTreeData.prototype.getDataViews = function () {
	                    var dataViewMetadata = {
	                        columns: [] // no columns for now
	                    };
	                    return [{
	                            metadata: dataViewMetadata,
	                            tree: {
	                                root: {
	                                    "name": "flare",
	                                    "children": [
	                                        {
	                                            "name": "analytics",
	                                            "children": [
	                                                {
	                                                    "name": "cluster",
	                                                    "children": [
	                                                        { "name": "AgglomerativeCluster", "value": 3938 },
	                                                        { "name": "CommunityStructure", "value": 3812 },
	                                                        { "name": "HierarchicalCluster", "value": 6714 },
	                                                        { "name": "MergeEdge", "value": 743 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "graph",
	                                                    "children": [
	                                                        { "name": "BetweennessCentrality", "value": 3534 },
	                                                        { "name": "LinkDistance", "value": 5731 },
	                                                        { "name": "MaxFlowMinCut", "value": 7840 },
	                                                        { "name": "ShortestPaths", "value": 5914 },
	                                                        { "name": "SpanningTree", "value": 3416 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "optimization",
	                                                    "children": [
	                                                        { "name": "AspectRatioBanker", "value": 7074 }
	                                                    ]
	                                                }
	                                            ]
	                                        },
	                                        {
	                                            "name": "animate",
	                                            "children": [
	                                                { "name": "Easing", "value": 17010 },
	                                                { "name": "FunctionSequence", "value": 5842 },
	                                                {
	                                                    "name": "interpolate",
	                                                    "children": [
	                                                        { "name": "ArrayInterpolator", "value": 1983 },
	                                                        { "name": "ColorInterpolator", "value": 2047 },
	                                                        { "name": "DateInterpolator", "value": 1375 },
	                                                        { "name": "Interpolator", "value": 8746 },
	                                                        { "name": "MatrixInterpolator", "value": 2202 },
	                                                        { "name": "NumberInterpolator", "value": 1382 },
	                                                        { "name": "ObjectInterpolator", "value": 1629 },
	                                                        { "name": "PointInterpolator", "value": 1675 },
	                                                        { "name": "RectangleInterpolator", "value": 2042 }
	                                                    ]
	                                                },
	                                                { "name": "ISchedulable", "value": 1041 },
	                                                { "name": "Parallel", "value": 5176 },
	                                                { "name": "Pause", "value": 449 },
	                                                { "name": "Scheduler", "value": 5593 },
	                                                { "name": "Sequence", "value": 5534 },
	                                                { "name": "Transition", "value": 9201 },
	                                                { "name": "Transitioner", "value": 19975 },
	                                                { "name": "TransitionEvent", "value": 1116 },
	                                                { "name": "Tween", "value": 6006 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "data",
	                                            "children": [
	                                                {
	                                                    "name": "converters",
	                                                    "children": [
	                                                        { "name": "Converters", "value": 721 },
	                                                        { "name": "DelimitedTextConverter", "value": 4294 },
	                                                        { "name": "GraphMLConverter", "value": 9800 },
	                                                        { "name": "IDataConverter", "value": 1314 },
	                                                        { "name": "JSONConverter", "value": 2220 }
	                                                    ]
	                                                },
	                                                { "name": "DataField", "value": 1759 },
	                                                { "name": "DataSchema", "value": 2165 },
	                                                { "name": "DataSet", "value": 586 },
	                                                { "name": "DataSource", "value": 3331 },
	                                                { "name": "DataTable", "value": 772 },
	                                                { "name": "DataUtil", "value": 3322 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "display",
	                                            "children": [
	                                                { "name": "DirtySprite", "value": 8833 },
	                                                { "name": "LineSprite", "value": 1732 },
	                                                { "name": "RectSprite", "value": 3623 },
	                                                { "name": "TextSprite", "value": 10066 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "flex",
	                                            "children": [
	                                                { "name": "FlareVis", "value": 4116 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "physics",
	                                            "children": [
	                                                { "name": "DragForce", "value": 1082 },
	                                                { "name": "GravityForce", "value": 1336 },
	                                                { "name": "IForce", "value": 319 },
	                                                { "name": "NBodyForce", "value": 10498 },
	                                                { "name": "Particle", "value": 2822 },
	                                                { "name": "Simulation", "value": 9983 },
	                                                { "name": "Spring", "value": 2213 },
	                                                { "name": "SpringForce", "value": 1681 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "query",
	                                            "children": [
	                                                { "name": "AggregateExpression", "value": 1616 },
	                                                { "name": "And", "value": 1027 },
	                                                { "name": "Arithmetic", "value": 3891 },
	                                                { "name": "Average", "value": 891 },
	                                                { "name": "BinaryExpression", "value": 2893 },
	                                                { "name": "Comparison", "value": 5103 },
	                                                { "name": "CompositeExpression", "value": 3677 },
	                                                { "name": "Count", "value": 781 },
	                                                { "name": "DateUtil", "value": 4141 },
	                                                { "name": "Distinct", "value": 933 },
	                                                { "name": "Expression", "value": 5130 },
	                                                { "name": "ExpressionIterator", "value": 3617 },
	                                                { "name": "Fn", "value": 3240 },
	                                                { "name": "If", "value": 2732 },
	                                                { "name": "IsA", "value": 2039 },
	                                                { "name": "Literal", "value": 1214 },
	                                                { "name": "Match", "value": 3748 },
	                                                { "name": "Maximum", "value": 843 },
	                                                {
	                                                    "name": "methods",
	                                                    "children": [
	                                                        { "name": "add", "value": 593 },
	                                                        { "name": "and", "value": 330 },
	                                                        { "name": "average", "value": 287 },
	                                                        { "name": "count", "value": 277 },
	                                                        { "name": "distinct", "value": 292 },
	                                                        { "name": "div", "value": 595 },
	                                                        { "name": "eq", "value": 594 },
	                                                        { "name": "fn", "value": 460 },
	                                                        { "name": "gt", "value": 603 },
	                                                        { "name": "gte", "value": 625 },
	                                                        { "name": "iff", "value": 748 },
	                                                        { "name": "isa", "value": 461 },
	                                                        { "name": "lt", "value": 597 },
	                                                        { "name": "lte", "value": 619 },
	                                                        { "name": "max", "value": 283 },
	                                                        { "name": "min", "value": 283 },
	                                                        { "name": "mod", "value": 591 },
	                                                        { "name": "mul", "value": 603 },
	                                                        { "name": "neq", "value": 599 },
	                                                        { "name": "not", "value": 386 },
	                                                        { "name": "or", "value": 323 },
	                                                        { "name": "orderby", "value": 307 },
	                                                        { "name": "range", "value": 772 },
	                                                        { "name": "select", "value": 296 },
	                                                        { "name": "stddev", "value": 363 },
	                                                        { "name": "sub", "value": 600 },
	                                                        { "name": "sum", "value": 280 },
	                                                        { "name": "update", "value": 307 },
	                                                        { "name": "variance", "value": 335 },
	                                                        { "name": "where", "value": 299 },
	                                                        { "name": "xor", "value": 354 },
	                                                        { "name": "_", "value": 264 }
	                                                    ]
	                                                },
	                                                { "name": "Minimum", "value": 843 },
	                                                { "name": "Not", "value": 1554 },
	                                                { "name": "Or", "value": 970 },
	                                                { "name": "Query", "value": 13896 },
	                                                { "name": "Range", "value": 1594 },
	                                                { "name": "StringUtil", "value": 4130 },
	                                                { "name": "Sum", "value": 791 },
	                                                { "name": "Variable", "value": 1124 },
	                                                { "name": "Variance", "value": 1876 },
	                                                { "name": "Xor", "value": 1101 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "scale",
	                                            "children": [
	                                                { "name": "IScaleMap", "value": 2105 },
	                                                { "name": "LinearScale", "value": 1316 },
	                                                { "name": "LogScale", "value": 3151 },
	                                                { "name": "OrdinalScale", "value": 3770 },
	                                                { "name": "QuantileScale", "value": 2435 },
	                                                { "name": "QuantitativeScale", "value": 4839 },
	                                                { "name": "RootScale", "value": 1756 },
	                                                { "name": "Scale", "value": 4268 },
	                                                { "name": "ScaleType", "value": 1821 },
	                                                { "name": "TimeScale", "value": 5833 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "util",
	                                            "children": [
	                                                { "name": "Arrays", "value": 8258 },
	                                                { "name": "Colors", "value": 10001 },
	                                                { "name": "Dates", "value": 8217 },
	                                                { "name": "Displays", "value": 12555 },
	                                                { "name": "Filter", "value": 2324 },
	                                                { "name": "Geometry", "value": 10993 },
	                                                {
	                                                    "name": "heap",
	                                                    "children": [
	                                                        { "name": "FibonacciHeap", "value": 9354 },
	                                                        { "name": "HeapNode", "value": 1233 }
	                                                    ]
	                                                },
	                                                { "name": "IEvaluable", "value": 335 },
	                                                { "name": "IPredicate", "value": 383 },
	                                                { "name": "IValueProxy", "value": 874 },
	                                                {
	                                                    "name": "math",
	                                                    "children": [
	                                                        { "name": "DenseMatrix", "value": 3165 },
	                                                        { "name": "IMatrix", "value": 2815 },
	                                                        { "name": "SparseMatrix", "value": 3366 }
	                                                    ]
	                                                },
	                                                { "name": "Maths", "value": 17705 },
	                                                { "name": "Orientation", "value": 1486 },
	                                                {
	                                                    "name": "palette",
	                                                    "children": [
	                                                        { "name": "ColorPalette", "value": 6367 },
	                                                        { "name": "Palette", "value": 1229 },
	                                                        { "name": "ShapePalette", "value": 2059 },
	                                                        { "name": "SizePalette", "value": 2291 }
	                                                    ]
	                                                },
	                                                { "name": "Property", "value": 5559 },
	                                                { "name": "Shapes", "value": 19118 },
	                                                { "name": "Sort", "value": 6887 },
	                                                { "name": "Stats", "value": 6557 },
	                                                { "name": "Strings", "value": 22026 }
	                                            ]
	                                        },
	                                        {
	                                            "name": "vis",
	                                            "children": [
	                                                {
	                                                    "name": "axis",
	                                                    "children": [
	                                                        { "name": "Axes", "value": 1302 },
	                                                        { "name": "Axis", "value": 24593 },
	                                                        { "name": "AxisGridLine", "value": 652 },
	                                                        { "name": "AxisLabel", "value": 636 },
	                                                        { "name": "CartesianAxes", "value": 6703 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "controls",
	                                                    "children": [
	                                                        { "name": "AnchorControl", "value": 2138 },
	                                                        { "name": "ClickControl", "value": 3824 },
	                                                        { "name": "Control", "value": 1353 },
	                                                        { "name": "ControlList", "value": 4665 },
	                                                        { "name": "DragControl", "value": 2649 },
	                                                        { "name": "ExpandControl", "value": 2832 },
	                                                        { "name": "HoverControl", "value": 4896 },
	                                                        { "name": "IControl", "value": 763 },
	                                                        { "name": "PanZoomControl", "value": 5222 },
	                                                        { "name": "SelectionControl", "value": 7862 },
	                                                        { "name": "TooltipControl", "value": 8435 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "data",
	                                                    "children": [
	                                                        { "name": "Data", "value": 20544 },
	                                                        { "name": "DataList", "value": 19788 },
	                                                        { "name": "DataSprite", "value": 10349 },
	                                                        { "name": "EdgeSprite", "value": 3301 },
	                                                        { "name": "NodeSprite", "value": 19382 },
	                                                        {
	                                                            "name": "render",
	                                                            "children": [
	                                                                { "name": "ArrowType", "value": 698 },
	                                                                { "name": "EdgeRenderer", "value": 5569 },
	                                                                { "name": "IRenderer", "value": 353 },
	                                                                { "name": "ShapeRenderer", "value": 2247 }
	                                                            ]
	                                                        },
	                                                        { "name": "ScaleBinding", "value": 11275 },
	                                                        { "name": "Tree", "value": 7147 },
	                                                        { "name": "TreeBuilder", "value": 9930 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "events",
	                                                    "children": [
	                                                        { "name": "DataEvent", "value": 2313 },
	                                                        { "name": "SelectionEvent", "value": 1880 },
	                                                        { "name": "TooltipEvent", "value": 1701 },
	                                                        { "name": "VisualizationEvent", "value": 1117 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "legend",
	                                                    "children": [
	                                                        { "name": "Legend", "value": 20859 },
	                                                        { "name": "LegendItem", "value": 4614 },
	                                                        { "name": "LegendRange", "value": 10530 }
	                                                    ]
	                                                },
	                                                {
	                                                    "name": "operator",
	                                                    "children": [
	                                                        {
	                                                            "name": "distortion",
	                                                            "children": [
	                                                                { "name": "BifocalDistortion", "value": 4461 },
	                                                                { "name": "Distortion", "value": 6314 },
	                                                                { "name": "FisheyeDistortion", "value": 3444 }
	                                                            ]
	                                                        },
	                                                        {
	                                                            "name": "encoder",
	                                                            "children": [
	                                                                { "name": "ColorEncoder", "value": 3179 },
	                                                                { "name": "Encoder", "value": 4060 },
	                                                                { "name": "PropertyEncoder", "value": 4138 },
	                                                                { "name": "ShapeEncoder", "value": 1690 },
	                                                                { "name": "SizeEncoder", "value": 1830 }
	                                                            ]
	                                                        },
	                                                        {
	                                                            "name": "filter",
	                                                            "children": [
	                                                                { "name": "FisheyeTreeFilter", "value": 5219 },
	                                                                { "name": "GraphDistanceFilter", "value": 3165 },
	                                                                { "name": "VisibilityFilter", "value": 3509 }
	                                                            ]
	                                                        },
	                                                        { "name": "IOperator", "value": 1286 },
	                                                        {
	                                                            "name": "label",
	                                                            "children": [
	                                                                { "name": "Labeler", "value": 9956 },
	                                                                { "name": "RadialLabeler", "value": 3899 },
	                                                                { "name": "StackedAreaLabeler", "value": 3202 }
	                                                            ]
	                                                        },
	                                                        {
	                                                            "name": "layout",
	                                                            "children": [
	                                                                { "name": "AxisLayout", "value": 6725 },
	                                                                { "name": "BundledEdgeRouter", "value": 3727 },
	                                                                { "name": "CircleLayout", "value": 9317 },
	                                                                { "name": "CirclePackingLayout", "value": 12003 },
	                                                                { "name": "DendrogramLayout", "value": 4853 },
	                                                                { "name": "ForceDirectedLayout", "value": 8411 },
	                                                                { "name": "IcicleTreeLayout", "value": 4864 },
	                                                                { "name": "IndentedTreeLayout", "value": 3174 },
	                                                                { "name": "Layout", "value": 7881 },
	                                                                { "name": "NodeLinkTreeLayout", "value": 12870 },
	                                                                { "name": "PieLayout", "value": 2728 },
	                                                                { "name": "RadialTreeLayout", "value": 12348 },
	                                                                { "name": "RandomLayout", "value": 870 },
	                                                                { "name": "StackedAreaLayout", "value": 9121 },
	                                                                { "name": "TreeMapLayout", "value": 9191 }
	                                                            ]
	                                                        },
	                                                        { "name": "Operator", "value": 2490 },
	                                                        { "name": "OperatorList", "value": 5248 },
	                                                        { "name": "OperatorSequence", "value": 4190 },
	                                                        { "name": "OperatorSwitch", "value": 2581 },
	                                                        { "name": "SortOperator", "value": 2023 }
	                                                    ]
	                                                },
	                                                { "name": "Visualization", "value": 16540 }
	                                            ]
	                                        }
	                                    ]
	                                }
	                            }
	                        }];
	                };
	                SimpleTreeData.prototype.randomize = function () {
	                };
	                return SimpleTreeData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleTreeData = SimpleTreeData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 79 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var ValueType = powerbi.ValueType;
	            var SimpleHistogramData = (function (_super) {
	                __extends(SimpleHistogramData, _super);
	                function SimpleHistogramData() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleHistogramData";
	                    this.displayName = "Simple Histogram Data";
	                    this.visuals = ["histogram"];
	                    this.minValue = 1;
	                    this.maxValue = 120;
	                    this.minLength = 5;
	                    this.maxLength = 100;
	                    this.sampleData = [
	                        36, 25, 38, 46, 55, 68, 72, 55, 36, 38,
	                        67, 45, 22, 48, 91, 46, 52, 61, 58, 55,
	                        25, 30, 34, 35, 33, 32, 8, 10, 1, 4, 3,
	                        96, 86, 35, 22, 23, 21, 20, 19, 16, 89,
	                        100, 105, 103, 101, 101, 100, 5, 6, 5,
	                        11, 19, 18, 18, 17, 14, 3, 2, 1, 6, 75,
	                        31, 31, 32, 33, 34, 30, 29, 45, 42, 43,
	                        27, 28, 29, 26, 25, 24, 23, 30, 31, 32
	                    ];
	                }
	                SimpleHistogramData.prototype.getDataViews = function () {
	                    var dataViewMetadata = {
	                        columns: [{
	                                displayName: "Age",
	                                queryName: "Age",
	                                type: ValueType.fromDescriptor({
	                                    text: true
	                                }),
	                                objects: {
	                                    dataPoint: {
	                                        fill: {
	                                            solid: {
	                                                color: "rgb(1, 184, 170)"
	                                            }
	                                        }
	                                    }
	                                }
	                            }]
	                    };
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: this.sampleData
	                                    }]
	                            }
	                        }];
	                };
	                SimpleHistogramData.prototype.randomize = function () {
	                    var length = Math.round(this.getRandomValue(this.minLength, this.maxLength));
	                    this.sampleData = [];
	                    for (var i = 0; i < length; i++) {
	                        var value = this.getRandomValue(this.minValue, this.maxValue);
	                        this.sampleData.push(Math.round(value));
	                    }
	                };
	                return SimpleHistogramData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleHistogramData = SimpleHistogramData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 80 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var SimpleDataByCountries = (function (_super) {
	                __extends(SimpleDataByCountries, _super);
	                function SimpleDataByCountries() {
	                    _super.apply(this, arguments);
	                    this.name = "SimpleDataByCountries";
	                    this.displayName = "Simple Data By Countries";
	                    this.visuals = ["sankeyDiagram"];
	                    this.minValue = 1;
	                    this.maxValue = 120;
	                    this.sampleData = [
	                        5, 1, 1, 1, 1, 5, 1, 1, 1,
	                        5, 1, 1, 1, 1, 5, 2, 1, 1
	                    ];
	                }
	                SimpleDataByCountries.prototype.getDataViews = function () {
	                    var dataViewMetadata = {
	                        columns: [{
	                                displayName: "Source",
	                                queryName: "Sankey.Source",
	                                type: powerbi.ValueType.fromDescriptor({
	                                    text: true
	                                })
	                            }, {
	                                displayName: "Destination",
	                                queryName: "Sankey.Destination",
	                                type: powerbi.ValueType.fromDescriptor({
	                                    text: true
	                                })
	                            }, {
	                                displayName: "Value",
	                                queryName: "Sum(Sankey.Value)"
	                            }]
	                    };
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: [
	                                            "Brazil", "Brazil", "Brazil", "Brazil", "Canada", "Canada",
	                                            "Canada", "Mexico", "Mexico", "Mexico", "Mexico", "USA",
	                                            "USA", "USA", "USA", "Portugal", "Portugal", "Portugal"
	                                        ]
	                                    }, {
	                                        source: dataViewMetadata.columns[1],
	                                        values: [
	                                            "Portugal", "France", "Spain", "England", "Portugal", "France",
	                                            "England", "Portugal", "France", "Spain", "England", "Portugal",
	                                            "France", "Spain", "England", "Angola", "Senegal", "Morocco"
	                                        ]
	                                    }],
	                                values: DataViewTransform.createValueColumns([{
	                                        source: dataViewMetadata.columns[2],
	                                        values: this.sampleData
	                                    }])
	                            }
	                        }];
	                };
	                SimpleDataByCountries.prototype.randomize = function () {
	                    var length = this.sampleData.length;
	                    this.sampleData = [];
	                    for (var i = 0; i < length; i++) {
	                        var value = this.getRandomValue(this.minValue, this.maxValue);
	                        this.sampleData.push(Math.round(value));
	                    }
	                };
	                return SimpleDataByCountries;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleDataByCountries = SimpleDataByCountries;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 81 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var SimpleCountriesData = (function (_super) {
	                __extends(SimpleCountriesData, _super);
	                function SimpleCountriesData() {
	                    _super.apply(this, arguments);
	                    this.quantityAngles = 0;
	                    this.name = "SimpleCountriesData";
	                    this.displayName = "Simple Countries Data";
	                    this.visuals = ["wordCloud"];
	                    this.countries = [
	                        "Afghanistan",
	                        "Albania",
	                        "Algeria",
	                        "Andorra",
	                        "Angola",
	                        "Antigua and Barbuda",
	                        "Argentina",
	                        "Armenia",
	                        "Aruba",
	                        "Australia",
	                        "Austria",
	                        "Azerbaijan",
	                        "Gabon",
	                        "Georgia",
	                        "Germany",
	                        "Ghana",
	                        "Greece",
	                        "Grenada",
	                        "Guatemala",
	                        "Guinea",
	                        "Guinea-Bissau",
	                        "Guyana",
	                        "Haiti",
	                        "Holy See",
	                        "Honduras",
	                        "Hong Kong",
	                        "Hungary",
	                        "Iceland",
	                        "India",
	                        "Indonesia",
	                        "Iran",
	                        "Iraq",
	                        "Ireland",
	                        "Israel",
	                        "Italy",
	                        "Macau",
	                        "Macedonia",
	                        "Madagascar",
	                        "Malawi",
	                        "Malaysia",
	                        "Maldives",
	                        "Mali",
	                        "Malta",
	                        "Marshall Islands",
	                        "Mauritania",
	                        "Mauritius",
	                        "Mexico",
	                        "Micronesia",
	                        "Moldova",
	                        "Monaco",
	                        "Monaco",
	                        "Monaco",
	                        "Monaco",
	                        "Monaco",
	                        "Monaco",
	                        "Monaco",
	                        "Mongolia",
	                        "Montenegro",
	                        "Morocco",
	                        "Mozambique",
	                        "United Kingdom",
	                        "United Kingdom",
	                        "United Kingdom",
	                        "The USA", ,
	                        "The USA",
	                        "The USA",
	                        "The USA",
	                        "Uganda",
	                        "Ukraine",
	                        "United Arab Emirates",
	                        "Uruguay",
	                        "Uzbekistan",
	                        "Romania",
	                        "Russia",
	                        "Rwanda",
	                        "Saint Kitts and Nevis",
	                        "Saint Lucia",
	                        "Saint Vincent and the Grenadines",
	                        "Samoa ",
	                        "San Marino",
	                        "Papua New Guinea",
	                        "Fiji",
	                        "Finland",
	                        "France",
	                        "France"
	                    ];
	                    this.fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({
	                        column: {
	                            schema: "s",
	                            entity: "table1",
	                            name: "country"
	                        }
	                    });
	                }
	                SimpleCountriesData.prototype.getDataViews = function () {
	                    var _this = this;
	                    var categoryIdentities = this.countries.map(function (item) {
	                        var expr = powerbi.data.SQExprBuilder.equal(_this.fieldExpr, powerbi.data.SQExprBuilder.text(item));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    }), dataViewMetadata = {
	                        columns: [{
	                                displayName: "Country",
	                                queryName: "Country",
	                                type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { "Values": true }
	                            }],
	                        objects: {
	                            rotateText: {
	                                show: true,
	                                quantityAngles: this.quantityAngles
	                            }
	                        }
	                    };
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: this.countries,
	                                        identity: categoryIdentities
	                                    }],
	                            },
	                            table: {
	                                columns: [dataViewMetadata.columns[0]],
	                                rows: this.countries.map(function (item) {
	                                    return [item];
	                                })
	                            }
	                        }];
	                };
	                SimpleCountriesData.prototype.randomize = function () {
	                    this.quantityAngles = Math.floor(this.getRandomValue(0, 10));
	                };
	                return SimpleCountriesData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.SimpleCountriesData = SimpleCountriesData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 82 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleDataViews;
	        (function (sampleDataViews) {
	            var DataViewTransform = powerbi.data.DataViewTransform;
	            var BulletChartData = (function (_super) {
	                __extends(BulletChartData, _super);
	                function BulletChartData() {
	                    _super.apply(this, arguments);
	                    this.name = "BulletChartData";
	                    this.displayName = "Revenue Data";
	                    this.visuals = ['bulletChart'];
	                    // Total, Net, Gross
	                    this.sampleData = [
	                        [46000, 35000, 28000],
	                        [45000, 41000, 32000],
	                        [0, 0, 0],
	                        [20000, 20000, 10000],
	                        [25000, 25000, 15000],
	                        [30000, 30000, 22000],
	                        [40000, 40000, 30000],
	                        [50000, 45000, 35000],
	                        [60000, 50000, 40000] // Max
	                    ];
	                    this.sampleMins = [20000, 30000, 0, 10000, 25000, 29000, 36000, 45000, 52000];
	                    this.sampleMaxs = [52000, 40000, 60000, 20000, 28000, 35000, 42000, 50000, 60000];
	                }
	                BulletChartData.prototype.getDataViews = function () {
	                    var fieldExpr = powerbi.data.SQExprBuilder.fieldExpr({ column: { schema: 's', entity: "table1", name: "revenue" } });
	                    var categoryValues = ["Total", "Net", "Gross"];
	                    var categoryIdentities = categoryValues.map(function (value) {
	                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
	                        return powerbi.data.createDataViewScopeIdentity(expr);
	                    });
	                    // Metadata, describes the data columns, and provides the visual with hints
	                    // so it can decide how to best represent the data
	                    var dataViewMetadata = {
	                        columns: [
	                            {
	                                displayName: 'Metric', queryName: 'Metric', type: powerbi.ValueType.fromDescriptor({ text: true }),
	                                roles: { "Category": true }
	                            },
	                            {
	                                displayName: 'Value', queryName: 'Value', isMeasure: true, type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "Value": true }
	                            },
	                            {
	                                displayName: 'TargetValue', queryName: 'TargetValue', isMeasure: true, type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "TargetValue": true }
	                            },
	                            {
	                                displayName: 'TargetValue2', queryName: 'TargetValue2', isMeasure: true, type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "TargetValue2": true }
	                            },
	                            {
	                                displayName: 'Minimum', queryName: 'Minimum', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "Minimum": true }
	                            },
	                            {
	                                displayName: 'NeedsImprovement', queryName: 'NeedsImprovement', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "NeedsImprovement": true }
	                            },
	                            {
	                                displayName: 'Satisfactory', queryName: 'Satisfactory', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "Satisfactory": true }
	                            },
	                            {
	                                displayName: 'Good', queryName: 'Good', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "Good": true }
	                            },
	                            {
	                                displayName: 'VeryGood', queryName: 'VeryGood', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "VeryGood": true }
	                            },
	                            {
	                                displayName: 'Maximum', queryName: 'Maximum', type: powerbi.ValueType.fromDescriptor({ numeric: true }),
	                                roles: { "Maximum": true }
	                            }
	                        ]
	                    };
	                    var columns = [
	                        { source: dataViewMetadata.columns[1], values: this.sampleData[0] },
	                        { source: dataViewMetadata.columns[2], values: this.sampleData[1] },
	                        { source: dataViewMetadata.columns[3], values: this.sampleData[2] },
	                        { source: dataViewMetadata.columns[4], values: this.sampleData[3] },
	                        { source: dataViewMetadata.columns[5], values: this.sampleData[4] },
	                        { source: dataViewMetadata.columns[6], values: this.sampleData[5] },
	                        { source: dataViewMetadata.columns[7], values: this.sampleData[6] },
	                        { source: dataViewMetadata.columns[8], values: this.sampleData[7] },
	                        { source: dataViewMetadata.columns[9], values: this.sampleData[8] }
	                    ];
	                    var dataValues = DataViewTransform.createValueColumns(columns);
	                    return [{
	                            metadata: dataViewMetadata,
	                            categorical: {
	                                categories: [{
	                                        source: dataViewMetadata.columns[0],
	                                        values: categoryValues,
	                                        identity: categoryIdentities,
	                                    }],
	                                values: dataValues
	                            }
	                        }];
	                };
	                BulletChartData.prototype.randomize = function () {
	                    var _this = this;
	                    this.sampleData = this.sampleData.map(function (item, idx) {
	                        return item.map(function () { return _this.getRandomValue(_this.sampleMins[idx], _this.sampleMaxs[idx]); });
	                    });
	                };
	                return BulletChartData;
	            }(sampleDataViews.SampleDataViews));
	            sampleDataViews.BulletChartData = BulletChartData;
	        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 83 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="./_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var sampleData;
	        (function (sampleData) {
	            var sampleDataViews = powerbi.visuals.sampleDataViews;
	            var SampleData = (function () {
	                function SampleData() {
	                }
	                /**
	                 * Returns sample data view for a visualization element specified.
	                 */
	                SampleData.getSamplesByPluginName = function (pluginName) {
	                    var samples = this.data.filter(function (item) { return item.hasPlugin(pluginName); });
	                    if (samples.length > 0) {
	                        return samples;
	                    }
	                    return this.data.filter(function (item) { return item.hasPlugin("default"); });
	                };
	                /**
	                 * Returns sampleDataView Instance for a visualization element specified.
	                 */
	                SampleData.getDataViewsBySampleName = function (sampleName) {
	                    return this.data.filter(function (item) { return (item.getName() === sampleName); })[0];
	                };
	                SampleData.data = [
	                    new sampleDataViews.CarLogosData(),
	                    new sampleDataViews.DistrictSalesData(),
	                    new sampleDataViews.FileStorageData(),
	                    new sampleDataViews.ImageData(),
	                    new sampleDataViews.ProfitLossData(),
	                    new sampleDataViews.RichtextData(),
	                    new sampleDataViews.SalesByCountryData(),
	                    new sampleDataViews.SalesByDayOfWeekData(),
	                    new sampleDataViews.ServicesByUsers(),
	                    new sampleDataViews.SimpleFunnelData(),
	                    new sampleDataViews.SimpleGaugeData(),
	                    new sampleDataViews.SimpleMatrixData(),
	                    new sampleDataViews.SimpleTableData(),
	                    new sampleDataViews.TeamScoreData(),
	                    new sampleDataViews.SimpleTreeData(),
	                    new sampleDataViews.ProductSalesByDate(),
	                    new sampleDataViews.SimpleDotPlotData(),
	                    new sampleDataViews.SimpleTimelineData(),
	                    new sampleDataViews.SimpleHistogramData(),
	                    new sampleDataViews.SimpleDataByCountries(),
	                    new sampleDataViews.SimpleCountriesData(),
	                    new sampleDataViews.BulletChartData()
	                ];
	                return SampleData;
	            }());
	            sampleData.SampleData = SampleData;
	        })(sampleData = visuals.sampleData || (visuals.sampleData = {}));
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 84 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	/// <reference path="./_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var SampleData = powerbi.visuals.sampleData.SampleData;
	        var HostControls = (function () {
	            function HostControls(parent, resetInteractiveVisualDelegate) {
	                var _this = this;
	                this.animation_duration = 250;
	                this.suppressAnimations = true;
	                this.minWidth = 200;
	                this.maxWidth = 1000;
	                this.minHeight = 100;
	                this.maxHeight = 600;
	                parent.find('#randomize').on('click', function () { return _this.randomize(); });
	                this.dataViewsSelect = parent.find('#dataViewsSelect').first();
	                this.suppressAnimationsElement = parent.find('input[name=suppressAnimations]').first();
	                this.suppressAnimationsElement.on('change', function () { return _this.onChangeSuppressAnimations(); });
	                this.animationDurationElement = parent.find('input[name=animation_duration]').first();
	                this.animationDurationElement.on('change', function () { return _this.onChangeDuration(); });
	                this.resetInteractiveVisual = resetInteractiveVisualDelegate;
	            }
	            HostControls.prototype.setHosts = function (hosts) {
	                var _this = this;
	                this.hosts = {};
	                for (var _i = 0, hosts_1 = hosts; _i < hosts_1.length; _i++) {
	                    var host = hosts_1[_i];
	                    this.hosts[host.name] = host;
	                    if (host.resizable) {
	                        host.container.resizable({
	                            minWidth: this.minWidth,
	                            maxWidth: this.maxWidth,
	                            minHeight: this.minHeight,
	                            maxHeight: this.maxHeight,
	                            resize: function (event, ui) { return _this.onResize(ui.element); }
	                        });
	                    }
	                    this.onResize(host.container);
	                }
	            };
	            HostControls.prototype.onResize = function (container) {
	                var host = this.findHostByContainerElement(container);
	                var containerSize = this.getContainerSize(host);
	                host.renderingViewport = {
	                    height: containerSize.height * host.renderingScale - 20,
	                    width: containerSize.width * host.renderingScale - 20
	                };
	                if (host.visual) {
	                    if (host.visual.onResizing) {
	                        host.visual.onResizing(host.renderingViewport);
	                    }
	                    if (host.visual.update) {
	                        host.visual.update({
	                            dataViews: this.sampleDataViews.getDataViews(),
	                            suppressAnimations: true,
	                            viewport: host.renderingViewport
	                        });
	                    }
	                }
	            };
	            HostControls.prototype.getContainerSize = function (host) {
	                return {
	                    // The containers' parent elements set the size of the container since the container itself is enlarged before scaling the visual
	                    height: host.container.parent().height(),
	                    width: host.container.parent().width()
	                };
	            };
	            HostControls.prototype.randomize = function () {
	                this.sampleDataViews.randomize();
	                for (var hostName in this.hosts) {
	                    var host = this.hosts[hostName];
	                    if (host.interactive) {
	                        // Since there are some unexpected behaviors in interactive visuals when randomizing the data, we use this method to create the visual from scratch instead.
	                        this.resetInteractiveVisual(host);
	                    }
	                    else {
	                        this.updateHost(host);
	                    }
	                }
	            };
	            HostControls.prototype.onChangeDuration = function () {
	                this.animation_duration = parseInt(this.animationDurationElement.val(), 10);
	                this.update();
	            };
	            HostControls.prototype.onChangeSuppressAnimations = function () {
	                this.suppressAnimations = !this.suppressAnimationsElement.is(':checked');
	                this.update();
	            };
	            HostControls.prototype.update = function () {
	                for (var hostName in this.hosts) {
	                    this.updateHost(this.hosts[hostName]);
	                }
	            };
	            HostControls.prototype.updateHost = function (host) {
	                if (host.visual) {
	                    if (host.visual.update) {
	                        host.visual.update({
	                            dataViews: this.sampleDataViews.getDataViews(),
	                            suppressAnimations: this.suppressAnimations,
	                            viewport: host.renderingViewport
	                        });
	                    }
	                    if (host.visual.onDataChanged && host.visual.onResizing) {
	                        host.visual.onDataChanged({
	                            dataViews: this.sampleDataViews.getDataViews(),
	                            suppressAnimations: this.suppressAnimations
	                        });
	                        host.visual.onResizing(host.renderingViewport);
	                    }
	                }
	            };
	            HostControls.prototype.onPluginChange = function (pluginName) {
	                var _this = this;
	                this.dataViewsSelect.empty();
	                var dataViews = SampleData.getSamplesByPluginName(pluginName);
	                var defaultDataView;
	                dataViews.forEach(function (item, i) {
	                    var option = $('<option>');
	                    option.val(item.getName());
	                    option.text(item.getDisplayName());
	                    if (i === 0) {
	                        option.attr('selected', 'selected');
	                        defaultDataView = item.getName();
	                    }
	                    _this.dataViewsSelect.append(option);
	                });
	                this.dataViewsSelect.change(function () {
	                    _this.onChangeDataViewSelection(_this.dataViewsSelect.val());
	                    _this.update();
	                });
	                if (defaultDataView) {
	                    this.onChangeDataViewSelection(defaultDataView);
	                }
	            };
	            HostControls.prototype.onChangeDataViewSelection = function (sampleName) {
	                this.sampleDataViews = SampleData.getDataViewsBySampleName(sampleName);
	            };
	            HostControls.prototype.findHostByContainerElement = function (container) {
	                for (var hostName in this.hosts) {
	                    var currentHost = this.hosts[hostName];
	                    if (currentHost.container[0] === container[0]) {
	                        return currentHost;
	                    }
	                }
	                return null;
	            };
	            return HostControls;
	        }());
	        visuals.HostControls = HostControls;
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 85 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	*  Power BI Visualizations
	*
	*  Copyright (c) Microsoft Corporation
	*  All rights reserved.
	*  MIT License
	*
	*  Permission is hereby granted, free of charge, to any person obtaining a copy
	*  of this software and associated documentation files (the ""Software""), to deal
	*  in the Software without restriction, including without limitation the rights
	*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	*  copies of the Software, and to permit persons to whom the Software is
	*  furnished to do so, subject to the following conditions:
	*
	*  The above copyright notice and this permission notice shall be included in
	*  all copies or substantial portions of the Software.
	*
	*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	*  THE SOFTWARE.
	*/
	/// <reference path="./_references.ts"/>
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals) {
	        var createPlugin = visuals.visualPluginFactory.createPlugin;
	        function createMinervaPlugins(plugins, featureSwitches) {
	            var scriptVisualEnabled = featureSwitches ? featureSwitches.scriptVisualEnabled : false;
	            var scriptVisualAuthoringEnabled = featureSwitches ? featureSwitches.scriptVisualAuthoringEnabled : false;
	            var isLabelInteractivityEnabled = featureSwitches ? featureSwitches.isLabelInteractivityEnabled : false;
	            var fillMapDataLabelsEnabled = featureSwitches ? featureSwitches.filledMapDataLabelsEnabled : false;
	            var advancedLineLabelsEnabled = featureSwitches ? featureSwitches.advancedLineLabelsEnabled : false;
	            // Bar Chart
	            createPlugin(plugins, powerbi.visuals.plugins.barChart, function () { return new visuals.CartesianChart({
	                chartType: 6 /* StackedBar */,
	                isScrollable: true, animator: new visuals.WebColumnChartAnimator(),
	                tooltipsEnabled: true,
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Card
	            createPlugin(plugins, powerbi.visuals.plugins.card, function () { return new visuals.Card({
	                isScrollable: true,
	                animator: new visuals.BaseAnimator(),
	            }); });
	            // Clustered Bar Chart
	            createPlugin(plugins, powerbi.visuals.plugins.clusteredBarChart, function () { return new visuals.CartesianChart({
	                chartType: 5 /* ClusteredBar */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Clustered Column Chart
	            createPlugin(plugins, powerbi.visuals.plugins.clusteredColumnChart, function () { return new visuals.CartesianChart({
	                chartType: 3 /* ClusteredColumn */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Column Chart
	            createPlugin(plugins, powerbi.visuals.plugins.columnChart, function () { return new visuals.CartesianChart({
	                chartType: 4 /* StackedColumn */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Data Dot Clustered Combo Chart
	            createPlugin(plugins, powerbi.visuals.plugins.dataDotClusteredColumnComboChart, function () { return new visuals.CartesianChart({
	                chartType: 15 /* DataDotClusteredColumnCombo */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior(), new visuals.DataDotChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Data Dot Stacked Combo Chart
	            createPlugin(plugins, powerbi.visuals.plugins.dataDotStackedColumnComboChart, function () { return new visuals.CartesianChart({
	                chartType: 16 /* DataDotStackedColumnCombo */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior(), new visuals.DataDotChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Donut Chart
	            createPlugin(plugins, powerbi.visuals.plugins.donutChart, function () { return new visuals.DonutChart({
	                animator: new visuals.WebDonutChartAnimator(),
	                isScrollable: true,
	                tooltipsEnabled: true,
	                behavior: new visuals.DonutChartWebBehavior(),
	            }); });
	            // Funnel Chart
	            createPlugin(plugins, powerbi.visuals.plugins.funnel, function () { return new visuals.FunnelChart({
	                animator: new visuals.WebFunnelAnimator(),
	                behavior: new visuals.FunnelWebBehavior(),
	                tooltipsEnabled: true,
	            }); });
	            // Gauge
	            createPlugin(plugins, powerbi.visuals.plugins.gauge, function () { return new visuals.Gauge({
	                animator: new visuals.BaseAnimator(),
	                tooltipsEnabled: true,
	            }); });
	            // Hundred Percent Stacked Bar Chart
	            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedBarChart, function () { return new visuals.CartesianChart({
	                chartType: 7 /* HundredPercentStackedBar */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Hundred Percent Stacked Column Chart
	            createPlugin(plugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart, function () { return new visuals.CartesianChart({
	                chartType: 8 /* HundredPercentStackedColumn */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Line Chart
	            createPlugin(plugins, powerbi.visuals.plugins.lineChart, function () { return new visuals.CartesianChart({
	                chartType: 0 /* Line */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.BaseAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.LineChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	                advancedLineLabelsEnabled: advancedLineLabelsEnabled,
	            }); });
	            // Area Chart
	            createPlugin(plugins, powerbi.visuals.plugins.areaChart, function () { return new visuals.CartesianChart({
	                chartType: 1 /* Area */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.BaseAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.LineChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	                advancedLineLabelsEnabled: advancedLineLabelsEnabled,
	            }); });
	            // Stacked Area Chart
	            createPlugin(plugins, powerbi.visuals.plugins.stackedAreaChart, function () { return new visuals.CartesianChart({
	                chartType: 2 /* StackedArea */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.BaseAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.LineChartWebBehavior()]),
	            }); });
	            // Line Clustered Combo Chart
	            createPlugin(plugins, powerbi.visuals.plugins.lineClusteredColumnComboChart, function () { return new visuals.CartesianChart({
	                chartType: 13 /* LineClusteredColumnCombo */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior(), new visuals.LineChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	                advancedLineLabelsEnabled: advancedLineLabelsEnabled,
	            }); });
	            // Line Stacked Combo Chart
	            createPlugin(plugins, powerbi.visuals.plugins.lineStackedColumnComboChart, function () { return new visuals.CartesianChart({
	                chartType: 14 /* LineStackedColumnCombo */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.WebColumnChartAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ColumnChartWebBehavior(), new visuals.LineChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	                advancedLineLabelsEnabled: advancedLineLabelsEnabled,
	            }); });
	            // Pie Chart
	            createPlugin(plugins, powerbi.visuals.plugins.pieChart, function () { return new visuals.DonutChart({
	                sliceWidthRatio: 0,
	                animator: new visuals.WebDonutChartAnimator(),
	                isScrollable: true,
	                tooltipsEnabled: true,
	                behavior: new visuals.DonutChartWebBehavior(),
	            }); });
	            // Scatter Chart
	            createPlugin(plugins, powerbi.visuals.plugins.scatterChart, function () { return new visuals.CartesianChart({
	                chartType: 9 /* Scatter */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                animator: new visuals.BaseAnimator(),
	                behavior: new visuals.CartesianChartBehavior([new visuals.ScatterChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Treemap
	            createPlugin(plugins, powerbi.visuals.plugins.treemap, function () { return new visuals.Treemap({
	                animator: new visuals.WebTreemapAnimator,
	                isScrollable: true,
	                behavior: new visuals.TreemapWebBehavior(),
	                tooltipsEnabled: true,
	            }); });
	            // Waterfall Chart
	            createPlugin(plugins, powerbi.visuals.plugins.waterfallChart, function () { return new visuals.CartesianChart({
	                chartType: 12 /* Waterfall */,
	                isScrollable: true,
	                tooltipsEnabled: true,
	                behavior: new visuals.CartesianChartBehavior([new visuals.WaterfallChartWebBehavior()]),
	                isLabelInteractivityEnabled: isLabelInteractivityEnabled,
	            }); });
	            // Map
	            createPlugin(plugins, powerbi.visuals.plugins.map, function () { return new visuals.Map({
	                behavior: new visuals.MapBehavior(),
	                tooltipsEnabled: true,
	                isLegendScrollable: true,
	            }); });
	            // Filled Map
	            createPlugin(plugins, powerbi.visuals.plugins.filledMap, function () { return new visuals.Map({
	                filledMap: true,
	                behavior: new visuals.MapBehavior,
	                tooltipsEnabled: true,
	                filledMapDataLabelsEnabled: fillMapDataLabelsEnabled,
	                isLegendScrollable: true,
	            }); });
	            // Slicer
	            createPlugin(plugins, powerbi.visuals.plugins.slicer, function () { return new visuals.Slicer({
	                behavior: new visuals.SlicerWebBehavior(),
	            }); });
	            // Matrix
	            createPlugin(plugins, powerbi.visuals.plugins.matrix, function () { return new visuals.Matrix({}); });
	            // Table
	            createPlugin(plugins, powerbi.visuals.plugins.table, function () { return new visuals.Table({}); });
	            ;
	            if (scriptVisualEnabled && scriptVisualAuthoringEnabled) {
	                // R visual
	                createPlugin(plugins, powerbi.visuals.plugins.scriptVisual, function () { return new visuals.ScriptVisual({ canRefresh: true }); });
	            }
	        }
	        var MobileVisualPluginService = (function () {
	            function MobileVisualPluginService(smallViewPortProperties, featureSwitches) {
	                var _this = this;
	                this.featureSwitches = featureSwitches;
	                this.smallViewPortProperties = smallViewPortProperties || {
	                    CartesianSmallViewPortProperties: {
	                        hideAxesOnSmallViewPort: true,
	                        hideLegendOnSmallViewPort: true,
	                        MinHeightLegendVisible: MobileVisualPluginService.MinHeightLegendVisible,
	                        MinHeightAxesVisible: MobileVisualPluginService.MinHeightAxesVisible,
	                    },
	                    GaugeSmallViewPortProperties: {
	                        hideGaugeSideNumbersOnSmallViewPort: true,
	                        smallGaugeMarginsOnSmallViewPort: true,
	                        MinHeightGaugeSideNumbersVisible: MobileVisualPluginService.MinHeightGaugeSideNumbersVisible,
	                        GaugeMarginsOnSmallViewPort: MobileVisualPluginService.GaugeMarginsOnSmallViewPort,
	                    },
	                    FunnelSmallViewPortProperties: {
	                        hideFunnelCategoryLabelsOnSmallViewPort: true,
	                        minHeightFunnelCategoryLabelsVisible: MobileVisualPluginService.MinHeightFunnelCategoryLabelsVisible,
	                    },
	                    DonutSmallViewPortProperties: {
	                        maxHeightToScaleDonutLegend: MobileVisualPluginService.MaxHeightToScaleDonutLegend,
	                    },
	                };
	                // Disable tooltips for mobile
	                visuals.TooltipManager.ShowTooltips = false;
	                // Don't trim overflow data on mobile
	                var trimOrdinalDataOnOverflow = false;
	                var mapThrottleInterval = this.getMapThrottleInterval();
	                this.visualPlugins = {};
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.areaChart, function () { return new visuals.CartesianChart({
	                    chartType: 1 /* Area */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.barChart, function () { return new visuals.CartesianChart({
	                    chartType: 6 /* StackedBar */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.clusteredBarChart, function () { return new visuals.CartesianChart({
	                    chartType: 5 /* ClusteredBar */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.clusteredColumnChart, function () { return new visuals.CartesianChart({
	                    chartType: 3 /* ClusteredColumn */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.columnChart, function () { return new visuals.CartesianChart({
	                    chartType: 4 /* StackedColumn */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.comboChart, function () { return new visuals.CartesianChart({
	                    chartType: 10 /* ComboChart */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotChart, function () { return new visuals.CartesianChart({
	                    chartType: 11 /* DataDot */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotClusteredColumnComboChart, function () { return new visuals.CartesianChart({
	                    chartType: 15 /* DataDotClusteredColumnCombo */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.dataDotStackedColumnComboChart, function () { return new visuals.CartesianChart({
	                    chartType: 16 /* DataDotStackedColumnCombo */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedBarChart, function () { return new visuals.CartesianChart({
	                    chartType: 7 /* HundredPercentStackedBar */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.hundredPercentStackedColumnChart, function () { return new visuals.CartesianChart({
	                    chartType: 8 /* HundredPercentStackedColumn */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.stackedAreaChart, function () { return new visuals.CartesianChart({
	                    chartType: 2 /* StackedArea */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.waterfallChart, function () { return new visuals.CartesianChart({
	                    chartType: 12 /* Waterfall */,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineChart, function () { return new visuals.CartesianChart({
	                    chartType: 0 /* Line */,
	                    cartesianSmallViewPortProperties: _this.smallViewPortProperties.CartesianSmallViewPortProperties,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineClusteredColumnComboChart, function () { return new visuals.CartesianChart({
	                    chartType: 13 /* LineClusteredColumnCombo */,
	                    cartesianSmallViewPortProperties: _this.smallViewPortProperties.CartesianSmallViewPortProperties,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.lineStackedColumnComboChart, function () { return new visuals.CartesianChart({
	                    chartType: 14 /* LineStackedColumnCombo */,
	                    cartesianSmallViewPortProperties: _this.smallViewPortProperties.CartesianSmallViewPortProperties,
	                    trimOrdinalDataOnOverflow: trimOrdinalDataOnOverflow
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.scatterChart, function () { return new visuals.CartesianChart({
	                    chartType: 9 /* Scatter */,
	                    cartesianSmallViewPortProperties: _this.smallViewPortProperties.CartesianSmallViewPortProperties,
	                    behavior: new visuals.CartesianChartBehavior([new visuals.ScatterChartMobileBehavior()])
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.gauge, function () { return new visuals.Gauge({
	                    gaugeSmallViewPortProperties: _this.smallViewPortProperties.GaugeSmallViewPortProperties
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.funnel, function () { return new visuals.FunnelChart({
	                    animator: null,
	                    funnelSmallViewPortProperties: _this.smallViewPortProperties.FunnelSmallViewPortProperties
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.donutChart, function () { return new visuals.DonutChart({
	                    disableGeometricCulling: true,
	                    smallViewPortProperties: _this.smallViewPortProperties.DonutSmallViewPortProperties
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.pieChart, function () { return new visuals.DonutChart({
	                    sliceWidthRatio: 0,
	                    disableGeometricCulling: true,
	                    smallViewPortProperties: _this.smallViewPortProperties.DonutSmallViewPortProperties
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.matrix, function () { return new visuals.Matrix({
	                    isTouchEnabled: true
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.table, function () { return new visuals.Table({
	                    isTouchEnabled: true
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.map, function () { return new visuals.Map({
	                    viewChangeThrottleInterval: mapThrottleInterval,
	                    enableCurrentLocation: featureSwitches ? featureSwitches.mapCurrentLocationEnabled : false
	                }); });
	                createPlugin(this.visualPlugins, powerbi.visuals.plugins.filledMap, function () { return new visuals.Map({
	                    filledMap: true,
	                    viewChangeThrottleInterval: mapThrottleInterval
	                }); });
	            }
	            MobileVisualPluginService.prototype.getPlugin = function (type) {
	                if (this.visualPlugins[type])
	                    return this.visualPlugins[type];
	                return powerbi.visuals.plugins[type];
	            };
	            MobileVisualPluginService.prototype.requireSandbox = function (plugin) {
	                return !plugin || plugin.custom;
	            };
	            // Windows phone webView chokes when zooming on heavy maps,
	            // this is a workaround to allow a relatively smooth pinch to zoom experience.
	            MobileVisualPluginService.prototype.getMapThrottleInterval = function () {
	                var windowsPhoneThrottleInterval = 100;
	                var userAgentLowerCase = navigator.userAgent.toLowerCase();
	                if (userAgentLowerCase.indexOf('windows phone') !== -1) {
	                    return windowsPhoneThrottleInterval;
	                }
	                return undefined;
	            };
	            MobileVisualPluginService.prototype.getInteractivityOptions = function (visualType) {
	                var mobileOptions = {
	                    overflow: this.getMobileOverflowString(visualType),
	                    isInteractiveLegend: this.isChartSupportInteractivity(visualType),
	                    selection: true,
	                };
	                return mobileOptions;
	            };
	            MobileVisualPluginService.prototype.getMobileOverflowString = function (visualType) {
	                switch (visualType) {
	                    case 'multiRowCard':
	                        return 'visible';
	                    default:
	                        return 'hidden';
	                }
	            };
	            MobileVisualPluginService.prototype.isChartSupportInteractivity = function (visualType) {
	                switch (visualType) {
	                    case 'areaChart':
	                    case 'barChart':
	                    case 'clusteredBarChart':
	                    case 'clusteredColumnChart':
	                    case 'columnChart':
	                    case 'donutChart':
	                    case 'hundredPercentStackedBarChart':
	                    case 'hundredPercentStackedColumnChart':
	                    case 'lineChart':
	                    case 'pieChart':
	                    case 'scatterChart':
	                    case 'table':
	                    case 'matrix':
	                    case 'multiRowCard':
	                        return true;
	                    default:
	                        return false;
	                }
	            };
	            MobileVisualPluginService.MinHeightLegendVisible = 125;
	            MobileVisualPluginService.MinHeightAxesVisible = 125;
	            MobileVisualPluginService.MinHeightGaugeSideNumbersVisible = 80;
	            MobileVisualPluginService.GaugeMarginsOnSmallViewPort = 10;
	            MobileVisualPluginService.MinHeightFunnelCategoryLabelsVisible = 80;
	            MobileVisualPluginService.MaxHeightToScaleDonutLegend = 300;
	            return MobileVisualPluginService;
	        }());
	        visuals.MobileVisualPluginService = MobileVisualPluginService;
	        var PlaygroundVisualPluginService = (function () {
	            function PlaygroundVisualPluginService() {
	                this.visualPlugins = powerbi.visuals.plugins;
	                createMinervaPlugins(this.visualPlugins, null);
	            }
	            PlaygroundVisualPluginService.prototype.getVisuals = function () {
	                var registry = this.visualPlugins, names = Object.keys(registry);
	                return names.map(function (name) { return registry[name]; });
	            };
	            PlaygroundVisualPluginService.prototype.getPlugin = function (type) {
	                if (!type) {
	                    return;
	                }
	                var plugin = this.visualPlugins[type];
	                if (!plugin) {
	                    return;
	                }
	                return plugin;
	            };
	            PlaygroundVisualPluginService.prototype.capabilities = function (type) {
	                var plugin = this.getPlugin(type);
	                if (plugin) {
	                    return plugin.capabilities;
	                }
	            };
	            return PlaygroundVisualPluginService;
	        }());
	        visuals.PlaygroundVisualPluginService = PlaygroundVisualPluginService;
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ },
/* 86 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var jsCommon = window.jsCommon;
	var powerbi = window.powerbi;
	var powerbitests = window.powerbitests;
	var InJs = window.InJs;
	var debug = window.debug;
	var jasmine = window.jasmine;
	var Microsoft = window.Microsoft;

	/*
	 *  Power BI Visualizations
	 *
	 *  Copyright (c) Microsoft Corporation
	 *  All rights reserved.
	 *  MIT License
	 *
	 *  Permission is hereby granted, free of charge, to any person obtaining a copy
	 *  of this software and associated documentation files (the ""Software""), to deal
	 *  in the Software without restriction, including without limitation the rights
	 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 *  copies of the Software, and to permit persons to whom the Software is
	 *  furnished to do so, subject to the following conditions:
	 *
	 *  The above copyright notice and this permission notice shall be included in
	 *  all copies or substantial portions of the Software.
	 *
	 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 *  THE SOFTWARE.
	 */
	/// <reference path="./_references.ts"/>
	var PlaygroundViewType;
	(function (PlaygroundViewType) {
	    PlaygroundViewType[PlaygroundViewType["WebView"] = 0] = "WebView";
	    PlaygroundViewType[PlaygroundViewType["MobilePortraitView"] = 1] = "MobilePortraitView";
	    PlaygroundViewType[PlaygroundViewType["MobileLandscapeView"] = 2] = "MobileLandscapeView";
	})(PlaygroundViewType || (PlaygroundViewType = {}));
	var powerbi;
	(function (powerbi) {
	    var visuals;
	    (function (visuals_1) {
	        var defaultVisualHostServices = powerbi.visuals.defaultVisualHostServices;
	        var HostControls = powerbi.visuals.HostControls;
	        /**
	         * Demonstrates Power BI visualization elements and the way to embed them in standalone web page.
	         */
	        var Playground = (function () {
	            function Playground() {
	            }
	            /** Performs sample app initialization.*/
	            Playground.initialize = function () {
	                var _this = this;
	                this.webViewTab = $('#webViewTab');
	                this.mobileViewTab = $('#mobileViewTab');
	                this.visualsSelectElement = $('#visualTypes');
	                this.mobileOrientationOptionsElement = $('#orientation');
	                this.mobileOrientationPortraitRadioButton = this.mobileOrientationOptionsElement.find("input[value='portrait']");
	                this.mobileOrientationLandscapeRadioButton = this.mobileOrientationOptionsElement.find("input[value='landscape']");
	                this.optionsCapabilitiesElement = $('#capabilities');
	                this.interactionsEnabledCheckbox = $("input[name='is_interactions']");
	                this.webContainer = $('#webContainer');
	                this.mobilePortraitDashboardContainer = $('#mobilePortraitDashboardContainer');
	                this.mobilePortraitInFocusContainer = $('#mobilePortraitInFocusContainer');
	                this.mobileLandscapeDashboardContainer = $('#mobileLandscapeDashboardContainer');
	                this.mobileLandscapeInFocusContainer = $('#mobileLandscapeInFocusContainer');
	                this.webContainers = this.webContainer.parent();
	                this.mobilePortraitContainers = $('.mobile-portrait-image-container');
	                this.mobileLandscapeContainers = $('.mobile-landscape-image-container');
	                this.initializeView(PlaygroundViewType.WebView);
	                this.populateVisualTypeSelect();
	                powerbi.visuals.DefaultVisualHostServices.initialize();
	                // Wrapper function to simplify visualization element creation when using jQuery
	                $.fn.visual = function (host, plugin, dataView) {
	                    // Step 1: Create new DOM element to represent Power BI visual
	                    var element = $('<div/>');
	                    element.addClass('visual');
	                    element['visible'] = function () { return true; };
	                    this.append(element);
	                    // Step 2: Instantiate Power BI visual
	                    host.visual = powerbi.extensibility.createVisualAdapter(plugin);
	                    return this;
	                };
	                this.webViewTab.click(function () { _this.updateView(PlaygroundViewType.WebView); });
	                this.mobileViewTab.click(function () { _this.updateView(PlaygroundViewType.MobilePortraitView); });
	                this.mobileOrientationPortraitRadioButton.click(function () { _this.updateView(PlaygroundViewType.MobilePortraitView); });
	                this.mobileOrientationLandscapeRadioButton.click(function () { _this.updateView(PlaygroundViewType.MobileLandscapeView); });
	                this.interactionsEnabledCheckbox.on('change', function () { return _this.updateVisuals; });
	                this.hostControls = new HostControls($('#controls'), Playground.updateVisual);
	                this.hostControls.setHosts(this.hosts);
	                var visualByDefault = jsCommon.Utility.getURLParamValue('visual');
	                if (visualByDefault) {
	                    this.onVisualTypeSelection(visualByDefault.toString());
	                }
	                else {
	                    this.onVisualTypeSelection(this.visualsSelectElement.val());
	                }
	            };
	            Playground.initVisual = function (host) {
	                host.visual.init({
	                    element: this.getVisualElementInContainer(host.container),
	                    host: defaultVisualHostServices,
	                    style: this.visualStyle,
	                    viewport: host.renderingViewport,
	                    interactivity: {
	                        isInteractiveLegend: this.shouldCreateInteractiveVisual(host),
	                        selection: this.isInteractiveMode()
	                    }
	                });
	            };
	            Playground.shouldCreateInteractiveVisual = function (host) {
	                var _this = this;
	                return host.interactive &&
	                    this.isMobileView(this.viewType) &&
	                    this.mobileInteractiveVisuals.some(function (visualName) { return visualName === _this.currentVisualPlugin.name; });
	            };
	            Playground.populateVisualTypeSelect = function () {
	                var _this = this;
	                this.visualsSelectElement.empty();
	                var visuals = this.getPluginService().getVisuals();
	                visuals.sort(function (a, b) {
	                    if (a.name < b.name)
	                        return -1;
	                    if (a.name > b.name)
	                        return 1;
	                    return 0;
	                });
	                visuals.forEach(function (visual) {
	                    if (!Playground.disabledVisuals.some(function (visualName) { return visualName === visual.name; })) {
	                        _this.visualsSelectElement.append('<option value="' + visual.name + '">' + visual.name + '</option>');
	                    }
	                });
	                this.visualsSelectElement.change(function () { return _this.onVisualTypeSelection(_this.visualsSelectElement.val()); });
	            };
	            Playground.onVisualTypeSelection = function (pluginName) {
	                if (pluginName.length === 0) {
	                    return;
	                }
	                this.hostControls.onPluginChange(pluginName);
	                this.createVisualPlugin(pluginName);
	                // this.hostControls.update();
	            };
	            Playground.createVisualPlugin = function (pluginName) {
	                this.currentVisualPlugin = this.getPluginService().getPlugin(pluginName);
	                for (var _i = 0, _a = this.hosts; _i < _a.length; _i++) {
	                    var host = _a[_i];
	                    host.container.children().not(".ui-resizable-handle").remove();
	                    if (!this.currentVisualPlugin) {
	                        host.container.append('<div class="wrongVisualWarning">Wrong visual name <span>\'' + pluginName + '\'</span> in parameters</div>');
	                        return;
	                    }
	                    host.container.visual(host, this.currentVisualPlugin);
	                }
	                this.updateVisuals();
	            };
	            Playground.getPluginService = function () {
	                return this.isMobileView(this.viewType) ? this.mobilePluginService : this.webPluginService;
	            };
	            Playground.updateVisuals = function () {
	                for (var _i = 0, _a = this.hosts; _i < _a.length; _i++) {
	                    var host = _a[_i];
	                    this.updateVisual(host);
	                }
	            };
	            Playground.updateVisual = function (host) {
	                // Reset the scaled container to its original size from the previous rendering and then multiply it by the scale
	                var containerOriginalSize = Playground.hostControls.getContainerSize(host);
	                host.container.removeAttr('style');
	                host.container.attr('style', 'width: ' + containerOriginalSize.width * host.renderingScale + 'px; height: ' + containerOriginalSize.height * host.renderingScale + 'px;');
	                var visualElement = Playground.getVisualElementInContainer(host.container);
	                visualElement.empty();
	                Playground.initVisual(host);
	                Playground.hostControls.updateHost(host);
	                // Scale the visual back down to fit its container
	                var scale = 1 / host.renderingScale;
	                visualElement.attr('style', 'transform: scale(' + scale + '); transform-origin: top left;');
	            };
	            Playground.isMobileView = function (viewType) {
	                return viewType === PlaygroundViewType.MobilePortraitView || viewType === PlaygroundViewType.MobileLandscapeView;
	            };
	            Playground.initializeView = function (viewType) {
	                if (this.viewType !== viewType) {
	                    // Add or remove all mobile specific options
	                    if (this.isMobileView(viewType)) {
	                        this.mobileOrientationOptionsElement.show();
	                        this.optionsCapabilitiesElement.hide();
	                    }
	                    else {
	                        this.mobileOrientationOptionsElement.hide();
	                        this.optionsCapabilitiesElement.show();
	                    }
	                    this.clearAllVisuals();
	                    this.hideAllContainers();
	                    this.unhighlightTabs();
	                    // Update the visual's containers
	                    switch (viewType) {
	                        case PlaygroundViewType.WebView:
	                            this.highlightTab(this.webViewTab);
	                            this.webContainers.show();
	                            this.hosts = [
	                                {
	                                    name: this.webContainer[0].id,
	                                    container: this.webContainer,
	                                    resizable: true,
	                                    interactive: false,
	                                    renderingScale: this.webTileRenderScale
	                                }
	                            ];
	                            break;
	                        case PlaygroundViewType.MobilePortraitView:
	                            this.highlightTab(this.mobileViewTab);
	                            this.mobilePortraitContainers.show();
	                            this.hosts = [
	                                {
	                                    name: this.mobilePortraitDashboardContainer[0].id,
	                                    container: this.mobilePortraitDashboardContainer,
	                                    resizable: false,
	                                    interactive: false,
	                                    renderingScale: this.mobileDashboardTileRenderScale
	                                },
	                                {
	                                    name: this.mobilePortraitInFocusContainer[0].id,
	                                    container: this.mobilePortraitInFocusContainer,
	                                    resizable: false,
	                                    interactive: true,
	                                    renderingScale: this.mobileInFocusTileRenderScale
	                                }
	                            ];
	                            break;
	                        case PlaygroundViewType.MobileLandscapeView:
	                            this.highlightTab(this.mobileViewTab);
	                            this.mobileLandscapeContainers.show();
	                            this.hosts = [
	                                {
	                                    name: this.mobileLandscapeDashboardContainer[0].id,
	                                    container: this.mobileLandscapeDashboardContainer,
	                                    resizable: false,
	                                    interactive: false,
	                                    renderingScale: this.mobileDashboardTileRenderScale
	                                },
	                                {
	                                    name: this.mobileLandscapeInFocusContainer[0].id,
	                                    container: this.mobileLandscapeInFocusContainer,
	                                    resizable: false,
	                                    interactive: true,
	                                    renderingScale: this.mobileInFocusTileRenderScale
	                                }
	                            ];
	                            break;
	                        default:
	                            break;
	                    }
	                    if (this.isMobileView(viewType) && !this.isMobileView(this.viewType)) {
	                        // Moved to mobile view from web
	                        this.resetOrientationRadioButtons();
	                    }
	                    this.viewType = viewType;
	                }
	            };
	            Playground.updateView = function (viewType) {
	                if (this.viewType !== viewType) {
	                    this.initializeView(viewType);
	                    this.hostControls.setHosts(this.hosts);
	                    // The plugin name did not change but since we might have changed between web and mobile views we need the updated plugin itself,
	                    // based on the matching plugin service.
	                    this.createVisualPlugin(this.currentVisualPlugin.name);
	                }
	            };
	            Playground.getVisualElementInContainer = function (container) {
	                return container.children('.visual').first();
	            };
	            Playground.unhighlightTabs = function () {
	                this.webViewTab.find('div').first().removeClass('selected-nav-tab');
	                this.mobileViewTab.find('div').first().removeClass('selected-nav-tab');
	            };
	            Playground.highlightTab = function (tabElement) {
	                tabElement.find('div').first().addClass('selected-nav-tab');
	            };
	            Playground.resetOrientationRadioButtons = function () {
	                $('input[name=orientation][value=portrait]').prop('checked', true);
	                $('input[name=orientation][value=landscape]').prop('checked', false);
	            };
	            Playground.hideAllContainers = function () {
	                this.webContainers.hide();
	                this.mobilePortraitContainers.hide();
	                this.mobileLandscapeContainers.hide();
	            };
	            Playground.clearAllVisuals = function () {
	                if (this.hosts) {
	                    for (var _i = 0, _a = this.hosts; _i < _a.length; _i++) {
	                        var host = _a[_i];
	                        this.getVisualElementInContainer(host.container).empty();
	                    }
	                }
	            };
	            Playground.isInteractiveMode = function () {
	                return this.interactionsEnabledCheckbox.is(':checked');
	            };
	            Playground.disabledVisuals = [
	                "basicShape",
	                "matrix",
	                "playChart",
	                "kpi",
	                "scriptVisual",
	                "slicer",
	                "forceGraph",
	                "mekkoChart",
	                "gantt",
	                "sunburstCustom",
	                "timeline",
	                "owlGauge",
	                "debugVisual",
	                "lineDotChart"
	            ];
	            Playground.mobileInteractiveVisuals = [
	                "areaChart",
	                "barChart",
	                "clusteredBarChart",
	                "clusteredColumnChart",
	                "columnChart",
	                "donutChart",
	                "hundredPercentStackedBarChart",
	                "hundredPercentStackedColumnChart",
	                "lineChart",
	                "pieChart",
	                "scatterChart",
	                "table",
	                "matrix",
	                "multiRowCard"
	            ];
	            Playground.webTileRenderScale = 1;
	            Playground.mobileDashboardTileRenderScale = 3;
	            Playground.mobileInFocusTileRenderScale = 1;
	            /** Represents sample data view used by visualization elements. */
	            Playground.webPluginService = new visuals_1.PlaygroundVisualPluginService();
	            Playground.mobilePluginService = new visuals_1.MobileVisualPluginService();
	            Playground.visualStyle = {
	                titleText: {
	                    color: { value: 'rgba(51,51,51,1)' }
	                },
	                subTitleText: {
	                    color: { value: 'rgba(145,145,145,1)' }
	                },
	                colorPalette: {
	                    dataColors: new powerbi.visuals.DataColorPalette(),
	                },
	                labelText: {
	                    color: {
	                        value: 'rgba(51,51,51,1)',
	                    },
	                    fontSize: '11px'
	                },
	                isHighContrast: false,
	            };
	            return Playground;
	        }());
	        visuals_1.Playground = Playground;
	    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
	})(powerbi || (powerbi = {}));

	

/***/ }
/******/ ]);
//# sourceMappingURL=PowerBIVisualsPlayground.js.map