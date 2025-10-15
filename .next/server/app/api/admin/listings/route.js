"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/admin/listings/route";
exports.ids = ["app/api/admin/listings/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flistings%2Froute&page=%2Fapi%2Fadmin%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flistings%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flistings%2Froute&page=%2Fapi%2Fadmin%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flistings%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_project_app_api_admin_listings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/admin/listings/route.ts */ \"(rsc)/./app/api/admin/listings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/listings/route\",\n        pathname: \"/api/admin/listings\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/listings/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/admin/listings/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_admin_listings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/listings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRmxpc3RpbmdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRmxpc3RpbmdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZsaXN0aW5ncyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0g7QUFDMUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JjZS1hdWN0aW9ucy8/YmMyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9wcm9qZWN0L2FwcC9hcGkvYWRtaW4vbGlzdGluZ3Mvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL2xpc3RpbmdzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vbGlzdGluZ3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FkbWluL2xpc3RpbmdzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvcHJvamVjdC9hcHAvYXBpL2FkbWluL2xpc3RpbmdzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hZG1pbi9saXN0aW5ncy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flistings%2Froute&page=%2Fapi%2Fadmin%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flistings%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/admin/listings/route.ts":
/*!*****************************************!*\
  !*** ./app/api/admin/listings/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabaseAdmin */ \"(rsc)/./lib/supabaseAdmin.ts\");\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET() {\n    try {\n        const supabase = (0,_lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__.getSupabaseAdmin)();\n        const { data, error } = await supabase.from(\"listings\").select(\"*\").order(\"created_at\", {\n            ascending: false\n        }).limit(100);\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rows: data ?? []\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rows: [],\n            warn: e?.message ?? \"env\"\n        }, {\n            status: 200\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json().catch(()=>({}));\n        const { title, description, start_price, min_price, market_value, currency, seller_name, status } = body;\n        if (!title || !start_price || !min_price) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"title, start_price, and min_price required\"\n            }, {\n                status: 400\n            });\n        }\n        const supabase = (0,_lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__.getSupabaseAdmin)();\n        const { data, error } = await supabase.from(\"listings\").insert({\n            title,\n            description: description ?? null,\n            start_price,\n            min_price,\n            market_value: market_value ?? null,\n            currency: currency ?? \"EUR\",\n            seller_id: null,\n            seller_name: seller_name ?? null,\n            status: status ?? \"draft\"\n        }).select(\"id\").single();\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: true,\n            id: data.id\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e?.message ?? \"env\"\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2xpc3RpbmdzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFFaEQsTUFBTUUsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFdBQVdILG9FQUFnQkE7UUFDakMsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1GLFNBQzNCRyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLEtBQ1BDLEtBQUssQ0FBQyxjQUFjO1lBQUVDLFdBQVc7UUFBTSxHQUN2Q0MsS0FBSyxDQUFDO1FBQ1QsSUFBSUwsT0FBTyxPQUFPTixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVOLE9BQU9BLE1BQU1PLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUM1RSxPQUFPZCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVHLE1BQU1WLFFBQVEsRUFBRTtRQUFDO0lBQzlDLEVBQUUsT0FBT1csR0FBUTtRQUNmLE9BQU9oQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVHLE1BQU0sRUFBRTtZQUFFRSxNQUFNRCxHQUFHSCxXQUFXO1FBQU0sR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDbEY7QUFDRjtBQUVPLGVBQWVJLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSVAsSUFBSSxHQUFHUyxLQUFLLENBQUMsSUFBTyxFQUFDO1FBQzVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFZCxNQUFNLEVBQUUsR0FBR007UUFFcEcsSUFBSSxDQUFDRSxTQUFTLENBQUNFLGVBQWUsQ0FBQ0MsV0FBVztZQUN4QyxPQUFPekIscURBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRU4sT0FBTztZQUE2QyxHQUFHO2dCQUFFUSxRQUFRO1lBQUk7UUFDbEc7UUFFQSxNQUFNVixXQUFXSCxvRUFBZ0JBO1FBQ2pDLE1BQU0sRUFBRUksSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRixTQUMzQkcsSUFBSSxDQUFDLFlBQ0xzQixNQUFNLENBQUM7WUFDTlA7WUFDQUMsYUFBYUEsZUFBZTtZQUM1QkM7WUFDQUM7WUFDQUMsY0FBY0EsZ0JBQWdCO1lBQzlCQyxVQUFVQSxZQUFZO1lBQ3RCRyxXQUFXO1lBQ1hGLGFBQWFBLGVBQWU7WUFDNUJkLFFBQVFBLFVBQVU7UUFDcEIsR0FDQ04sTUFBTSxDQUFDLE1BQ1B1QixNQUFNO1FBRVQsSUFBSXpCLE9BQU8sT0FBT04scURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTixPQUFPQSxNQUFNTyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDNUUsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFb0IsSUFBSTtZQUFNQyxJQUFJNUIsS0FBTTRCLEVBQUU7UUFBQztJQUNwRCxFQUFFLE9BQU9qQixHQUFRO1FBQ2YsT0FBT2hCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRU4sT0FBT1UsR0FBR0gsV0FBVztRQUFNLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3pFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JjZS1hdWN0aW9ucy8uL2FwcC9hcGkvYWRtaW4vbGlzdGluZ3Mvcm91dGUudHM/MDYyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTdXBhYmFzZUFkbWluIH0gZnJvbSAnQC9saWIvc3VwYWJhc2VBZG1pbic7XG5cbmV4cG9ydCBjb25zdCBkeW5hbWljID0gJ2ZvcmNlLWR5bmFtaWMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHN1cGFiYXNlID0gZ2V0U3VwYWJhc2VBZG1pbigpO1xuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAuZnJvbSgnbGlzdGluZ3MnKVxuICAgICAgLnNlbGVjdCgnKicpXG4gICAgICAub3JkZXIoJ2NyZWF0ZWRfYXQnLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcbiAgICAgIC5saW1pdCgxMDApO1xuICAgIGlmIChlcnJvcikgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByb3dzOiBkYXRhID8/IFtdIH0pO1xuICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByb3dzOiBbXSwgd2FybjogZT8ubWVzc2FnZSA/PyAnZW52JyB9LCB7IHN0YXR1czogMjAwIH0pO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xuICAgIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydF9wcmljZSwgbWluX3ByaWNlLCBtYXJrZXRfdmFsdWUsIGN1cnJlbmN5LCBzZWxsZXJfbmFtZSwgc3RhdHVzIH0gPSBib2R5O1xuXG4gICAgaWYgKCF0aXRsZSB8fCAhc3RhcnRfcHJpY2UgfHwgIW1pbl9wcmljZSkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICd0aXRsZSwgc3RhcnRfcHJpY2UsIGFuZCBtaW5fcHJpY2UgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VwYWJhc2UgPSBnZXRTdXBhYmFzZUFkbWluKCk7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdsaXN0aW5ncycpXG4gICAgICAuaW5zZXJ0KHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiA/PyBudWxsLFxuICAgICAgICBzdGFydF9wcmljZSxcbiAgICAgICAgbWluX3ByaWNlLFxuICAgICAgICBtYXJrZXRfdmFsdWU6IG1hcmtldF92YWx1ZSA/PyBudWxsLFxuICAgICAgICBjdXJyZW5jeTogY3VycmVuY3kgPz8gJ0VVUicsXG4gICAgICAgIHNlbGxlcl9pZDogbnVsbCxcbiAgICAgICAgc2VsbGVyX25hbWU6IHNlbGxlcl9uYW1lID8/IG51bGwsXG4gICAgICAgIHN0YXR1czogc3RhdHVzID8/ICdkcmFmdCcsXG4gICAgICB9KVxuICAgICAgLnNlbGVjdCgnaWQnKVxuICAgICAgLnNpbmdsZSgpO1xuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG9rOiB0cnVlLCBpZDogZGF0YSEuaWQgfSk7XG4gIH0gY2F0Y2ggKGU6IGFueSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlPy5tZXNzYWdlID8/ICdlbnYnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTdXBhYmFzZUFkbWluIiwiZHluYW1pYyIsIkdFVCIsInN1cGFiYXNlIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsIm9yZGVyIiwiYXNjZW5kaW5nIiwibGltaXQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsInJvd3MiLCJlIiwid2FybiIsIlBPU1QiLCJyZXEiLCJib2R5IiwiY2F0Y2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhcnRfcHJpY2UiLCJtaW5fcHJpY2UiLCJtYXJrZXRfdmFsdWUiLCJjdXJyZW5jeSIsInNlbGxlcl9uYW1lIiwiaW5zZXJ0Iiwic2VsbGVyX2lkIiwic2luZ2xlIiwib2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/listings/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseAdmin.ts":
/*!******************************!*\
  !*** ./lib/supabaseAdmin.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSupabaseAdmin: () => (/* binding */ getSupabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nfunction getSupabaseAdmin() {\n    const url = \"https://peapidladnpexkdlepqx.supabase.co\";\n    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;\n    if (!url || !key) throw new Error(\"Supabase env vars missing.\");\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, key, {\n        auth: {\n            persistSession: false\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VBZG1pbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUU5QyxTQUFTQztJQUNkLE1BQU1DLE1BQU1DLDBDQUFvQztJQUNoRCxNQUFNRyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLHlCQUF5QjtJQUNqRCxJQUFJLENBQUNMLE9BQU8sQ0FBQ0ksS0FBSyxNQUFNLElBQUlFLE1BQU07SUFDbEMsT0FBT1IsbUVBQVlBLENBQUNFLEtBQUtJLEtBQUs7UUFBRUcsTUFBTTtZQUFFQyxnQkFBZ0I7UUFBTTtJQUFFO0FBQ2xFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9yY2UtYXVjdGlvbnMvLi9saWIvc3VwYWJhc2VBZG1pbi50cz8wOWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdXBhYmFzZUFkbWluKCkge1xuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkw7XG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVk7XG4gIGlmICghdXJsIHx8ICFrZXkpIHRocm93IG5ldyBFcnJvcignU3VwYWJhc2UgZW52IHZhcnMgbWlzc2luZy4nKTtcbiAgcmV0dXJuIGNyZWF0ZUNsaWVudCh1cmwsIGtleSwgeyBhdXRoOiB7IHBlcnNpc3RTZXNzaW9uOiBmYWxzZSB9IH0pO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImdldFN1cGFiYXNlQWRtaW4iLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwia2V5IiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsIkVycm9yIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseAdmin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@supabase","vendor-chunks/next","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flistings%2Froute&page=%2Fapi%2Fadmin%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flistings%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();