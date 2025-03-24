function generateMongoId() {
  const timestamp = Math.floor(Date.now() / 1000).toString(16); // 4-byte timestamp
  const random = Math.random().toString(16).substring(2, 12).padEnd(10, "0"); // 5 bytes random
  const counter = Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, "0"); // 3-byte counter

  return timestamp + random + counter;
}

console.log(generateMongoId());

function deconstructMongoId(objectId) {
  if (!/^[a-f0-9]{24}$/i.test(objectId)) {
    throw new Error("Invalid ObjectId format");
  }

  const timestampHex = objectId.substring(0, 8);
  const randomHex = objectId.substring(8, 18);
  const counterHex = objectId.substring(18, 24);

  // Convert timestamp (hex) to decimal (seconds)
  const timestamp = parseInt(timestampHex, 16);
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

  return {
    objectId,
    timestamp: timestampHex + " (Unix: " + timestamp + ")",
    date: date.toISOString(), // Human-readable timestamp
    random: randomHex,
    counter: counterHex,
  };
}

// Example usage:
const objectId = "67e183a59f563cf9d3ef93af";
console.log(deconstructMongoId(objectId));
