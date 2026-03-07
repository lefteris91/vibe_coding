# Hot Stuff Dance Dashboard - Project Plan

## 1. Project Overview

**Project Name:** Hot Stuff Dance Dashboard  
**Website:** https://hotstuffdance.com  
**Purpose:** A user-friendly dashboard for members to access purchased videos, manage subscriptions, and premium users to submit videos for feedback.

### Current Site Context
- **Platform:** WordPress with Elementor, Jet Engine, Jet FormBuilder, WooCommerce, Paid Membership Pro
- **Products:** Dance videos (choreographies, warm-ups, stretching, workouts)
- **Pricing Model:**
  - Single video purchases (WooCommerce)
  - Subscriptions: Basic (€18.90-24.90/mo) and Premium (€36.90-44.90/mo)
  - Premium benefit: Submit videos for personalized feedback

---

## 2. Technical Stack

### Frontend
- **Framework:** Nuxt.js 3
- **Styling:** Tailwind CSS (via Nuxt UI)
- **State Management:** Pinia
- **UI Components:** Nuxt UI (https://ui.nuxt.com/)

### Backend Integration
- **WordPress REST API:** Primary data source
- **WooCommerce API:** Orders, products
- **Paid Membership Pro API:** Subscriptions, membership levels
- **Jet Engine API:** Custom post types (videos, submissions, reviews)
- **Authentication:** JWT Authentication for WP REST API

---

## 3. Features Specification

### Feature 1: Login Page (`/login`)

**Description:** Secure authentication page for existing users.

**UI Components:**
- Logo display
- Email input field
- Password input field
- "Remember me" checkbox
- "Sign In" button
- "Forgot password?" link

**Functionality:**
- Validate credentials against WordPress JWT API
- Store JWT token in secure HTTP-only cookie
- Redirect to videos page on success
- Display error messages for invalid credentials

---

### Feature 2: Video Library (`/videos`)

**Description:** Display all videos the user has access to (purchased or included in subscription).

**UI Components:**
- Page header with title "My Videos"
- Search input
- Category filter dropdown
- Video grid (responsive)
- Video card: thumbnail, title, duration, category badge

**Functionality:**
- Fetch accessible videos based on subscription or purchases
- Filter by category
- Search by title
- Click to navigate to video player

---

### Feature 3: Video Player (`/videos/[id]`)

**Description:** Full video playback page with related information.

**UI Components:**
- Back button
- Video player (full-width)
- Video title, instructor, duration, category
- Description text
- Related videos section

---

### Feature 4: Settings Page (`/settings`)

**Description:** User profile and account settings management.

**UI Components:**
- Tab navigation: Profile | Account
- Profile: Avatar, display name, bio
- Account: Email, password change

**Functionality:**
- Update user profile via WordPress API
- Change password

---

### Feature 5: Billing Page (`/billing`)

**Description:** Display order history and payment information.

**UI Components:**
- Page header: "Order History"
- Orders table: Order #, Date, Status, Amount, Actions

**Functionality:**
- Fetch all orders for current user from WooCommerce
- Display order status with color coding

---

### Feature 6: Subscription Management (`/subscription`)

**Description:** View and manage Paid Membership Pro subscription.

**UI Components:**
- Current plan card with status, billing date, amount
- Available plans grid
- Cancel subscription button

**Functionality:**
- Display current subscription from PMPro
- Show available subscription tiers

---

### Feature 7: Premium Video Submission (`/premium`)

**Description:** Premium users can submit videos for feedback.

**Sub-pages:**
- **Submit Video (`/premium/submit`):** Upload form with drag & drop
- **Reviews Dashboard (`/premium/reviews`):** List of submissions with status
- **Chat Thread:** Reply to instructor feedback

---

## 4. API Integration

### WordPress REST API Base URL
```
https://hotstuffdance.com/wp-json/
```

### Endpoints Mapping

| Feature | Nuxt API | WordPress API |
|---------|----------|---------------|
| Login | `/api/auth/login` | POST `/jwt-auth/v1/token` |
| Get User | `/api/user/me` | GET `/wp/v2/users/me` |
| Videos | `/api/videos` | GET `/wp/v2/{cpt}` |
| Orders | `/api/orders` | GET `/wc/v3/orders` |
| Subscription | `/api/subscription` | GET `/pmpro/v1/membership_level` |
| Submit Video | `/api/reviews/submit` | POST `/jet-engine/v2/add-item` |

---

## 5. WordPress Backend Requirements

### Required Plugins
1. **JWT Authentication for WP REST API**
2. **Jet Engine Configuration** for video submissions

---

## 6. Implementation Phases

### Phase 1: Project Setup
- [x] Create Nuxt project
- [x] Install dependencies (Nuxt UI, Pinia)
- [ ] Configure Nuxt config
- [ ] Set up Pinia stores

### Phase 2: Authentication
- [ ] Build login page
- [ ] Implement JWT auth flow
- [ ] Create auth middleware

### Phase 3: Core Features
- [ ] Video library page
- [ ] Video player page
- [ ] Settings page

### Phase 4: Commerce Features
- [ ] Billing/orders page
- [ ] Subscription management page

### Phase 5: Premium Features
- [ ] Video submission form
- [ ] Reviews dashboard
- [ ] Chat functionality

---

## 7. Acceptance Criteria

- [ ] Users can log in with WordPress credentials
- [ ] Users see only videos they have access to
- [ ] Videos play correctly in player
- [ ] Users can update profile information
- [ ] Users can view order history
- [ ] Users can view and manage subscription
- [ ] Premium users can submit videos
- [ ] Premium users can view and reply to reviews
- [ ] Dashboard is fully responsive
