"use strict";

const { api } = require("@xomicloud/xomi");

const Request = require("./request"),
      Response = require("./response"),
      configuration = require("./configuration");

const url = "/dropbox/2/files/download",
      query = {},
      method = "POST",
      dropboxAPIArg = JSON.stringify({
        "path": "/CVs/james_smith.pdf"
      }),
      headers = {
        "content-type": "application/json",
        "dropbox-api-arg": dropboxAPIArg
      },
      request = new Request(url, query, method, headers),
      response = new Response((content) => {
        console.log(content);
      });

api(configuration, request, response);