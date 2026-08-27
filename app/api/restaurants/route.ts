import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/connect';
import Restaurant from '@/models/Restaurant';

export async function GET() {
  try {
    await connectDB();
    const restaurants = await Restaurant.find()
      .populate('owner', 'name email')
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: restaurants });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    if (body.slug) {
      const existingSlug = await Restaurant.findOne({ slug: body.slug });
      if (existingSlug) {
        return NextResponse.json(
          { success: false, error: 'Slug already exists' },
          { status: 400 }
        );
      }
    }

    const restaurant = await Restaurant.create(body);
    return NextResponse.json({ success: true, data: restaurant }, { status: 201 });
  } catch (error) {
    if (error instanceof Error && 'errors' in error) {
      const messages = Object.values((error as { errors: Record<string, { message: string }> }).errors).map(
        (err) => err.message
      );
      return NextResponse.json({ success: false, error: messages }, { status: 400 });
    }
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
