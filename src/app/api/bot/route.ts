import { NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Hello World!" },
    { status: HttpStatusCode.Ok }
  );
}

export async function POST(): Promise<void> {
  /* FAÇA SUA REQUISIÇÃO PARA OPENAI A PARTIR DESSA ROTA */
}
