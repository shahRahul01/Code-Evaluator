const mongoose = require('mongoose');
const { DB_URL, NODE_ENV } = require('./server.config');

let instance; 

class DBConnection {
    #isConnected; 

    constructor(dbUri) {
        if (instance) {
            throw new Error("Only one DBConnection instance can exist");
        }
        this.dbUri = dbUri;
        instance = this;
        this.#isConnected = false;
    }

    // Connect to the MongoDB database.
    async connect() {
        try {
            if (this.#isConnected) {
                throw new Error("DB is already connected");
            }

            console.log(`Connecting to MongoDB in ${NODE_ENV} mode...`);
            await mongoose.connect(this.dbUri);
            this.#isConnected = true;
            console.log("MongoDB connection established successfully");
        } catch (error) {
            console.error("Failed to connect to the database:", error);
            throw error; // Rethrow the error for higher-level handling
        }
    }

    // Disconnect from the MongoDB database.
    async disconnect() {
        try {
            if (!this.#isConnected) {
                console.warn("DB is not connected, no need to disconnect");
                return;
            }

            await mongoose.disconnect();
            this.#isConnected = false;
            console.log("Disconnected from MongoDB successfully");
        } catch (error) {
            console.error("Failed to disconnect from the database:", error);
            throw error;
        }
    }

    /**
     * Returns the current connection status.
     * @returns {boolean} - Connection status (true if connected, false otherwise)
     */
    getConnectionStatus() {
        return this.#isConnected;
    }
}

// Create a singleton instance and freeze it
const db = Object.freeze(new DBConnection(DB_URL));

// Export the singleton instance
module.exports = db;