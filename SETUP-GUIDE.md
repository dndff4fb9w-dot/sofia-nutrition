# Sofia Nutrition App — Setup Guide
## Your step-by-step instructions to get the app on your iPhone

---

## WHAT YOU WILL DO (overview)
1. Download these files to your Mac  
2. Get a free Anthropic API key (so the AI features work)  
3. Create a free Netlify account  
4. Drag the folder to Netlify  
5. Enter your API key in Netlify  
6. Open the URL on your iPhone and add it to your home screen  

Total time: about 20–30 minutes, most of it waiting for things to load.

---

## STEP 1 — Download the files to your Mac

You should have received a folder called **sofia-nutrition** containing these files:
```
sofia-nutrition/
  index.html
  manifest.json
  sw.js
  netlify.toml
  netlify/
    edge-functions/
      claude.js
```

Make sure the folder structure is exactly like this. The `netlify` folder has a subfolder inside it called `edge-functions`, which contains `claude.js`. Do not move or rename any files.

Save the folder somewhere easy to find, like your Desktop.

---

## STEP 2 — Get your Anthropic API key

This is what allows the AI features to work (food parsing, the coach, scanning labels).
It's separate from your Claude subscription. Cost is a few cents per day of real use.

1. On your Mac, open Safari and go to: **https://console.anthropic.com**
2. Click **Sign Up** (top right)
3. Create an account with your email (or sign in with Google)
4. Once inside, look for **API Keys** in the left sidebar — click it
5. Click **Create Key**
6. Give it a name — type: `sofia-nutrition`
7. Click **Create Key**
8. A long string of letters and numbers will appear — it looks like: `sk-ant-api03-...`
9. **COPY IT NOW** — this is the only time you'll see it. Paste it somewhere safe (Notes app).

---

## STEP 3 — Create a Netlify account

1. Go to: **https://www.netlify.com**
2. Click **Sign up** (top right)
3. Sign up with your email or with Google — whichever is easier
4. You may need to verify your email — check your inbox and click the confirmation link
5. Once inside, you'll see a dashboard. Don't worry about anything on the page for now.

---

## STEP 4 — Upload your app to Netlify

1. On the Netlify dashboard, look for a box that says **"Drag and drop your site folder here"**
   - It may also say "Deploy manually" — click that if you don't see the drag-and-drop area
2. Open a Finder window on your Mac and find the **sofia-nutrition** folder
3. **Drag the entire sofia-nutrition folder** from Finder into that box on the Netlify website
4. Wait about 30 seconds — Netlify will show a progress bar
5. When it's done, you'll see a green checkmark and a URL like: `https://quirky-name-123456.netlify.app`
   - Write down or copy this URL — this is your app's address
6. You can rename this URL to something nicer: click **Site settings** → **Change site name** → type something like `sofia-nutrition` → Save
   - Your URL would then be: `https://sofia-nutrition.netlify.app`

---

## STEP 5 — Add your API key to Netlify

This is how the app gets permission to use Claude's AI features.

1. In Netlify, click on your site name to open it
2. Click **Site configuration** (in the left sidebar or top menu)
3. Click **Environment variables**
4. Click **Add a variable**
5. In the **Key** field, type exactly: `ANTHROPIC_API_KEY`  
   (capital letters, underscore between words — type it exactly like this)
6. In the **Value** field, paste your API key from Step 2 (the `sk-ant-api03-...` string)
7. Click **Save**
8. Now go back to your site: click **Deploys** in the sidebar, then click **Trigger deploy** → **Deploy site**
   - This restarts the app with the new key — wait about 30 seconds

---

## STEP 6 — Open the app on your iPhone

1. On your iPhone, open **Safari** (must be Safari, not Chrome, for the install to work)
2. Type your app URL in the address bar, e.g.: `https://sofia-nutrition.netlify.app`
3. The app should open and look exactly like you've been using it in Claude
4. Tap the **Share button** at the bottom of Safari — it looks like a box with an arrow pointing up ↑
5. Scroll down in the share menu and tap **"Add to Home Screen"**
6. You can change the name if you want — then tap **Add** (top right)
7. The app icon will appear on your iPhone home screen 🎉

From now on, tap that icon to open the app — it opens full screen, no browser bar, exactly like a real app.

---

## HOW TO UPDATE THE APP IN THE FUTURE

When you want new features or changes:

1. Come back to this conversation with Claude
2. Tell Claude what you want changed
3. Claude will give you a new `index.html` file
4. Download it to your Mac
5. Replace the old `index.html` in your sofia-nutrition folder with the new one
6. Go to Netlify → your site → **Deploys** tab
7. Drag the updated folder again (or just drag the single updated file)
8. The app on your iPhone updates automatically within 30 seconds

Your data (food logs, pantry, profile) is saved on your iPhone's local storage — it stays safe even when you update the app.

---

## SOMETHING WENT WRONG?

**The app opens but AI features don't work (food won't parse, coach gives errors):**
- Your API key may not have been saved correctly. Go back to Step 5 and check.
- Make sure you triggered a new deploy after adding the key.

**The page shows an error when I open the URL:**
- Wait 1 minute and try again — Netlify sometimes takes a moment to activate.
- Make sure you dragged the correct folder (the whole sofia-nutrition folder, not a file inside it).

**I can't find "Add to Home Screen" on my iPhone:**
- Make sure you're using Safari, not Chrome or another browser.
- The share button (box with arrow) is at the bottom of Safari on iPhone.

**Need help?** Come back to Claude and describe exactly what you see — Claude can help troubleshoot.

---

## IMPORTANT NOTES

- Your health data (food logs, profile, pantry) stays on your iPhone — it never leaves your device. Only when you use the AI coach or food parser does data get sent to Anthropic's servers (same as when you use Claude normally).
- The app resets the food log each new day automatically — each day starts fresh. Your profile and pantry are permanent.
- If you clear your Safari data/history, the food logs may be cleared. Your profile should survive.
- Estimated cost for typical daily use: $0.02–0.10/day depending on how much you use the AI features.

---

*App built by Claude for Sofia · Update instructions included above*
