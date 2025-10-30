// Analytics tracking utilities for VedicPure

export const analytics = {
  // Track page view
  pageView: (url: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('pageview', { props: { path: url } })
    }
    
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  },

  // Track product view
  productView: (productId: string, productName: string, price: number) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Product View', {
        props: {
          product_id: productId,
          product_name: productName,
          price: price,
        },
      })
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_item', {
        currency: 'INR',
        value: price,
        items: [{
          item_id: productId,
          item_name: productName,
          price: price,
        }],
      })
    }
  },

  // Track add to cart
  addToCart: (product: {
    id: string
    name: string
    price: number
    quantity: number
    isSubscription?: boolean
  }) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Add to Cart', {
        props: {
          product_id: product.id,
          product_name: product.name,
          price: product.price,
          quantity: product.quantity,
          subscription: product.isSubscription || false,
        },
      })
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'add_to_cart', {
        currency: 'INR',
        value: product.price * product.quantity,
        items: [{
          item_id: product.id,
          item_name: product.name,
          price: product.price,
          quantity: product.quantity,
        }],
      })
    }
  },

  // Track subscription started
  subscriptionStarted: (interval: string, value: number, productName: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Subscription Started', {
        props: {
          interval: interval,
          value: value,
          product: productName,
        },
      })
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        currency: 'INR',
        value: value,
        transaction_id: `sub_${Date.now()}`,
        items: [{
          item_name: `${productName} (${interval})`,
          price: value,
          quantity: 1,
        }],
      })
    }
  },

  // Track checkout started
  beginCheckout: (value: number, items: any[]) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Begin Checkout', {
        props: {
          value: value,
          item_count: items.length,
        },
      })
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'begin_checkout', {
        currency: 'INR',
        value: value,
        items: items,
      })
    }
  },

  // Track purchase
  purchase: (orderId: string, value: number, items: any[]) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Purchase', {
        props: {
          order_id: orderId,
          value: value,
          item_count: items.length,
        },
      })
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: orderId,
        value: value,
        currency: 'INR',
        items: items,
      })
    }
  },

  // Track lab report download
  labReportDownload: (reportTitle: string, productName: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Lab Report Downloaded', {
        props: {
          report: reportTitle,
          product: productName,
        },
      })
    }
  },

  // Track newsletter signup
  newsletterSignup: (email: string) => {
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Newsletter Signup')
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'sign_up', {
        method: 'Newsletter',
      })
    }
  },
}
