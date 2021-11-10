"use strict";

const { Readable } = require("stream");

class Request extends Readable {
  constructor(url, query, method, body = "") {
    super({
      read
    });

    this.url = url;
    this.query = query;
    this.method = method;

    function read() {
      this.push(body);
      this.push(null);
    }
  }
}

module.exports = Request;
