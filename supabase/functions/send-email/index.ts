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
      const language = body.language || "en";

      const confirmationMessages = {
        en: {
          subject: "Message confirmation - SRNC",
          title: "Thank you for contacting us!",
          text: "We have received your message and will contact you shortly.",
          yourMessage: "Your message:",
          name: "Name:",
          email: "Email:",
          message: "Message:",
          notProvided: "Not provided",
          regards: "Best regards,<br>SRNC Team"
        },
        pl: {
          subject: "Potwierdzenie otrzymania wiadomo\u015bci - SRNC",
          title: "Dzi\u0119kujemy za kontakt!",
          text: "Otrzymali\u015bmy Twoj\u0105 wiadomo\u015b\u0107 i skontaktujemy si\u0119 z Tob\u0105 wkr\u00f3tce.",
          yourMessage: "Twoja wiadomo\u015b\u0107:",
          name: "Imi\u0119 i nazwisko:",
          email: "Email:",
          message: "Wiadomo\u015b\u0107:",
          notProvided: "Nie podano",
          regards: "Pozdrawiamy,<br>Zesp\u00f3\u0142 SRNC"
        },
        zh: {
          subject: "\u6d88\u606f\u786e\u8ba4 - SRNC",
          title: "\u611f\u8c22\u60a8\u4e0e\u6211\u4eec\u8054\u7cfb\uff01",
          text: "\u6211\u4eec\u5df2\u6536\u5230\u60a8\u7684\u6d88\u606f\uff0c\u5e76\u5c06\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002",
          yourMessage: "\u60a8\u7684\u6d88\u606f\uff1a",
          name: "\u59d3\u540d\uff1a",
          email: "\u90ae\u7bb1\uff1a",
          message: "\u6d88\u606f\uff1a",
          notProvided: "\u672a\u63d0\u4f9b",
          regards: "\u6b64\u81f4\uff0c<br>SRNC\u56e2\u961f"
        }
      };

      const t = confirmationMessages[language];

      const confirmationBody = `
<h2>${t.title}</h2>
<p>${t.text}</p>
<h3>${t.yourMessage}</h3>
<p><strong>${t.name}</strong> ${body.fromName || t.notProvided}</p>
<p><strong>${t.email}</strong> ${body.replyTo}</p>
<p><strong>${t.message}</strong></p>
<p>${body.message}</p>
<br>
<p>${t.regards}</p>
      `;

      await fetch("http://api.srnc.pl/API_srnc_mailer.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          to: body.replyTo,
          subject: t.subject,
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