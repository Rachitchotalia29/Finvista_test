# AqVerium - Key Screens Overview

This document provides a quick reference for the three core screens built for the hackathon.

---

## 1. Project Verification Dashboard
**Route**: `/verification`  
**File**: `frontend/src/pages/VerificationPage.jsx`

### Purpose
Build buyer confidence through complete transparency into the verification process.

### Key Components

#### Left Sidebar - Project Selection
- List of all projects with status badges
- Click to select and view details
- Color-coded: Verified (green) vs In Review (amber)
- Shows verification score for completed projects

#### Main Content - Project Details
**Header Section**:
- Project name and region
- Verification status badge
- Verification score (large, prominent display)
- Key metadata: Developer, submission date, verified date

**Tabbed Interface**:
1. **Verification History Tab** (Main Feature)
   - Visual timeline with color-coded stages
   - Four verification stages:
     - Initial Submission
     - Technical Review
     - Field Audit
     - Final Verification
   - Each stage shows:
     - Status indicator (✓ completed, ⏳ in-progress, ○ pending)
     - Date and auditor name
     - Detailed findings
     - Supporting data (measurements, photos, certifications)
     - Requested information (if pending)

2. **Original Data Tab**
   - Submitted project information before audits
   - Baseline study data
   - Methodology and metrics

3. **Audit Results Tab**
   - Summary of all audit findings
   - Auditor credentials
   - Final verification results

### Trust-Building Features
- Named auditors with credentials
- Exact timestamps for all activities
- Third-party certification badges (ISO, Gold Standard, UN SDG)
- Detailed data validation indicators
- Side-by-side comparison capability

### Mock Data
- Amazon Rainforest project (fully verified, 98% score)
- Mekong River project (in review, pending field audit)

---

## 2. Water Credit Trading Exchange/Marketplace
**Route**: `/marketplace`  
**File**: `frontend/src/pages/MarketplacePage.jsx`

### Purpose
Enable efficient, confident trading with real-time data and transparent pricing.

### Key Components

#### Statistics Bar (Top)
- Current average price: $72
- Total available credits: 30K+
- Average verification score: 94%
- Monthly trade volume: 245 trades

#### Price Chart
- Line chart showing 7-month price history
- Built with Recharts (responsive)
- Visual trend analysis
- Price range: $45 - $72

#### Left Sidebar - Filters
**Filter Options**:
- Region dropdown (Africa, Asia, Europe, Americas)
- Project type dropdown (Conservation, Restoration, etc.)
- Verification score slider (0-100%)
- Reset filters button

**Features**:
- Sticky positioning (stays visible while scrolling)
- Real-time filtering
- Visual feedback on active filters

#### Main Content - Credit Listings
**Credit Cards Display**:
- Large, clear pricing ($72 per credit)
- Project name and description
- Badges: Region, Type, Verified status
- Key metrics grid:
  - Available credits
  - Verification score (green highlight)
  - Last audit date
- Project developer name
- Action buttons:
  - "Buy Credits" (primary, opens modal)
  - "View Details" (secondary)

**Hover Effects**:
- Cards lift on hover
- Enhanced shadow
- Smooth transitions

#### Buy Modal (Two-Step Purchase)
**Step 1 - Quantity Selection**:
- Number input with validation
- Shows available quantity
- Live total calculation
- Platform fee disclosure (2%)
- Detailed cost breakdown

**Step 2 - Confirmation**:
- Summary of purchase
- Security indicators (encryption, blockchain)
- Verification score reminder
- Confirm/Cancel buttons

### Mock Data
- 6 diverse water credit projects
- Regions: South America, North America, Asia, Africa, Europe
- Price range: $48 - $78
- Verification scores: 89% - 98%

---

## 3. Project Submission Flow (Step 3: Documentation)
**Route**: `/submit-project`  
**File**: `frontend/src/pages/SubmitProjectPage.jsx`

### Purpose
Achieve high submission completion rates through guided, non-intimidating workflow.

### Key Components

#### Progress Indicator (Top)
- 4-step linear progress bar
- Animated fill showing completion
- Steps:
  1. Basic Information
  2. Technical Data
  3. **Documentation** ← Featured step
  4. Payment & Review
- Current step highlighted with gradient
- Completed steps show checkmarks

#### Step 3: Documentation Upload

**Upload Progress Section**:
- Progress bar showing % of required docs uploaded
- Text indicator: "X of Y required documents uploaded"
- Visual motivation to complete

**Helpful Tips Alert**:
- Info box with submission tips
- Best practices for documents
- Format recommendations
- File size guidance

