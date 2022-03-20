"use strict";

const { api } = require("@xomicloud/xomi");

const Request = require("./request"),
      Response = require("./response"),
      configuration = require("./configuration");

const uri = "/dropbox/2/files/list_folder",
      query = {},
      method = "POST",
      headers = {
        "content-type": "application/json"
      },
      content = JSON.stringify({
        "path": ""
      }),
      request = new Request(uri, query, method, headers, content),
      response = new Response((content) => {
        console.log(content);
      });

api(configuration, request, response);
