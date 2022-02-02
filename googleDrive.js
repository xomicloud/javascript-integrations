"use strict";

const { api } = require("@xomicloud/xomi");

const Request = require("./request"),
      Response = require("./response"),
      configuration = require("./configuration");

const url = "/google-drive/drive/v3/files",
      query = {},
      method = "GET",
      request = new Request(url, query, method),
      response = new Response((content) => {
        console.log(content);
      });

api(configuration, request, response);
