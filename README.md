# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/87e58db8-93df-4820-8ad6-1e02bca2df7d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/87e58db8-93df-4820-8ad6-1e02bca2df7d) and start prompting.

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

Simply open [Lovable](https://lovable.dev/projects/87e58db8-93df-4820-8ad6-1e02bca2df7d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Deep Linking & QR Codes

### Salon Deep Links

The website supports deep linking to salons via QR codes. When users scan a QR code pointing to:

```
https://slixoapp.com/salon/{salonId}
```

The behavior is:
1. **App installed**: Opens the Slixo app directly to the salon page using the `slixo://salon/{salonId}` deep link
2. **App not installed**: After a 2.5s timeout, shows a fallback page with download buttons for App Store/Google Play based on the user's device

### Implementation Details

- **Route**: `/salon/:salonId` handled by `SalonRedirect.tsx`
- **Deep link scheme**: `slixo://salon/{salonId}`
- **Platform detection**: Automatically detects iOS/Android and shows appropriate store
- **Fallback**: If deep link fails, user is prompted to download the app

### Testing Deep Links

**On Mobile (with app installed)**:
- Visit `https://slixoapp.com/#/salon/123` 
- App should open immediately

**On Mobile (without app)**:
- Visit `https://slixoapp.com/#/salon/123`
- After 2.5s, see download prompt

**Desktop**:
- Visit `https://slixoapp.com/#/salon/123`
- Shows download page with App Store link

### Store Links Configuration

Store URLs are centralized in `src/lib/store-links.ts`:
- `APP_STORE_URL`: Apple App Store listing
- `PLAY_STORE_URL`: Google Play Store listing (update when published)
- `DEEP_LINK_SCHEME`: The URL scheme the mobile app registers (`slixo://`)

Update these constants when store listings change or when launching on new platforms.
