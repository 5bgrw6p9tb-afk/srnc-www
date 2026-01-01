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
    const apiKey = Deno.env.get("SRNC_Mail");

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: "API key not configured" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const response = await fetch("http://api.srnc.pl/API_srnc_mailer.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (response.ok && result.success && body.replyTo) {
      const confirmationBody = `
<h2>Dziękujemy za kontakt!</h2>
<p>Otrzymaliśmy Twoją wiadomość i skontaktujemy się z Tobą wkrótce.</p>
<h3>Twoja wiadomość:</h3>
<p><strong>Imię i nazwisko:</strong> ${body.fromName || "Nie podano"}</p>
<p><strong>Email:</strong> ${body.replyTo}</p>
<p><strong>Wiadomość:</strong></p>
<p>${body.message}</p>
<br>
<p>Pozdrawiamy,<br>Zespół SRNC</p>
      `;

      await fetch("http://api.srnc.pl/API_srnc_mailer.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          to: body.replyTo,
          subject: "Potwierdzenie otrzymania wiadomości - SRNC",
          message: confirmationBody,
          fromName: "SRNC Group",
          replyTo: "hello@srnc.pl",
          html: true,
        }),
      });
    }

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