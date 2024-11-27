import { importKey } from 'crypto-js';
const secretKey = "this_is_the_secret_key";

// تبدیل کلید به فرمت قابل استفاده توسط Web Crypto API
const getKey = async () => {
  return await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secretKey),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
};

// رمزگذاری JWT
export const encryptJWT = async (payload) => {
  const header = { alg: "HS256", typ: "JWT" };
  const base64UrlEncode = (obj) =>
    btoa(JSON.stringify(obj))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(payload);

  const key = await getKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`)
  );

  const base64Signature = btoa(
    String.fromCharCode(...new Uint8Array(signature))
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${encodedHeader}.${encodedPayload}.${base64Signature}`;
};

// رمزگشایی JWT
export const decryptJWT = async (token) => {
  try {
    const [header, payload, signature] = token.split(".");
    const key = await getKey();

    const verifiedSignature = await crypto.subtle.verify(
      "HMAC",
      key,
      new Uint8Array(
        atob(signature.replace(/-/g, "+").replace(/_/g, "/"))
          .split("")
          .map((c) => c.charCodeAt(0))
      ),
      new TextEncoder().encode(`${header}.${payload}`)
    );

    if (!verifiedSignature) {
      throw new Error("Invalid signature");
    }

    return JSON.parse(atob(payload));
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return null;
  }
};
