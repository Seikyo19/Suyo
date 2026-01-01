/* ========= START JOURNEY ========= */
function startJourney() {
  document.getElementById("landing").innerHTML = `
    <h1>For You ❤️</h1>
    <p>Choose one, love</p>

    <div class="choices">
      <button onclick="showLetter()">💌 Read Letter</button>
      <button onclick="showReasons()">💖 Why I Love You</button>
      <button onclick="showSurprise()">🎁 Surprise</button>
      <button onclick="askValentine()">💍 Final Question</button>
    </div>
  `;
}

/* ========= LETTER ========= */
function showLetter() {
  document.getElementById("landing").innerHTML = `
    <h1>My Letter 💌</h1>
    <p>
      My magandang bebe,
I don’t know if words are enough, but tonight I just want to speak from my heart. I miss you in the quiet moments, in the small things, in the way the world felt lighter when you were beside me. Loving you was never something I had to try to do—it came naturally. And losing you made me realize how deeply you mattered, and still matter, to me. I know I hurt you. I know I broke something precious. And I’m sorry—not just for what I did, but for the pain you had to carry because of me. If I could take it back, I would, without hesitation. You deserved honesty, loyalty, and security, and I failed you. That truth stays with me every day. But even in regret, one thing remains unchanged: mahal kita. Not the kind of love that begs or forces, but the kind that hopes, waits, and respects. The kind that wants your healing, even if it doesn’t include me. If one day your heart allows it—if you ever feel there’s still a chance—I promise to show you growth, not just say it. To love you the right way this time. To protect your heart instead of being the reason it broke. And if that day never comes, please know this, Thank you for loving me the way you did. Thank you for the memories, the laughter, the warmth. I will always carry you with gratitude and love. No matter where life takes us, a part of my heart will always be yours.
    </p>
    <button onclick="startJourney()">⬅ Back</button>
  `;
}

/* ========= REASONS ========= */
function showReasons() {
  document.getElementById("landing").innerHTML = `
    <h1>Why I Love You 💖</h1>
    <p>
      • because you make ordinary moments feel magical<br>
      • I love the way you laugh—it’s impossible not to smile when I hear it<br>
      • I love the little things you do that show how much you care, even when I don’t say it<br>
      • I love how you make me feel safe, understood, and accepted for who I really am<br>
      • I love you because it's you
    </p>
    <button onclick="startJourney()">⬅ Back</button>
  `;
}

/* ========= SURPRISE ========= */
function showSurprise() {
  document.getElementById("landing").innerHTML = `
    <h1>Surprise 🎁</h1>
    <p>Look at these! ❤️</p>
    <img src="surprise2.jpg" alt="Surprise 1" class="surprise-img">
    <img src="surprise1.jpg" alt="Surprise 1" class="surprise-img">
    <img src="surprise3.jpg" alt="Surprise 1" class="surprise-img"><br>
    <h1>rawr</h1><br>
    <button onclick="startJourney()">⬅ Back</button>
  `;
}

/* ========= VALENTINE QUESTION ========= */
function askValentine() {
  document.getElementById("landing").innerHTML = `
    <h1>Will you be my Girlfriend na? 🥹 💘</h1>

    <div class="valentine-buttons">
      <button onclick="yesAnswer()">Yes ❤️</button>
      <button id="noBtn" onmouseover="moveNo()">No 💔</button>
    </div>
  `;
}

function yesAnswer() {
  document.getElementById("landing").innerHTML = `
    <h1>YAYYY 🥰</h1>
    <p>
      You just made me the happiest person ever ❤️<br><br>
      I love you always.<br><br>
    </p>
  `;
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* ========= BACKGROUND HEARTS ========= */
const heartEmojis = ["❤️", "💖", "💗", "💕"];

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  document.body.appendChild(heart);
}