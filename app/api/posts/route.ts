import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    console.log(searchParams.get('page'));

    return NextResponse.json({ message: 'Hello' }, { status: 200 })
}

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json(
        {
            payload: body,
            message: 'Hello'
        },
        {
            status: 200
        }

    )
}