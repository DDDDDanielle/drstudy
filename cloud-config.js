/* ============================================================
   DRSTUDY 云端同步配置（腾讯云 CloudBase HTTP 直调模式）
   ------------------------------------------------------------
   新方案：前端用 fetch() 直接 POST 到云函数 HTTP 接入地址
   不需要加载 CloudBase SDK，不需要配置 Web 安全域名
   只需在控制台开启「云接入」即可
   ============================================================ */
window.DRSTUDY_CLOUD = {
  provider: 'cloudbase',

  /* ---- 腾讯云 CloudBase ---- */
  env: 'drstudy-d3g5ie8l7f3af3152',  // CloudBase 环境 ID
  func: 'drbuddyCloud',              // 云函数名称

  // HTTP 接入地址（云接入开启后自动生成，通常格式如下，不用改）
  // 如控制台生成的路径不同，把这里的 URL 改成实际地址即可
  httpUrl: 'https://drstudy-d3g5ie8l7f3af3152.service.tcloudbase.com/drbuddyCloud',

  /* ---- Supabase（备用，把 provider 改成 'supabase' 并填好下面两项即切换） ---- */
  url: '',   // 形如 https://xxxx.supabase.co
  key: '',   // anon public key（eyJ... 开头长字符串）

  /* ---- 微信登录（可选。需在微信开放平台 open.weixin.qq.com 申请"网站应用"，且仅支持企业主体） ---- */
  wechat: {
    enabled: false,
    appid: ''
  }
};
