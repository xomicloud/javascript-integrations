"use strict";

const { Writable } = require("stream");

class Response extends Writable {
  constructor(callback) {
    let content = "";

    super({
      write: (data, encoding, done) => {
        content += data;

        done();
      },
      final: () => {
        callback(content);
      }
    });

    this.on("error", (error) => {});  ///
  }

  send(content) {}

  status(statusCode) {}

  setHeader(name, value) {}
}

module.exports = Response;