**Document Upload Cards**:
Each document card includes:
- Document name (bold, clear)
- Required/Optional badge (color-coded)
- Description of what's needed
- Accepted formats (.pdf, .doc, .docx)
- Maximum file size (5-10 MB)
- Upload button or uploaded file display

**Six Documents**:
1. ✅ Baseline Study (Required)
2. ✅ Project Plan (Required)
3. ✅ Monitoring Protocol (Required)
4. ✅ Community Consent Forms (Required)
5. ⚪ Environmental Impact Assessment (Optional)
6. ⚪ Financial Plan (Optional)

**Upload States**:
- **Not uploaded**: Default state, "Choose File" button
- **Uploaded**: Green border, file name, size, "Remove" button
- **Error**: Red border, error message, corrective guidance

**Validation**:
- File size validation (real-time)
- Format checking
- Required document enforcement
- Prevents navigation without required docs

**Document Checklist Sidebar**:
- Visual checklist of all documents
- Checkmark indicator for uploaded files
- Required label for mandatory documents
- Quick scan of completion status

**Navigation**:
- "← Back" button (returns to Step 2)
- "Continue to Payment →" button
  - Disabled if required docs missing
  - Shows validation errors

### Error Handling
- File size exceeds limit: Clear error message
- Missing required documents: Inline alerts
- Invalid format: Format specification reminder
- Progressive disclosure: Errors shown contextually

### UX Features
- Visual feedback on every action
- Progress motivation (percentage and checklist)
- Clear labeling (Required vs Optional)
- Non-intimidating interface
- Error prevention over error correction

---

## Common Design Patterns Across All Screens

### Trust Indicators
- ✓ Verification badges
- 🔒 Security icons
- 👤 Named auditors/experts
- 📊 Transparent data display
- 🏆 Third-party certifications

### Color Coding
- **Green**: Verified, completed, success
- **Amber**: Pending, in-progress, warning
- **Red**: Error, rejected, required attention
- **Blue**: Information, primary actions
- **Gray**: Neutral, optional, inactive

### Card Design
- White background with subtle shadow
- Rounded corners (1rem)
- Border changes color based on state
- Hover effects on interactive cards
- Consistent padding and spacing

### Typography Hierarchy
- Hero: 2.5rem bold (page titles)
- Section: 1.5-1.8rem bold
- Card title: 1.1-1.3rem bold
- Body: 1rem regular
- Supporting: 0.875rem muted color

### Responsive Behavior
- Desktop: Multi-column layouts
- Tablet: 2-column grids
- Mobile: Single column stacks
- Sticky navigation and sidebars
- Touch-friendly button sizes

### Accessibility
- High contrast ratios
- Clear focus states
- Semantic HTML
- Keyboard navigation
- Screen reader friendly structure

---

## Navigation Flow

### Unauthenticated Users
```
Landing Page → Marketplace (browse only)
           → Login/Signup
```

### Authenticated Users
```
Landing Page → Marketplace (with purchase capability)
           → Verification Dashboard (audit history)
           → Submit Project (wizard flow)
           → Dashboard (user overview)
```

### Quick Access
- Navbar provides instant access to all main sections
- Active page highlighted with underline
- Sticky positioning keeps nav always visible

---

## Technical Implementation Notes

### Data Flow
- Mock data defined in component files
- State management with React useState
- Props for component communication
- Context API for authentication

### Charts
- Recharts library for data visualization
- Responsive containers for mobile
- Custom styling to match theme
- Tooltip and legend for data clarity

### Modals
- Portal-style overlay
- Click outside to close
- Prevent background scroll
- Smooth animations

### File Upload
- HTML file input (hidden)
- Custom styled label as button
- FileReader API for processing
- Size and format validation

---

## Success Metrics Alignment

### Verification Dashboard
- **Metric**: Time to assess credit integrity
- **Target**: < 1 minute
- **Features**: Timeline view, tabs, clear badges

### Marketplace
- **Metric**: Transaction success rate
- **Target**: > 85%
- **Features**: Clear pricing, two-step confirmation, cost transparency

### Project Submission
- **Metric**: Form completion rate
- **Target**: > 70%
- **Features**: Progress indicator, validation, error prevention

---

## Future Enhancement Opportunities

1. **Verification Dashboard**
   - Live audit status updates
   - Chat with auditors
   - Document download capability
   - Comparison mode (side-by-side)

2. **Marketplace**
   - Advanced charts (candlestick, volume)
   - Saved searches and alerts
   - Bulk purchase discounts
   - Portfolio management

3. **Project Submission**
   - Auto-save progress
   - Document templates
   - AI-powered validation
   - Multi-user collaboration

---

**Document Version**: 1.0  
**Last Updated**: 2024  
**Author**: AqVerium Development Team
