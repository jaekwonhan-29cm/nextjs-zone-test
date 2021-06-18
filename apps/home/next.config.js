
const SPECIAL_ORDER_URL = 'https://jaekwonhan-29cm-special-order.vercel.app'

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/special-order',
        destination: `${SPECIAL_ORDER_URL}/special-order`
      }
    ]
  }
}
