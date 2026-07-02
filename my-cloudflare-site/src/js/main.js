// 请求 Cloudflare Pages Function 接口 /api/hello
async function fetchApi() {
  const resBox = document.getElementById('api-result')
  try {
    const res = await fetch('/api/hello')
    const data = await res.json()
    resBox.innerHTML = `<pre>API 返回数据：${JSON.stringify(data, null, 2)}</pre>`
  } catch (err) {
    resBox.innerHTML = `接口请求失败：${err.message}`
  }
}

// 页面加载自动调用
fetchApi()