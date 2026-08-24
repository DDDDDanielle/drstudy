/* ============================================================
   DRSTUDY 云端同步配置（双后端：腾讯云 CloudBase / Supabase）
   ------------------------------------------------------------
   provider 填 'cloudbase' → 使用腾讯云 CloudBase（需 env + 控制台已配置安全域名）
   provider 填 'supabase' → 使用 Supabase（需 url + key）
   两种都没填好 = 纯本地模式，不影响使用。
   ============================================================ */
window.DRSTUDY_CLOUD = {
  provider: 'cloudbase',

  /* ---- 腾讯云 CloudBase（当前启用） ---- */
  env: 'drstudy-d3g5ie8l7f3af3152',  // CloudBase 环境 ID
  func: 'drbuddyCloud',              // 云函数名称

  /* ---- Supabase（备用，把 provider 改成 'supabase' 并填好下面两项即切换） ---- */
  url: '',   // 形如 https://xxxx.supabase.co
  key: '',   // anon public key（eyJ... 开头长字符串）

  /* ---- 微信登录（可选。需在微信开放平台 open.weixin.qq.com 申请"网站应用"，且仅支持企业主体） ---- */
  wechat: {
    enabled: false,   // 拿到网站应用 AppID 后改成 true 并填 appid，同时把 AppSecret 填进云函数代码顶部
    appid: ''         // 微信开放平台 网站应用 AppID（wx 开头）
  }
};
