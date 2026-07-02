// 全局中间件，拦截所有 /api/* 请求
export async function onRequest(context) {
  const { next, request } = context
  console.log('全局中间件触发，请求路径：', new URL(request.url).pathname)

  // 放行请求，执行后续接口逻辑
  return next()
}