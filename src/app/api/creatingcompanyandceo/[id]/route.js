// Import necessary modules
import { NextResponse } from "next/server";
import companyCEO from "@/backend/models/company/companyCEO";
import companies from "@/backend/models/company/company";

// Define the handler function
const checkDuplicates = async (req) => {
  try {
    // Parse request body
    const { entityType, uniqueFields } = await req.json();
    let model;

    // Select the appropriate model based on the entityType
    if (entityType === 'CEO') {
      model = companyCEO;
    } else if (entityType === 'Company') {
      model = companies;
    } else {
      return NextResponse.json({
        message: "Invalid entityType provided",
        success: false,
      }, {
        status: 400,
      });
    }

    // Construct the query to check for duplicates
    const duplicates = {};
    for (const field of uniqueFields) {
      const duplicateEntries = await model.aggregate([
        { $group: { _id: `$${field}`, count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } }
      ]).toArray();
      duplicates[field] = duplicateEntries.map(entry => entry._id);
    }

    return NextResponse.json({
      message: `Duplicates found for ${entityType}`,
      duplicates: duplicates
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: "Internal Server Error",
      success: false,
    }, {
      status: 500,
    });
  }
};

// Export the handler function
export { checkDuplicates };
