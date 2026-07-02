// Pages Functions 标准导出 handler
export async function onRequest(context) {
  const { request, env, params } = context

  return new Response(JSON.stringify({
    code: 200,
    msg: '成功调用 Cloudflare Pages Function',
    clientIP: request.headers.get('cf-connecting-ip'),
    country: request.headers.get('cf-ipcountry'),
    time: new Date().toLocaleString()
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}