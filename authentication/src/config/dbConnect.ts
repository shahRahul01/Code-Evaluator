import mongoose from "mongoose";
import serverConfig from "./serverConfig";

class DBConnection {
    private static instance: DBConnection;
    private isConnected: boolean = false;
    private dbUri: string;

    private constructor(dbUri: string) {
        this.dbUri = dbUri;
    }

    // Get Singleton Instance
    public static getInstance(): DBConnection {
        if (!DBConnection.instance) {
            if (!serverConfig.DATABASE_URL) {
                throw new Error("DATABASE_URL is not defined in serverConfig");
            }
            DBConnection.instance = new DBConnection(serverConfig.DATABASE_URL);
        }
        return DBConnection.instance;
    }

    // Connect to the MongoDB database.
    public async connect(): Promise<void> {
        try {
            if (this.isConnected) {
                console.warn("DB is already connected");
                return;
            }

            console.log(`Connecting to MongoDB in ${serverConfig.NODE_ENV} mode...`);
            await mongoose.connect(this.dbUri);
            this.isConnected = true;
            console.log("MongoDB connection established successfully");
        } catch (error) {
            console.error("Failed to connect to the database:", error);
            throw error;
        }
    }

    // Disconnect from the MongoDB database.
    public async disconnect(): Promise<void> {
        try {
            if (!this.isConnected) {
                console.warn("DB is not connected, no need to disconnect");
                return;
            }

            await mongoose.disconnect();
            this.isConnected = false;
            console.log("Disconnected from MongoDB successfully");
        } catch (error) {
            console.error("Failed to disconnect from the database:", error);
            throw error;
        }
    }

    // Returns the current connection status.
    public getConnectionStatus(): boolean {
        return this.isConnected;
    }
}

// Export Singleton Instance
export default DBConnection.getInstance();
