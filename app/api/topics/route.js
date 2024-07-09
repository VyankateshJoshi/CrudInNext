import connectMongodb from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import { jsx } from "react/jsx-runtime";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongodb();
    await Topic.create({ title, description })
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
    await connectMongodb();
    const topics = await Topic.find();
    return NextResponse.json({ topics })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongodb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: `${id} deleted sucessfully` })
}