// api.js
const baseUrl =  window.location.origin;
// const baseUrl =  "http://127.0.0.1:4000";
console.log(baseUrl,"baseUrl");
export function getUrlByFunctionCode(code) {
  switch (code) {
    case "01 - Read Coils":
      return `  ${baseUrl}/fc1-read-coils.php`;

    case "02 - Read Discrete Inputs":
      return `  ${baseUrl}/fc2-read-discrete-inputs.php`;

    case "03 - Read Holding Registers":
      return `  ${baseUrl}/fc3-read-holding-registers.php`;

    case "04 - Read Input Registers":
      return `  ${baseUrl}/fc4-read-input-registers.php`;

    case "05 - Write Coil":
      return `  ${baseUrl}/fc5-write-coil.php`;

    case "06 - Write Single Register":
      return `  ${baseUrl}/fc6-write-single-register.php`;

    default:
      return null;
  }
}



// ارسال فرم‌دیتا
export async function fetchData(formData, selectedFunctionCode) {
  const url = getUrlByFunctionCode(selectedFunctionCode);
  if (!url) throw new Error("Invalid function code");

  const fd = new FormData();
  for (const key in formData) {
    fd.append(key, formData[key]);
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      body: fd,
    });

    return await response.json();

  } catch (error) {
    console.error("API ERROR:", error);
    throw error;
  }
}



// چک اپدیت نرم‌افزار
export async function fetchUpdate() {
  const url = `${baseUrl}/app-update.php`;
  try {
    const response = await fetch(url, { method: "GET" });
    return await response.json();

  } catch (error) {
    console.error("API UPDATE ERROR:", error);
    throw error;
  }
}
export async function getUpdate() {
  const url = `${baseUrl}/app-update.php?apply=1`;

  try {
    const response = await fetch(url, { method: "GET" });
    return await response.json();

  } catch (error) {
    console.error("API UPDATE ERROR:", error);
    throw error;
  }
}

