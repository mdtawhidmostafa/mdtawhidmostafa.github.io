# GitHub Pages-এ Portfolio Live করার সহজ নিয়ম

1. GitHub-এ login করুন।
2. আপনার বর্তমান GitHub username যদি `mdtawhidmostafa` হয়, নতুন public repository বানান: `mdtawhidmostafa.github.io`
3. এই folder-এর ভেতরের সব file (`index.html`, `styles.css`, `script.js`, `404.html`, `assets` folder) repository-এর root-এ upload করুন।
4. Commit করুন।
5. Repository → **Settings → Pages** এ যান।
6. Source হিসেবে **Deploy from a branch** দিন।
7. Branch: `main`, Folder: `/ (root)` select করে Save করুন।
8. কিছুক্ষণ পর site হবে: `https://mdtawhidmostafa.github.io/`

## `tawhid-mostafa.github.io` URL চাইলে

GitHub Pages-এর user-site URL GitHub username-এর উপর নির্ভর করে। তাই `https://tawhid-mostafa.github.io/` পেতে GitHub user/organization-এর নাম `tawhid-mostafa` হতে হবে এবং repository-এর নাম `tawhid-mostafa.github.io` হতে হবে।

## গুরুত্বপূর্ণ

- `index.html` অবশ্যই repository root-এ থাকবে।
- `assets` folder-এর নাম/লোকেশন পরিবর্তন করবেন না, না হলে profile image ও resume link ভেঙে যাবে।
- Site static; কোনো server/database লাগবে না।
