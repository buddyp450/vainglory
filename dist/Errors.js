'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RATE_LIMIT = exports.RATE_LIMIT = 'Request rate limited. Free for non-commercial use for up to 10 requests per minute! To increase your rate limit, please contact api@superevilmegacorp.com';
var UNAUTHORIZED = exports.UNAUTHORIZED = 'Unauthorized Access. invalid API key provided.';
var UNKNOWN = exports.UNKNOWN = 'Unknown error, please check your request and try again.';
var INTERNAL = exports.INTERNAL = 'Internal Server Error.';
var NO_BODY = exports.NO_BODY = 'No body returned from response.';
var NOT_FOUND = exports.NOT_FOUND = 'The specified object could not be found.';
var OFFLINE = exports.OFFLINE = 'API is currently offline, try again later.';
var NOT_ACCEPTABLE = exports.NOT_ACCEPTABLE = 'You requested a format that is\'t JSON';