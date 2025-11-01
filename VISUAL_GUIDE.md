# AqVerium Visual Guide

A visual walkthrough of the three key screens and their design elements.

---

## 🎨 Design System Overview

### Color Palette

```
Primary Colors:
- Cyan/Teal Gradient: #0891b2 → #14b8a6 (Trust & Water)
- Verified Green: #22c55e (Success & Approval)
- Warning Amber: #f59e0b (Attention)
- Trust Blue: #3b82f6 (Reliability)
- Danger Red: #ef4444 (Error)

Neutral Colors:
- Background: #f8fafc
- Cards: #ffffff
- Text: #0f172a
- Muted: #64748b
- Borders: #e2e8f0
```

### Typography

```
Font Family: Inter
Hero: 3.5rem / 700 weight
H1: 2.5rem / 700 weight
H2: 1.8rem / 700 weight
H3: 1.3rem / 600 weight
Body: 1rem / 400 weight
Small: 0.875rem / 400 weight
```

### Spacing Scale

```
0.5rem = 8px   (gap-1)
1rem   = 16px  (gap-2)
1.5rem = 24px  (gap-3)
2rem   = 32px  (gap-4)
```

---

## 📱 Screen 1: Project Verification Dashboard

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Header: "Project Verification Dashboard"           │
│ Subtitle + Stats Bar (4 metrics)                   │
├──────────────┬──────────────────────────────────────┤
│              │  Project Details Card                │
│  Project     │  ┌─────────────────────────────────┐│
│  List        │  │ Name + Badges + Score           ││
│  Sidebar     │  │ Key Metrics Grid                ││
│              │  └─────────────────────────────────┘│
│  ┌────────┐ │                                       │
│  │Project1│ │  Tabs: [History] [Data] [Audit]      │
│  │ ✓ 98%  │ │                                       │
│  └────────┘ │  ┌─────────────────────────────────┐│
│  ┌────────┐ │  │                                  ││
│  │Project2│ │  │  VERIFICATION TIMELINE           ││
│  │ ⏳      │ │  │                                  ││
│  └────────┘ │  │  ✓ Stage 1: Completed           ││
│              │  │  │ Details + Data                ││
│              │  │  ⏳ Stage 2: In Progress         ││
│              │  │  │ Auditor + Findings            ││
│              │  │  ○ Stage 3: Pending              ││
│              │  │  ○ Stage 4: Pending              ││
│              │  │                                  ││
│              │  └─────────────────────────────────┘│
└──────────────┴──────────────────────────────────────┘
```

### Key Visual Elements

#### Timeline Visualization
```
[●]───────────────────────  Stage 1: Initial Submission
 │                          ✅ Completed | 2023-11-15
 │  ┌─────────────────────────────────────┐
 │  │ Data: Water Saved, Area, Docs      │
 │  └─────────────────────────────────────┘
 │
[●]───────────────────────  Stage 2: Technical Review  
 │                          ✅ Completed | 2023-12-01
 │  ┌─────────────────────────────────────┐
 │  │ Auditor: Dr. Maria Santos          │
 │  │ Findings: Methodology approved      │
 │  │ Validation: ✓ ✓ ✓                  │
 │  └─────────────────────────────────────┘
 │
[●]───────────────────────  Stage 3: Field Audit
 │                          ✅ Completed | 2023-12-20
 │  ┌─────────────────────────────────────┐
 │  │ Auditor: EcoAudit International    │
 │  │ Measurements: +4% variance          │
 │  │ Photos: [3 attachments]             │
 │  └─────────────────────────────────────┘
 │
[●]───────────────────────  Stage 4: Final Verification
                            ✅ Completed | 2024-01-15
   ┌─────────────────────────────────────┐
   │ VERIFIED - 98% Score                │
   │ Certifications: ISO, Gold Standard   │
   │ Credits: 5000 issued                 │
   └─────────────────────────────────────┘
```

#### Color Coding
- **Green dots/borders**: Completed stages
- **Amber dots/borders**: In-progress stages  
- **Gray dots/borders**: Pending stages

#### Badge System
```
[✓ Verified]     - Green background
[⏳ In Review]   - Amber background
[📍 Region]      - Blue background
[Project Type]   - Light blue background
```

---

## 📊 Screen 2: Water Credit Trading Exchange

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Header: "Water Credit Exchange"                    │
│ Stats: [$72] [30K+] [94%] [245]                   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Price Chart (Line Graph - 7 months)               │
│  ┌─────────────────────────────────────────────┐  │
│  │     ╱╲                                       │  │
│  │    ╱  ╲  ╱╲                                 │  │
│  │   ╱    ╲╱  ╲  ╱                             │  │
│  │  ╱           ╲╱                              │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
├─────────────┬───────────────────────────────────────┤
│  Filters    │  Credit Listings                     │
│ ┌─────────┐ │                                      │
│ │Region   │ │  ┌─────────────────────────────┐   │
│ │[Dropdown│ │  │ Amazon Project      [$72]   │   │
│ │         │ │  │ [📍 S.America] [✓ Verified] │   │
│ │Type     │ │  │ 5000 available | 98% score   │   │
│ │[Dropdown│ │  │ [Buy] [Details]              │   │
│ │         │ │  └─────────────────────────────┘   │
│ │Score    │ │                                      │
│ │[Slider] │ │  ┌─────────────────────────────┐   │
│ │ ━━●━━━  │ │  │ Great Lakes      [$68]      │   │
│ │         │ │  │ [📍 N.America] [✓ Verified] │   │
│ │[Reset]  │ │  │ 3200 available | 95% score   │   │
│ └─────────┘ │  │ [Buy] [Details]              │   │
│             │  └─────────────────────────────┘   │
└─────────────┴───────────────────────────────────────┘
```

