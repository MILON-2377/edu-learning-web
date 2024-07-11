// src/app/api/users/route.js
import connect from '@/dbConfig/dbConfig';
import Users from '@/models/usersModels';
import { NextRequest, NextResponse } from 'next/server';

// user create function
export async function POST(req) {
  
  await connect();

  try {
    const resBody = await req.json();

    // Log the request body
    // console.log('Request Body:', resBody);

    const { userName, email, profession, isAdmin} = resBody;

    // Save the user to the database
    const newUser = new Users({ userName, email, profession, isAdmin });
    const saveUser = await newUser.save();

    // Return a success response
    return NextResponse.json({ message: "User created successfully", saveUser });

  } catch (error) {
    // Log the error
    console.error('Error:', error);

    // Return an error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// get users by using the get method
export async function GET(req){

  await connect();

  try {
    const {searchParams} = new URL(req.url);
    const email = searchParams.get("email");
    console.log(email);

    const user = await Users.findOne({email});

    if(!user){
      return NextResponse.json({message:"User not found"},{status:404});
    }

    return NextResponse.json({user});

  } catch (error) {
    console.log("error",error);
    return NextResponse.json({error:"somethind went wrong",error});
  }
}

