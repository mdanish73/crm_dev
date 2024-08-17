// import dbConnection from "@/backend/db/dbconnection";
// import countries from "@/backend/models/country/countries";
// import { NextResponse } from 'next/server';

// dbConnection();

// export async function GET(req, {params}) {
//   try {
//     const { id } = params;
//     const country = await countries.findById(id);
//     return NextResponse.json({
//       success: true,
//       message: country
//     }, {
//       status: 200
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message
//     }, {
//       status: 500
//     });
//   }
// }

// export async function PUT (req, {params}) {
//   try {
//     const { id } = params;
//     const request = await req.json();
//     const updatedCountry = await countries.findByIdAndUpdate(id, request, { new: true, runValidators: true });
//     return NextResponse.json({
//       success: true,
//       message: updatedCountry
//     }, {
//       status: 200
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message
//     }, {
//       status: 500
//     });
//   }
// }

// export async function DELETE (req, {params}) {
//   try {
//     const { id } = params;
//     const updatedCountry = await countries.findByIdAndDelete(id);
//     return NextResponse.json({
//       success: true,
//       message: "Country deleted successfully..."
//     }, {
//       status: 200
//     });
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       message: error.message
//     }, {
//       status: 500
//     });
//   }
// }