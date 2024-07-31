import { NextResponse } from "next/server";

export async function GET() {
    const data = [
        "검색어1",
        "검색어2",
        "검색어3",
        "검색어4",
        "검색어5",
        "검색어6",
        "검색어7",
        "검색어8",
        "검색어9",
        "검색어10",
    ];

    return NextResponse.json(data);
}