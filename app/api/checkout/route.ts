import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, customer, shipping } = body

    // Validate required fields
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Items are required' },
        { status: 400 }
      )
    }

    if (!customer || !customer.email) {
      return NextResponse.json(
        { error: 'Customer email is required' },
        { status: 400 }
      )
    }

    // Calculate total
    const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    const shippingCost = subtotal > 50 ? 0 : 9.99
    const tax = subtotal * 0.08
    const total = subtotal + shippingCost + tax

    // In a real app, this would:
    // 1. Create a Stripe Checkout session
    // 2. Save the order to the database
    // 3. Send confirmation email
    // 4. Return the checkout session URL

    // For demo purposes, simulate Stripe checkout
    const checkoutSession = {
      id: `cs_${Date.now()}`,
      url: '/checkout/success',
      amount_total: Math.round(total * 100), // Convert to cents
      currency: 'usd',
      customer_email: customer.email,
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      checkoutSession,
      order: {
        id: `order_${Date.now()}`,
        items,
        customer,
        shipping,
        subtotal,
        shippingCost,
        tax,
        total,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }
    })

  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
