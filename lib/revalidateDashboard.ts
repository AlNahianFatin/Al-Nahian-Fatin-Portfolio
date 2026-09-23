export async function revalidateDashboard() {
  const baseUrl = process.env.DASHBOARD_URL;
  const secret = process.env.REVALIDATE_SECRET;
  
  if (!baseUrl || !secret){
    console.error("Dashboard URL or revalidate secret is missing in env");
    return false;
  }

  try {
    await fetch(`${baseUrl.replace(/\/$/, "")}/api/revalidate`, {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}` },
      signal: AbortSignal.timeout(5000),
    });
  } catch (error) {
    console.error("Could not reach dashboard for revalidation:", error);
  }
}
