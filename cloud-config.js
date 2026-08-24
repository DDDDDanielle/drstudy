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
  key: ''    // anon public key（eyJ... 开头长字符串）
};
