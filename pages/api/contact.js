import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input." });
    }

    const newMessage = { email, name, message };
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://dario:BNFJu2qjdTQXsTv4@cluster0.ovnq1fr.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Could not connect to database." });
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Storing message failed!" });
    }

    client.close();

    return res
      .status(201)
      .json({ message: "Successfully stored message!", newMessage });
  }
};

export default handler;
