---
layout: page
title: Focus together
title_tr: Birlikte odaklan
permalink: /focusling/join
comments: false
sitemap: false
app: focusling
app_name: Focusling
icon: users
icon_color: "#3FAE86"
subtitle: A friend invited you to a Focusling room.
subtitle_tr: Bir arkadaşın seni bir Focusling odasına davet etti.
---

<!-- The invite link the app shares: /focusling/join?c=K7Q2MX. With Focusling installed, the link opens the app
     directly (Universal Links / App Links, /.well-known/); this page is what everyone else sees. -->

<p data-i18n="join.intro">Your lings sit side by side while you focus at the same time. If anyone leaves, the round ends for everyone.</p>

<div id="join-code-box" hidden>
  <p data-i18n="join.codeLabel">Room code</p>
  <p id="join-code" style="font-size:2.25rem;font-weight:800;letter-spacing:0.08em;margin:0"></p>
  <p><a id="join-open" class="fw-btn-primary" href="#" data-i18n="join.open">Open in Focusling</a></p>
</div>

<h2 data-i18n="join.howTitle">How to join</h2>

<ol>
  <li data-i18n="join.how1">Install Focusling on your iPhone or Android phone.</li>
  <li data-i18n="join.how2">Open the invite link again, or go to Focus, tap "Focus with friends" and enter the room code.</li>
  <li data-i18n="join.how3">Wait in the room until the host starts the round.</li>
</ol>

<p data-i18n="join.pro">Joining a room is free. Rooms are for two; a host with Focusling Pro can bring up to 4.</p>

<p><a href="/focusling/" data-i18n="join.more">More about Focusling</a></p>

<script>
  (function () {
    // Only the code's own characters (no look-alikes), so nothing from the URL reaches the page as markup.
    var alphabet = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
    var raw = (new URLSearchParams(window.location.search).get("c") || "").toUpperCase().replace(/[^0-9A-Z]/g, "");
    if (raw.length !== 6 || raw.split("").some(function (c) { return alphabet.indexOf(c) < 0; })) return;
    document.getElementById("join-code").textContent = raw.slice(0, 3) + "-" + raw.slice(3);
    document.getElementById("join-open").setAttribute("href", "focusling://join/" + raw);
    document.getElementById("join-code-box").hidden = false;
  })();
</script>
