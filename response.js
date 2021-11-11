"use strict";

const { Writable } = require("stream");

class Response extends Writable {
  constructor(callback) {
    let body = "";

    super({
      write: (data, encoding, done) => {
        body += data;

        done();
      },
      final: () => {
        callback(body);
      }
    });

    this.on("error", (error) => {});  ///
  }
}

module.exports = Response;
