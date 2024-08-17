import dbConnection from '@/backend/db/dbconnection';
import countryNames from '@/backend/models/countries/countryNames';
import { NextResponse } from 'next/server';

dbConnection();

export async function GET (req, { params }) {
  try {
    const { id } = params;
    const countryName = await countryNames.findById(id);
    return NextResponse.json({
      success: true,
      message: countryName
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });
  }
}

export async function PUT (req, { params }) {
  try {
    const request = await req.json();
    const { id } = params;
    const countryName = await countryNames.findByIdAndUpdate(id, request, { new: true, runValidators: true });
    return NextResponse.json({
      success: true,
      message: countryName
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });
  }
}

export async function DELETE (req, { params }) {
  try {
    const { id } = params;
    const countryName = await countryNames.findByIdAndDelete(id);
    return NextResponse.json({
      success: true,
      message: 'Country Name was successfully deleted...'
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message
    }, {
      status: 500
    });
  }
}