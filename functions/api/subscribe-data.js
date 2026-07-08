// ========== 配置区：密码和订阅链接都在这里，前端完全看不到 ==========
// 访问密码，自行修改
const VALID_PASSWORD = "kskblzdjd";

// 所有订阅链接数据，新增/修改都在这里操作
const SUBSCRIBE_DATA = [
  {
    icon: "📶",
    name: "订阅中心主站",
    desc: "多客户端支持、智能优选、一键生成配置，支持自定义地区与协议",
    url: "https://bianhaiyan.dpdns.org/ye",
    btnText: "前往订阅面板"
  },
  {
    icon: "🔗",
    name: "VLESS 节点订阅页",
    desc: "Cloudflare Workers 节点订阅，支持多客户端订阅链接一键导入",
    url: "https://kebiqiaoen.dpdns.org/4715e258-8fa7-4037-b2f8-d753cbfd99f3",
    btnText: "前往节点页面"
  },
  {
    icon: "⚙️",
    name: "Pages 管理后台",
    desc: "由 edgetunnel 驱动的订阅管理后台，支持节点配置与规则管理",
    url: "https://bianhaiyan.pages.dev/admin",
    btnText: "前往管理后台"
  },
  {
    icon: "📱",
    name: "ClashMetaForAndroid",
    desc: "安卓手机专用客户端，Clash Meta内核，支持全类型订阅链接导入",
    url: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases/tag/v2.11.30",
    btnText: "Github下载页"
  },
  {
    icon: "💻",
    name: "v2rayN Windows",
    desc: "Windows桌面客户端，支持VLESS/Vmess/Trojan等协议，一键导入订阅",
    url: "https://github.com/2dust/v2rayN/releases/download/7.23.1/v2rayN-windows-64.zip",
    btnText: "直接下载安装包"
  }
];

// ========== 接口逻辑 ==========
export async function onRequestPost(context) {
  try {
    // 读取前端传的密码
    const body = await context.request.json().catch(() => ({}));
    const inputPassword = body.password || "";

    // 密码错误，返回403
    if (inputPassword !== VALID_PASSWORD) {
      return new Response(
        JSON.stringify({ code: 403, msg: "密码错误" }),
        {
          status: 403,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store"
          }
        }
      );
    }

    // 密码正确，返回订阅链接数据
    return new Response(
      JSON.stringify({ code: 200, data: SUBSCRIBE_DATA }),
      {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ code: 500, msg: "服务异常" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