### Buy Modal (Two-Step)

```
┌──────────────────────────────────┐
│ Purchase Water Credits       [×] │
├──────────────────────────────────┤
│                                  │
│ 💡 Secure Transaction            │
│                                  │
│ Number of Credits:               │
│ [_____100_____]                  │
│ Available: 5,000 credits         │
│                                  │
│ ┌──────────────────────────────┐│
│ │ Price per credit:     $72    ││
│ │ Quantity:             100    ││
│ │ Subtotal:          $7,200    ││
│ │ ─────────────────────────────││
│ │ Platform Fee (2%):   $144    ││
│ │ ─────────────────────────────││
│ │ TOTAL:             $7,344    ││
│ └──────────────────────────────┘│
│                                  │
│ ✓ Verification Score: 98%        │
│                                  │
├──────────────────────────────────┤
│         [Cancel] [Confirm]        │
└──────────────────────────────────┘
```

### Visual Hierarchy

#### Price Display
```
┌─────────────┐
│             │
│    $72      │  ← Large, bold, gradient background
│  per credit │  ← Small, muted
│             │
└─────────────┘
```

#### Metrics Grid
```
┌──────────────┬──────────────┬──────────────┐
│ Available    │ Verification │ Last Audit   │
│ 5,000        │ 98%          │ 2024-01-15   │
└──────────────┴──────────────┴──────────────┘
```

---

## 📝 Screen 3: Project Submission (Step 3)

### Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Header: "Submit a New Project"                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Progress: [✓]━━━━[✓]━━━━[●]━━━━[ ]              │
│           Step1  Step2  Step3  Step4              │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Step 3: Upload Documentation                      │
│                                                     │
│  Progress: ████████░░ 80%                          │
│  4 of 5 required documents uploaded                │
│                                                     │
│  💡 Tips for successful submission...              │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │ 📄 Baseline Study          [Required]       │  │
│  │ Comprehensive study of water conditions     │  │
│  │ Formats: .pdf, .doc, .docx | Max: 10 MB    │  │
│  │                                              │  │
│  │ ✓ baseline_study.pdf (3.2 MB) [Remove]     │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │ 📄 Project Plan            [Required]       │  │
│  │ Implementation plan with timeline            │  │
│  │ Formats: .pdf, .doc, .docx | Max: 10 MB    │  │
│  │                                              │  │
│  │                          [Choose File]       │  │
│  │ ⚠️ This document is required                │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
│  [More documents...]                               │
│                                                     │
│  ┌─────────────────────────────────────────────┐  │
│  │ 📋 Document Checklist                        │  │
│  │ ✓ Baseline Study                             │  │
│  │ ○ Project Plan                 [Required]   │  │
│  │ ✓ Monitoring Protocol                        │  │
│  │ ✓ Community Consent                          │  │
│  │ ✓ Environmental Assessment   [Optional]     │  │
│  │ ○ Financial Plan             [Optional]     │  │
│  └─────────────────────────────────────────────┘  │
│                                                     │
├─────────────────────────────────────────────────────┤
│  [← Back]                    [Continue to Payment →]│
└─────────────────────────────────────────────────────┘
```

### Document Card States

#### Not Uploaded
```
┌───────────────────────────────────────────┐
│ 📄 Document Name        [Required]        │
│ Description of what's needed              │
│ Formats: .pdf | Max: 10 MB               │
│                          [Choose File]    │
└───────────────────────────────────────────┘
```

#### Uploaded (Green border)
```
┌═══════════════════════════════════════════┐
║ 📄 Document Name        [✓ Uploaded]      ║
║ Description of what's needed              ║
║ Formats: .pdf | Max: 10 MB               ║
║                                           ║
║ ┌─────────────────────────────────────┐  ║
║ │ 📄 filename.pdf (3.2 MB)  [Remove]  │  ║
║ └─────────────────────────────────────┘  ║
└═══════════════════════════════════════════┘
```

#### Error State (Red border)
```
┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
│ 📄 Document Name        [Required]        │
│ Description of what's needed              │
│ Formats: .pdf | Max: 10 MB               │
│                          [Choose File]    │
│ ┌─────────────────────────────────────┐  │
│ │ ⚠️ File size exceeds maximum        │  │
│ └─────────────────────────────────────┘  │
└╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
```

### Progress Indicator

```
Step 1          Step 2          Step 3          Step 4
  ✓               ✓               ●               ○
  ●━━━━━━━━━━━━━━●━━━━━━━━━━━━━━●━━━━━━━━━━━━━━○
