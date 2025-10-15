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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabaseAdmin */ \"(rsc)/./lib/supabaseAdmin.ts\");\n\n\nconst dynamic = \"force-dynamic\";\nasync function GET() {\n    try {\n        const supabase = (0,_lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__.getSupabaseAdmin)();\n        const { data, error } = await supabase.from(\"listings\").select(\"id, title, description, start_price, currency, seller_id, seller_name\").order(\"created_at\", {\n            ascending: false\n        }).limit(100);\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rows: data ?? []\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rows: [],\n            warn: e?.message ?? \"env\"\n        }, {\n            status: 200\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const body = await req.json().catch(()=>({}));\n        const { title, description, start_price, currency, seller_name } = body;\n        if (!title || !start_price) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"title and start_price required\"\n        }, {\n            status: 400\n        });\n        const supabase = (0,_lib_supabaseAdmin__WEBPACK_IMPORTED_MODULE_1__.getSupabaseAdmin)();\n        const { data, error } = await supabase.from(\"listings\").insert({\n            title,\n            description: description ?? null,\n            start_price,\n            currency: currency ?? \"EUR\",\n            seller_id: null,\n            seller_name: seller_name ?? null\n        }).select(\"id\").single();\n        if (error) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: error.message\n        }, {\n            status: 400\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            ok: true,\n            id: data.id\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e?.message ?? \"env\"\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FkbWluL2xpc3RpbmdzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1k7QUFFaEQsTUFBTUUsVUFBVSxnQkFBZ0I7QUFFaEMsZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFdBQVdILG9FQUFnQkE7UUFDakMsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1GLFNBQzNCRyxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFDLHlFQUNQQyxLQUFLLENBQUMsY0FBYztZQUFFQyxXQUFXO1FBQU0sR0FDdkNDLEtBQUssQ0FBQztRQUNULElBQUlMLE9BQU8sT0FBT04scURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTixPQUFPQSxNQUFNTyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDNUUsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFRyxNQUFNVixRQUFRLEVBQUU7UUFBQztJQUM5QyxFQUFFLE9BQU9XLEdBQVE7UUFDZixPQUFPaEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFRyxNQUFNLEVBQUU7WUFBRUUsTUFBTUQsR0FBR0gsV0FBVztRQUFNLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ2xGO0FBQ0Y7QUFFTyxlQUFlSSxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1ELElBQUlQLElBQUksR0FBR1MsS0FBSyxDQUFDLElBQU8sRUFBQztRQUM1QyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUdOO1FBQ25FLElBQUksQ0FBQ0UsU0FBUyxDQUFDRSxhQUFhLE9BQU94QixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVOLE9BQU87UUFBaUMsR0FBRztZQUFFUSxRQUFRO1FBQUk7UUFFaEgsTUFBTVYsV0FBV0gsb0VBQWdCQTtRQUNqQyxNQUFNLEVBQUVJLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUYsU0FDM0JHLElBQUksQ0FBQyxZQUNMb0IsTUFBTSxDQUFDO1lBQ05MO1lBQ0FDLGFBQWFBLGVBQWU7WUFDNUJDO1lBQ0FDLFVBQVVBLFlBQVk7WUFDdEJHLFdBQVc7WUFDWEYsYUFBYUEsZUFBZTtRQUM5QixHQUNDbEIsTUFBTSxDQUFDLE1BQ1BxQixNQUFNO1FBRVQsSUFBSXZCLE9BQU8sT0FBT04scURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTixPQUFPQSxNQUFNTyxPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFDNUUsT0FBT2QscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFa0IsSUFBSTtZQUFNQyxJQUFJMUIsS0FBTTBCLEVBQUU7UUFBQztJQUNwRCxFQUFFLE9BQU9mLEdBQVE7UUFDZixPQUFPaEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTixPQUFPVSxHQUFHSCxXQUFXO1FBQU0sR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDekU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvcmNlLWF1Y3Rpb25zLy4vYXBwL2FwaS9hZG1pbi9saXN0aW5ncy9yb3V0ZS50cz8wNjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFN1cGFiYXNlQWRtaW4gfSBmcm9tICdAL2xpYi9zdXBhYmFzZUFkbWluJztcblxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSAnZm9yY2UtZHluYW1pYyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3VwYWJhc2UgPSBnZXRTdXBhYmFzZUFkbWluKCk7XG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgIC5mcm9tKCdsaXN0aW5ncycpXG4gICAgICAuc2VsZWN0KCdpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGFydF9wcmljZSwgY3VycmVuY3ksIHNlbGxlcl9pZCwgc2VsbGVyX25hbWUnKVxuICAgICAgLm9yZGVyKCdjcmVhdGVkX2F0JywgeyBhc2NlbmRpbmc6IGZhbHNlIH0pXG4gICAgICAubGltaXQoMTAwKTtcbiAgICBpZiAoZXJyb3IpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcm93czogZGF0YSA/PyBbXSB9KTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcm93czogW10sIHdhcm46IGU/Lm1lc3NhZ2UgPz8gJ2VudicgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgc3RhcnRfcHJpY2UsIGN1cnJlbmN5LCBzZWxsZXJfbmFtZSB9ID0gYm9keTtcbiAgICBpZiAoIXRpdGxlIHx8ICFzdGFydF9wcmljZSkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICd0aXRsZSBhbmQgc3RhcnRfcHJpY2UgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG5cbiAgICBjb25zdCBzdXBhYmFzZSA9IGdldFN1cGFiYXNlQWRtaW4oKTtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxuICAgICAgLmZyb20oJ2xpc3RpbmdzJylcbiAgICAgIC5pbnNlcnQoe1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uID8/IG51bGwsXG4gICAgICAgIHN0YXJ0X3ByaWNlLFxuICAgICAgICBjdXJyZW5jeTogY3VycmVuY3kgPz8gJ0VVUicsXG4gICAgICAgIHNlbGxlcl9pZDogbnVsbCxcbiAgICAgICAgc2VsbGVyX25hbWU6IHNlbGxlcl9uYW1lID8/IG51bGxcbiAgICAgIH0pXG4gICAgICAuc2VsZWN0KCdpZCcpXG4gICAgICAuc2luZ2xlKCk7XG5cbiAgICBpZiAoZXJyb3IpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb2s6IHRydWUsIGlkOiBkYXRhIS5pZCB9KTtcbiAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGU/Lm1lc3NhZ2UgPz8gJ2VudicgfSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFN1cGFiYXNlQWRtaW4iLCJkeW5hbWljIiwiR0VUIiwic3VwYWJhc2UiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0Iiwib3JkZXIiLCJhc2NlbmRpbmciLCJsaW1pdCIsImpzb24iLCJtZXNzYWdlIiwic3RhdHVzIiwicm93cyIsImUiLCJ3YXJuIiwiUE9TVCIsInJlcSIsImJvZHkiLCJjYXRjaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGFydF9wcmljZSIsImN1cnJlbmN5Iiwic2VsbGVyX25hbWUiLCJpbnNlcnQiLCJzZWxsZXJfaWQiLCJzaW5nbGUiLCJvayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/admin/listings/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseAdmin.ts":
/*!******************************!*\
  !*** ./lib/supabaseAdmin.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSupabaseAdmin: () => (/* binding */ getSupabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nfunction getSupabaseAdmin() {\n    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;\n    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;\n    if (!url || !key) throw new Error(\"Supabase env vars missing.\");\n    return (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, key, {\n        auth: {\n            persistSession: false\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VBZG1pbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFxRDtBQUU5QyxTQUFTQztJQUNkLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0Msd0JBQXdCO0lBQ2hELE1BQU1DLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0cseUJBQXlCO0lBQ2pELElBQUksQ0FBQ0wsT0FBTyxDQUFDSSxLQUFLLE1BQU0sSUFBSUUsTUFBTTtJQUNsQyxPQUFPUixtRUFBWUEsQ0FBQ0UsS0FBS0ksS0FBSztRQUFFRyxNQUFNO1lBQUVDLGdCQUFnQjtRQUFNO0lBQUU7QUFDbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JjZS1hdWN0aW9ucy8uL2xpYi9zdXBhYmFzZUFkbWluLnRzPzA5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN1cGFiYXNlQWRtaW4oKSB7XG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTDtcbiAgY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWTtcbiAgaWYgKCF1cmwgfHwgIWtleSkgdGhyb3cgbmV3IEVycm9yKCdTdXBhYmFzZSBlbnYgdmFycyBtaXNzaW5nLicpO1xuICByZXR1cm4gY3JlYXRlQ2xpZW50KHVybCwga2V5LCB7IGF1dGg6IHsgcGVyc2lzdFNlc3Npb246IGZhbHNlIH0gfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiZ2V0U3VwYWJhc2VBZG1pbiIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJrZXkiLCJTVVBBQkFTRV9TRVJWSUNFX1JPTEVfS0VZIiwiRXJyb3IiLCJhdXRoIiwicGVyc2lzdFNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseAdmin.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Flistings%2Froute&page=%2Fapi%2Fadmin%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flistings%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();