/** @odoo-module **/

const config = {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  referrerPolicy: "no-referrer",
};

/**
 * Perform Post FormData
 * @returns json
 */
export async function post_form_data(route, form_data, csrf_token = "") {
  const _config = {
    body: form_data,
    ...config,
  };

  if (csrf_token) {
    _config["body"].append("csrf_token", csrf_token);
  }
  const response = await fetch(route, _config);

  const data = await response.json();
  return data;
}

export async function jsonrpc(route, params = {}) {
  const response = await fetch(route, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: params,
      id: `${Math.floor(Math.random() * 100000000)}`,
    }),
    ...config,
  });

  const data = await response.json();

  return data;
}
