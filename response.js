"use strict";

const { Writable } = require("stream");

class Response extends Writable {
  constructor(callback) {
    super({
      write,
      final
    });

    this.on("error", (error) => {
      ///
    });

    let body = "";

    function write(data, encoding, done) {
      body += data;

      done();
    }

    function final() {
      callback(body);
    }
  }
}

module.exports = Response;
