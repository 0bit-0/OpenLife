# How to Git (Quick Guide)

This guide covers the common Git and GitHub actions: setup, clone, branch, commit, push, pull, and sync.

## 1) Initial setup (one time)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 2) Clone a repo

```bash
git clone https://github.com/OWNER/REPO.git
cd REPO
```

## 3) Create a branch for your work

```bash
git checkout -b feature/short-description
```

## 4) Check status

```bash
git status
```

## 5) Stage and commit

```bash
git add .
git commit -m "Add: short description"
```

## 6) Push your branch to GitHub

```bash
git push origin feature/short-description
```

## 7) Pull latest changes from main

```bash
git checkout main
git pull origin main
```

## 8) Sync your branch with main

```bash
git checkout feature/short-description
git merge main
```

## 9) Open a pull request

Push your branch, then open GitHub and create a PR from your branch into `main`.

## 10) Common fixes

### Undo last commit (keep changes)

```bash
git reset --soft HEAD~1
```

### Unstage a file

```bash
git restore --staged path/to/file
```

### Discard local changes in a file

```bash
git restore path/to/file
```

## 11) Helpful commands

```bash
git log --oneline --graph --decorate -n 10
git branch -a
git fetch --all --prune
```






git add .
git commit -m "Describe the change"


git add "path/to/file1"
git add "path/to/file2"
git commit -m "Describe the change"


git checkout main

git git branch --show-current


git push origin main


git fetch origin
git checkout main
git pull origin main


This below commands for main branch owner only @bhupindersehjal

# 1️⃣ Go to your project folder
cd your-project

# 2️⃣ Switch to main branch
git checkout main

# 3️⃣ Pull latest changes from remote main
git pull origin main

# 4️⃣ Create a new feature branch from main
git checkout -b feature/help-bot

# 5️⃣ Check current branch and file status
git status

# 6️⃣ Add specific files (recommended)
git add src/components/HelpBot.jsx

# OR add all changed files
git add .

# 7️⃣ Commit changes with a clear message
git commit -m "feat: add help bot component"

# 8️⃣ Push the new branch to GitHub (first time)
git push -u origin feature/help-bot

👉 Now go to GitHub → Click “Compare & pull request” → Create PR → Merge

 
✅ After PR Is Merged (Cleanup Commands)
# 9️⃣ Switch back to main branch
git checkout main

# 🔟 Pull the merged changes
git pull origin main

# 1️⃣1️⃣ Delete local feature branch
git branch -d feature/help-bot

# 1️⃣2️⃣ Delete remote feature branch
git push origin --delete feature/help-bot


🔁 If You Update Code After Creating PR
# Make changes
git add .
git commit -m "fix: improve help bot UI"

# Push again (PR updates automatically)
git push
