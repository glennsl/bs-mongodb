// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry   = require("bs-platform/lib/js/curry.js");
var Mongodb = require("mongodb");

var MongoError = /* module */[];

var ObjectID = /* module */[];

function Make(Handler) {
  var toArray = function (cursor) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  cursor.toArray(param);
                  return /* () */0;
                }));
  };
  var Cursor = /* module */[/* toArray */toArray];
  var InsertResult = /* module */[];
  var DeleteResult = /* module */[];
  var insertOne = function (doc, col) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  col.insertOne(doc, param);
                  return /* () */0;
                }));
  };
  var findOne = function (doc, col) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  col.findOne(doc, param);
                  return /* () */0;
                }));
  };
  var deleteOne = function (doc, col) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  col.deleteOne(doc, param);
                  return /* () */0;
                }));
  };
  var createIndex = function (index, options, col) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  col.createIndex(index, options, param);
                  return /* () */0;
                }));
  };
  var createIndexNoOpts = function (index, col) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  col.createIndex(index, param);
                  return /* () */0;
                }));
  };
  var Collection = /* module */[
    /* insertOne */insertOne,
    /* findOne */findOne,
    /* deleteOne */deleteOne,
    /* createIndex */createIndex,
    /* createIndexNoOpts */createIndexNoOpts
  ];
  var collection = function (name, conn) {
    return conn.collection(name);
  };
  var Db = /* module */[/* collection */collection];
  var connect = function (url) {
    return Curry._1(Handler[/* callbackConverter */0], (function (param) {
                  Mongodb.connect(url, param);
                  return /* () */0;
                }));
  };
  return /* module */[
          /* Cursor */Cursor,
          /* InsertResult */InsertResult,
          /* DeleteResult */DeleteResult,
          /* Collection */Collection,
          /* Db */Db,
          /* connect */connect
        ];
}

exports.MongoError = MongoError;
exports.ObjectID   = ObjectID;
exports.Make       = Make;
/* mongodb Not a pure module */
