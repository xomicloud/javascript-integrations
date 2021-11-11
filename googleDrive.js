"use strict";

const { api } = require("@xomicloud/xomi");

const options = require("./options"),
      Request = require("./request"),
      Response = require("./response");

const url = "/google-drive/drive/v3/files",
      query = {},
      method = "GET",
      request = new Request(url, query, method),
      response = new Response((body) => {
        console.log(body)
      });

api(options, request, response);
