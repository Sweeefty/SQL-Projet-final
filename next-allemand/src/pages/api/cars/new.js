import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
export default async function POST(req, res) {
  // Extract the "id" from the URL by splitting the URL and taking the last element
  const id = req.url.split("/").pop();

  // Log the extracted "id" to the console (for debugging purposes)
  console.log(id);

  // Check if the database instance has been initialized
  if (!db) {
    // If the database instance is not initialized, open the database connection
    db = await open({
      filename: "./BDD.db", // Specify the database file path
      driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
    });
  }



  // Perform a database query to retrieve an item based on the id
  const item = await db.all("INSERT INTO users (name, email, password) VALUES ('%', '%', '%')",);

  res.status(200).json(item)
}