const mongoose = require("mongoose");
require("dotenv").config();
const Category = require("./models/category.js");   

const seedCategories = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Category.insertMany([
      { name: "Web Development", description: "Learn HTML, CSS, JS, React, Node" },
      { name: "Data Science", description: "Machine Learning, AI, and Data Analysis" },
      { name: "UI/UX Design", description: "Design thinking and Figma" }
    ]);

    console.log("✅ Categories inserted successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error inserting categories:", error);
    process.exit(1);
  }
};

seedCategories();
