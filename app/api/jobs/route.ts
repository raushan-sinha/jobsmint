import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(process.env.JOBS_API_URL!);

        if (!response.ok) {
            return NextResponse.json({
                success: false,
                message: 'Jobs API not found!'
            }, {
                status: response.status
            });
        }

        const data = await response.json();

        return NextResponse.json({
            success: true,
            data
        });
    } catch (error) {
        console.error('Error', error);

        return NextResponse.json({
            success: false,
            message: 'Something went wrong.'
        }, {
            status: 500
        })
    }
}