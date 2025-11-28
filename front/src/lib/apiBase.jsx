// front/src/lib/apiBase.js
export function getApiBase() {
  const env = import.meta.env?.VITE_API_URL;
  if (env) return env.trim(); // priorité à l'ENV Vercel/Vite
  const isProd =
    typeof window !== "undefined" && /\.vercel\.app$/.test(window.location.host);
  // fallback sûr
  return isProd
    ? "https://portfolio-blu2.onrender.com"
    : "http://localhost:5050";
}
