class CustomStartError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = "StartError";
  }
}

module.exports = CustomStartError;
