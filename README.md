# 🎬 _TANND // INTERACTIVE VIDEO EDITOR & DEVELOPER PORTFOLIO

> **REC** | An immersive, high-fidelity interactive developer and video editor portfolio built with **Next.js**, **Framer Motion**, and **Tailwind CSS**. 

This portfolio features a **Dual-Mode Workspace** allowing users to switch between a **Fullstack Developer** profile and a fully simulated, interactive **Video Post-Production Suite**.

---

## ⚡ DUAL-MODE EXPERIENCE

- **🎨 Editor Mode (Default):** A simulated video editor suite (NLE) that puts the client inside a post-production environment. 
- **💻 Developer Mode:** A clean, minimal developer portfolio highlighting full-stack engineering projects, technical blogs, and web skills.

---

## 🛠️ INTERACTIVE POST-PRO LAB FEATURES

### 1. 🎞️ NLE Timeline Editor
An interactive drag-and-drop timeline track:
- **Continuous Loop playback:** Simulate live cutting, trimming, and track overlays (A1/A2 tracks).
- **Edit Simulation:** Drag clips across tracks to trigger video-reordering logic modeled after real desktop editor workflows.

### 2. 🌀 Motion Graphics (Graph Editor)
A simulated keyframe curve editor:
- **Cubic Bezier Trajectory:** A keyframe indicator dot that accurately rides an SVG Bezier curve trajectory.
- **Live Compview Preview:** A multi-layered visual composition translating vertically, scaling, and rotating in perfect sync with the curve.
- **Onion-Skin Motion Path:** Dash-dotted trail points showing speed acceleration (dense at ends for ease, sparse in the middle for speed).

### 3. 🎨 Color Grading Wheels & RGB Parade
A digital colorist grading panel:
- **Color Wheels:** Interactive 3-way color controllers (Lift, Gamma, Gain) and sliders (Exposure, Contrast, Saturation).
- **Live Parade Scopes:** An animated RGB Parade scope that dynamically translates and scales height coordinates in response to your grading values.
- **Node Graph:** A multi-node compositor workflow showing real color preview images.

### 4. 🎚️ Fairlight Multitrack Audio Mixer
A multitrack audio fader desk:
- **Fader Sliders:** Drag faders from `-60 dB` to `+6 dB` to adjust track volume.
- **Solo & Mute logic:** Functional **S (Solo)** and **M (Mute)** toggles that automatically flatline silent tracks.
- **Bouncing Visualizers:** Audio waveform graphs that scale their heights to reflect real-time volume faders.

### 5. 🖥️ Responsive Camera HUD & Workstation
- **Responsive Resolution Detector:** A top metadata bar that reads screen widths and updates camera resolutions:
  - *Mobile:* `1080 × 1920 (9:16)` (Vertical formats)
  - *Tablet:* `2048 × 1536 (4:3)`
  - *Desktop/PC:* `1920 × 1080 (16:9)`
- **Workstation Software Dock:** Floating animated launch dock custom-built for your specific toolchain: **After Effects, Premiere Pro, Photoshop, Illustrator, Media Encoder, and CapCut**.

---

## 📦 TECH STACK

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (60 FPS hardware-accelerated loops)
- **Styling:** Tailwind CSS & Vanilla CSS Variables
- **Icons:** Lucide React & Custom SVG Vector glyphs

---

## 🚀 GETTING STARTED

First, install the package dependencies:

```bash
npm install
# or
yarn install
```

Next, run the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the workstation.

---

## 🏗️ PRODUCTION BUILD & DEPLOYMENT

To build the production bundle:

```bash
npm run build
```

The easiest way to host your portfolio is to connect your GitHub repository directly to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) for automated Git-push deployments.

---

*Crafted with 🧡 by **_tannd** / Remote*
