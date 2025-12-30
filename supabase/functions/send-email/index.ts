import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body = await req.json();
    const apiKey = Deno.env.get("VITE_SRNC_MAILER_API_KEY");
    
    const response = await fetch("http://api.srnc.pl/API_srnc_mailer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey || "",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return new Response(
      JSON.stringify(result),
      {
        status: response.ok ? 200 : 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});