Basic Info    Technical      Documentation    Payment
Completed     Completed      Current          Pending
```

---

## 🎨 Component Gallery

### Buttons

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Primary Btn  │  │Secondary Btn │  │ Success Btn  │
│  (Gradient)  │  │  (Gray)      │  │  (Green)     │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Badges

```
[✓ Verified]  [⏳ Pending]  [📍 Region]  [Required]
   Green         Amber         Blue        Red
```

### Cards

```
┌─────────────────────────────────┐
│  Card Title                      │ ← Bold, 1.3rem
│  ─────────────────────────────  │
│                                  │
│  Card content goes here with    │ ← Regular, 1rem
│  sufficient padding and spacing │
│                                  │
│  [Action Button]                 │
└─────────────────────────────────┘
     ↓ Hover: Lifts up 4px with enhanced shadow
```

### Stat Cards (Gradient)

```
┌═════════════════════════┐
║ Water Gradient          ║
║                         ║
║     2.4M+               ║ ← 2.5rem bold, white
║  Total Credits Traded   ║ ← 0.95rem, white 90%
║                         ║
└═════════════════════════┘
```

---

## 📐 Grid Layouts

### Desktop (3-column)
```
┌──────┐ ┌──────┐ ┌──────┐
│Card 1│ │Card 2│ │Card 3│
└──────┘ └──────┘ └──────┘
┌──────┐ ┌──────┐ ┌──────┐
│Card 4│ │Card 5│ │Card 6│
└──────┘ └──────┘ └──────┘
```

### Tablet (2-column)
```
┌──────┐ ┌──────┐
│Card 1│ │Card 2│
└──────┘ └──────┘
┌──────┐ ┌──────┐
│Card 3│ │Card 4│
└──────┘ └──────┘
```

### Mobile (1-column)
```
┌──────────┐
│  Card 1  │
└──────────┘
┌──────────┐
│  Card 2  │
└──────────┘
┌──────────┐
│  Card 3  │
└──────────┘
```

---

## 🎯 Icon System

### Emojis as Icons
```
💧 Water/Platform Identity
✓  Verified/Completed
⏳ Pending/In Progress
○  Not Started
📍 Location/Region
📄 Document
📊 Chart/Data
🔒 Security
💡 Information/Tip
⚠️ Warning/Error
🏢 Corporate
🌱 Project Developer
✓  Auditor
```

---

## 🌈 Animation & Transitions

### Hover Effects
```
Button: translateY(-2px) + enhanced shadow
Card:   translateY(-4px) + enhanced shadow
Tab:    color change + underline appear
```

### Progress Animations
```
Progress Bar Fill: width transition 0.3s ease
Loading Spinner:   rotate 360deg 1s infinite
Modal Overlay:     fade in 0.2s ease
```

---

## 📱 Responsive Patterns

### Navigation
```
Desktop:  Horizontal menu with all links
Tablet:   Horizontal menu (slightly compressed)
Mobile:   Hamburger menu (future enhancement)
```

### Sidebar Filters
```
Desktop:  Fixed sidebar (280px wide)
Tablet:   Collapsible sidebar
Mobile:   Overlay modal
```

### Data Tables
```
Desktop:  Full table with all columns
Tablet:   Scrollable with key columns
Mobile:   Card-based view
```

---

## 🎨 Design Tokens

```css
/* Colors */
--primary-blue: #0891b2;
--primary-dark: #0e7490;
--accent-teal: #14b8a6;
--verified-green: #22c55e;
--warning-amber: #f59e0b;
--danger-red: #ef4444;

/* Spacing */
--space-1: 0.5rem;   /* 8px */
--space-2: 1rem;     /* 16px */
--space-3: 1.5rem;   /* 24px */
--space-4: 2rem;     /* 32px */

/* Shadows */
--shadow-sm: 0 4px 20px rgba(15, 23, 42, 0.08);
--shadow-md: 0 8px 30px rgba(15, 23, 42, 0.12);
--shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.3);

/* Borders */
--border-radius: 1rem;
--border-color: #e2e8f0;
```

---

## 🎯 Key Takeaways

### Visual Hierarchy
1. **Hero elements** (prices, scores) are largest and bold
2. **Section titles** are clear and distinct
3. **Body text** is readable and appropriately sized
4. **Supporting info** is smaller and muted

### Trust Indicators
- ✓ Green = Verified/Approved/Safe
- 🔒 Lock = Secure/Protected
- 👤 Name = Accountability
- 🏆 Badge = Certified/Qualified

### User Guidance
- Progress bars show completion
- Badges indicate requirements
- Error messages provide solutions
- Tips offer proactive help

---

*This visual guide helps understand the design language and component usage across the platform.*
