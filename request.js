"use strict";

const { Readable } = require("stream");

class Request extends Readable {
  constructor(url, query, method, headers = {}, content = "") {
    super({
      read: () => {
        this.push(content);
        this.push(null);
      }
    });

    this.url = url;
    this.query = query;
    this.method = method;
    this.headers = headers;
  }
}

module.exports = Request;
