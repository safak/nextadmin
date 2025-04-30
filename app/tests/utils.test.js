import { connectToDb } from "app/lib/utils.js";
import { assert } from "chai";
import { describe, it, afterEach } from "mocha";


const mongoose = require("mongoose");
// Rest of your test file code...
describe("connectToDb", () => {
  let originalConnect;

  beforeEach(() => {
    originalConnect = mongoose.connect;
  });

  afterEach(() => {
    mongoose.connect = originalConnect;
  });

  it("should connect to the database and set isConnected to true", async () => {
    // Arrange
    const mockConnection = {
      connections: [{ readyState: 1 }],
    };

    mongoose.connect = () => Promise.resolve(mockConnection);

    // Act
    await connectToDb();

    // Assert
    assert.isTrue(mongoose.connect.calledOnceWith(process.env.MONGO));
    assert.equal(connectToDb.connection.isConnected, 1);
  });

  it("should not connect to the database if already connected", async () => {
    // Arrange
    connectToDb.connection = { isConnected: 1 };

    // Act
    await connectToDb();

    // Assert
    assert.isFalse(mongoose.connect.called);
  });

  it("should throw an error if database connection fails", async () => {
    // Arrange
    const errorMessage = "Database connection error";

    mongoose.connect = () => Promise.reject(new Error(errorMessage));

    // Act & Assert
    await assert.isRejected(connectToDb(), errorMessage);
  });
});