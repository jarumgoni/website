/* AI AppFactory Live Sales & Technical Support Robot */
(function() {
  const isIndo = navigator.language && navigator.language.startsWith('id');
  
  // Knowledge base for instant high-converting responses
  const responses = {
    id: {
      default: "Halo! Saya Alya dari tim teknis AI AppFactory. Ada yang bisa saya bantu terkait 4 Enterprise Engine kami, implementasi arsitektur, atau panduan lisensi komersial?",
      pricing: "Kami memiliki 3 tier lisensi resmi:\n1. <b>Starter Pack ($9.99 / ~Rp149rb)</b>: Cocok untuk solo dev (25 SaaS Blueprints).\n2. <b>Pro Master Suite ($29 / ~Rp450rb)</b>: 4 Specialized Engines (HRIS PPh 21 TER, WhatsApp CRM, B2B Scraper, SaaS Supabase).\n3. <b>Enterprise Agency ($99 / ~Rp1.5jt)</b>: Lisensi agensi komersial tanpa batas + skrip deployment VPS otomatis.",
      payment: "Pembayaran <b>100% otomatis</b> dan instan! Anda bisa membayar menggunakan:\n• <b>PayPal</b> (Instant International Checkout)\n• <b>Kartu Visa / Mastercard</b> (termasuk Kartu Debit Visa Bank Jago, Mandiri, BCA, dll)\n\nSetelah pembayaran berhasil, link download brankas dan akses aktivasi langsung dikirim ke email Anda dalam hitungan detik tanpa menunggu konfirmasi manual.",
      discount: "Gunakan kupon khusus <b>LAUNCH10</b> di halaman checkout Gumroad untuk mendapatkan diskon langsung $10 (dari $29 menjadi hanya $19)!",
      gem: "AI AppFactory adalah proprietary multi-agent software architecture engine yang dirancang dengan enterprise guardrails zero-trust, DDL PostgreSQL multi-tenant, dan kepatuhan regulasi lokal (seperti PPh 21 TER PMK 168/2023). Anda menerima brankas sistem lengkap siap pakai!",
      hris: "Engine HRIS & Payroll kami dirancang presisi dengan aturan pajak Indonesia terbaru (PPh 21 TER PP 58/2023), perhitungan BPJS 10 kolom, geofencing GPS presensi 100m, dan isolasi data per PT menggunakan PostgreSQL Row Level Security (RLS).",
      crm: "Engine WhatsApp CRM mengintegrasikan webhook event-driven Baileys/Meta Cloud API, routing tiket CS otomatis, proteksi idempotensi pesan anti-duplikat, dan checkout link otomatis.",
      wa: "Untuk konsultasi teknis langsung, kustomisasi aplikasi perusahaan, atau diskusi implementasi via WhatsApp, Anda bisa chat langsung di <a href='https://wa.me/6285117009115' target='_blank' style='color:#34d399;font-weight:bold;text-decoration:underline;'>0851-1700-9115 (Klik untuk Chat WA Bisnis)</a>."
    },
    en: {
      default: "Hi there! I'm Alya, Technical Architect at AI AppFactory. How can I help you regarding our 4 Specialized Architecture Engines, Supabase RLS security, or commercial licensing?",
      pricing: "We offer 3 official licensing tiers:\n1. <b>Starter Pack ($9.99)</b>: Perfect for solo developers (25 SaaS Blueprints).\n2. <b>Pro Master Suite ($29.00)</b>: 4 Specialized Engines (HRIS, WhatsApp CRM, B2B Scraper, Universal SaaS).\n3. <b>Enterprise Agency ($99.00)</b>: Unlimited client commercial resale license + automated VPS deploy scripts.",
      payment: "Payments are <b>100% automated</b>! You can checkout with:\n• <b>PayPal</b> (Instant Global Checkout)\n• <b>Visa / Mastercard / Apple Pay</b> (including international debit/credit cards)\n\nUpon successful checkout, the master zip vault and activation access are instantly delivered to your email inbox within 3 seconds.",
      discount: "You can apply coupon code <b>LAUNCH10</b> at Gumroad checkout to take $10 OFF instantly (get the Pro Suite for just $19)!",
      gem: "AI AppFactory is a proprietary multi-agent software architecture compiler engineered with zero-trust PostgreSQL RLS, automated multi-tenant DDL, and local tax compliance models. You receive the complete production asset vault upon purchase.",
      hris: "Our Enterprise HRIS engine features Indonesian tax compliance (PPh 21 TER PP 58/2023), BPJS withholding logic, GPS geofencing attendance, and strict multi-company Row Level Security.",
      crm: "Our WhatsApp CRM engine handles high-concurrency Baileys/Meta webhooks, automated CS ticket distribution, idempotency key deduplication, and direct payment link generation."
    }
  };

  // Inject CSS
  const style = document.createElement('style');
  style.innerHTML = `
    #cs-chat-bubble { position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
    #cs-chat-window {
      position: fixed; bottom: 84px; right: 20px; width: 360px; max-width: calc(100vw - 40px);
      height: 480px; max-height: calc(100vh - 120px);
      background: #090d16; border: 1px solid #1e293b; border-radius: 16px;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px rgba(16, 185, 129, 0.1);
      display: none; flex-direction: column; overflow: hidden; z-index: 9999; font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .cs-msg { margin-bottom: 12px; font-size: 13px; line-height: 1.5; border-radius: 12px; padding: 10px 14px; max-width: 85%; }
    .cs-bot { background: #0f172a; border: 1px solid #1e293b; color: #e2e8f0; align-self: flex-start; }
    .cs-user { background: #10b981; color: #022c22; font-weight: 500; align-self: flex-end; }
  `;
  document.head.appendChild(style);

  // Inject HTML
  const container = document.createElement('div');
  container.innerHTML = `
    <div id="cs-chat-bubble">
      <button id="cs-toggle-btn" class="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 transition transform hover:scale-105 cursor-pointer">
        <svg id="cs-icon-chat" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        <svg id="cs-icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div id="cs-chat-window">
      <!-- Window Header -->
      <div class="p-3.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="relative">
            <div class="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-emerald-400 text-sm">
              🤖
            </div>
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900"></span>
          </div>
          <div>
            <div class="font-bold text-white text-xs">Alya (AI Support Specialist)</div>
            <div class="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online 24/7 • Instant Reply
            </div>
          </div>
        </div>
        <button id="cs-close-window-btn" class="text-slate-400 hover:text-white text-sm p-1">✕</button>
      </div>

      <!-- Messages Body -->
      <div id="cs-messages" class="flex-1 p-3.5 overflow-y-auto flex flex-col gap-1 code-scroll"></div>

      <!-- Quick Action Buttons -->
      <div class="px-3 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap code-scroll">
        <button class="cs-quick-btn px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 hover:border-emerald-400 hover:text-white transition" data-query="wa">💬 Chat WA Mas Arie</button>
        <button class="cs-quick-btn px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white transition" data-query="payment">💳 Cara Bayar / PayPal / Visa</button>
        <button class="cs-quick-btn px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white transition" data-query="discount">🎁 Kupon Diskon</button>
        <button class="cs-quick-btn px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white transition" data-query="pricing">🏷️ Pilihan Lisensi</button>
        <button class="cs-quick-btn px-2.5 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-white transition" data-query="hris">🏢 Fitur HRIS PPh 21</button>
      </div>

      <!-- Input Field -->
      <div class="p-2.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input id="cs-input" type="text" placeholder="${isIndo ? 'Tanya cara bayar, lisensi, atau diskon...' : 'Ask about pricing, features, or PayPal...'}" class="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500">
        <button id="cs-send-btn" class="px-3 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition">
          Kirim
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  const bubbleBtn = document.getElementById('cs-toggle-btn');
  const chatWindow = document.getElementById('cs-chat-window');
  const closeWindowBtn = document.getElementById('cs-close-window-btn');
  const iconChat = document.getElementById('cs-icon-chat');
  const iconClose = document.getElementById('cs-icon-close');
  const messagesBox = document.getElementById('cs-messages');
  const inputEl = document.getElementById('cs-input');
  const sendBtn = document.getElementById('cs-send-btn');

  let hasGreeted = false;

  function toggleChat() {
    const isHidden = chatWindow.style.display === 'none' || chatWindow.style.display === '';
    if (isHidden) {
      chatWindow.style.display = 'flex';
      iconChat.classList.add('hidden');
      iconClose.classList.remove('hidden');
      if (!hasGreeted) {
        addMessage(isIndo ? responses.id.default : responses.en.default, 'bot');
        hasGreeted = true;
      }
      inputEl.focus();
    } else {
      chatWindow.style.display = 'none';
      iconChat.classList.remove('hidden');
      iconClose.classList.add('hidden');
    }
  }

  bubbleBtn.addEventListener('click', toggleChat);
  closeWindowBtn.addEventListener('click', toggleChat);

  function addMessage(html, type) {
    const div = document.createElement('div');
    div.className = `cs-msg cs-${type}`;
    div.innerHTML = html.replace(/\n/g, '<br>');
    messagesBox.appendChild(div);
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }

  function handleUserQuery(text) {
    if (!text || !text.trim()) return;
    addMessage(text, 'user');
    inputEl.value = '';

    const lower = text.toLowerCase();
    const lang = isIndo || lower.includes('halo') || lower.includes('bisa') || lower.includes('bayar') ? 'id' : 'en';

    setTimeout(() => {
      if (lower.includes('bayar') || lower.includes('pay') || lower.includes('paypal') || lower.includes('visa') || lower.includes('jago') || lower.includes('otomatis')) {
        addMessage(responses[lang].payment, 'bot');
      } else if (lower.includes('diskon') || lower.includes('kupon') || lower.includes('promo') || lower.includes('coupon') || lower.includes('code')) {
        addMessage(responses[lang].discount, 'bot');
      } else if (lower.includes('harga') || lower.includes('price') || lower.includes('biaya') || lower.includes('paket') || lower.includes('tier') || lower.includes('starter') || lower.includes('enterprise')) {
        addMessage(responses[lang].pricing, 'bot');
      } else if (lower.includes('hris') || lower.includes('payroll') || lower.includes('pph') || lower.includes('bpjs')) {
        addMessage(responses[lang].hris, 'bot');
      } else if (lower.includes('whatsapp') || lower.includes('crm') || lower.includes('baileys') || lower.includes('chat')) {
        addMessage(responses[lang].crm, 'bot');
      } else if (lower.includes('gem') || lower.includes('gemini') || lower.includes('ai') || lower.includes('custom')) {
        addMessage(responses[lang].gem, 'bot');
      } else {
        const fallback = lang === 'id' 
          ? "Pertanyaan Anda sangat bagus! Seluruh paket AI AppFactory sudah dilengkapi arsitektur multi-tenant production, skema DDL PostgreSQL, dan aktivasi cloud sekali klik. Anda bisa langsung checkout via PayPal atau Kartu Visa/Jago di tombol di bawah ini."
          : "Great question! Every AI AppFactory tier comes with complete production-grade architecture blueprints, multi-tenant PostgreSQL DDL schemas, and instant email delivery via PayPal or Visa card.";
        addMessage(fallback, 'bot');
      }
    }, 450);
  }

  sendBtn.addEventListener('click', () => handleUserQuery(inputEl.value));
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserQuery(inputEl.value);
  });

  document.querySelectorAll('.cs-quick-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const q = this.getAttribute('data-query');
      const lang = isIndo ? 'id' : 'en';
      addMessage(this.textContent, 'user');
      setTimeout(() => {
        addMessage(responses[lang][q] || responses[lang].default, 'bot');
      }, 350);
    });
  });

  // Auto show subtle popup after 7 seconds to drive engagement
  setTimeout(() => {
    if (!hasGreeted && chatWindow.style.display !== 'flex') {
      const hint = document.createElement('div');
      hint.id = 'cs-hint-popup';
      hint.className = 'fixed bottom-24 right-5 bg-slate-900 border border-emerald-500/50 text-white text-xs px-3.5 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 z-50 cursor-pointer animate-bounce';
      hint.innerHTML = `<span>💬</span> <span>${isIndo ? 'Ada yang bisa dibantu seputar lisensi & pembayaran PayPal/Visa?' : 'Questions about licensing & instant PayPal/Visa checkout?'}</span>`;
      hint.onclick = () => {
        hint.remove();
        toggleChat();
      };
      document.body.appendChild(hint);
      setTimeout(() => { if (hint.parentNode) hint.remove(); }, 12000);
    }
  }, 7000);

})();
