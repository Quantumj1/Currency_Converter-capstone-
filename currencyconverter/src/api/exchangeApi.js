import axios from 'axios';

const DEFAULT_URL = import.meta.env.VITE_EXCHANGE_URL || 'https://api.currencyapi.com/v3/latest?apikey=cur_live_sz5m7BR4dg86NwHyIxq7Eaw3EFgrvSoRGJgFgwhk';
const API_KEY = import.meta.env.VITE_EXCHANGE_API_KEY || 'cur_live_sz5m7BR4dg86NwHyIxq7Eaw3EFgrvSoRGJgFgwhk';

// Build request URL for a given base currency
function buildUrl(base) {
  let url = DEFAULT_URL;
  if (url.includes('{base}')) return url.replace('{base}', base);
  if (/\/latest\//.test(url)) return url.replace(/(\/latest\/)[^?&]*/i, `$1${base}`);
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}base=${base}`;
}

export async function fetchRatesForBase(base = 'USD') {
  const url = buildUrl(base);
  const headers = {};
  if (API_KEY && !API_KEY.startsWith('http')) {
    headers['Authorization'] = `Bearer ${API_KEY}`;
  }
  const response = await axios.get(url, { headers, timeout: 10000 });
  // Normalize typical response shapes
  const data = response.data;
  if (data && data.rates) return data.rates;
  if (data && data.data) {
    // Handle currencyapi.com v3 format
    const rates = {};
    for (const [code, info] of Object.entries(data.data)) {
      rates[code] = Number(info.value);
    }
    return rates;
  }

  // handle simple static jsDelivr format
  const keys = Object.keys(data || {});
  if (keys.length === 1 && typeof data[keys[0]] === 'object') {
    const inner = data[keys[0]];
    const mapped = {};
    for (const [k, v] of Object.entries(inner)) mapped[k.toUpperCase()] = Number(v);
    // If file base matches requested base
    if (keys[0].toUpperCase() === base.toUpperCase()) {
      mapped[base.toUpperCase()] = 1;
      return mapped;
    }
    // If file provides rate for requested base
    const req = base.toUpperCase();
    if (mapped[req]) {
      const factor = mapped[req];
      const converted = {};
      for (const [k, v] of Object.entries(mapped)) converted[k] = Number(v) / factor;
      converted[req] = 1;
      return converted;
    }
    return mapped;
  }

  // As a fallback, try to return the object itself if it looks like rates
  return data || {};
}
