"use strict";

const { Readable } = require("stream");

class Request extends Readable {
  constructor(uri, query, method, headers = {}, content = "") {
    super({
      read: () => {
        this.push(content);
        this.push(null);
      }
    });

    this.uri = uri;
    this.query = query;
    this.method = method;
    this.headers = headers;
  }
}

module.exports = Request;
