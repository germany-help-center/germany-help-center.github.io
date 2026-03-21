# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This repository is configured to deploy automatically to GitHub Pages.

### Publish to GitHub Pages

1. Push changes to the `main` branch.
2. Open the repository Settings page on GitHub.
3. Go to Pages.
4. Set Source to `GitHub Actions`.
5. The workflow in `.github/workflows/deploy-pages.yml` will build and publish the `dist` folder automatically.

Expected GitHub Pages URL for this repository:

- `https://germanyhelpcenter.com/germany-helpcenter/`

## Can I connect a custom domain to my Lovable project?

Yes, you can!

### Connect a custom domain on GitHub Pages

1. Open the repository Settings page on GitHub.
2. Go to Pages.
3. Enter your domain in the Custom domain field.
4. Add the required DNS records with your domain provider.

Typical DNS setup:

- For a subdomain like `www.example.com`, create a `CNAME` record pointing to `germany-help-center.github.io`.
- For an apex domain like `example.com`, create `A` or `ALIAS/ANAME` records using GitHub Pages guidance.

After DNS is configured:

1. Enable `Enforce HTTPS` in the GitHub Pages settings.
2. Wait for GitHub Pages to finish certificate provisioning.
3. If you want the custom domain stored in the repo, add a `public/CNAME` file containing only your domain name.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
