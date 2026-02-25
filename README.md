# Fluid

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite 7.3](https://img.shields.io/badge/Vite-7.3-646CFF?style=flat-square&logo=vite)
![Tailwind 4](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)

> **FL**orent **UI** **D**eborde — A high-performance, accessible, and elegant React 19 component library.

## 📑 Table of Contents

- [🎯 Features](#-features)
- [💻 Installation](#-installation)
- [🎨 Styling & Encapsulation](#-styling--encapsulation)
- [🔧 Environment Configuration](#-environment-configuration)
- [📂 Project Structure](#️-project-structure)
- [🧱 Tech Stack](#-tech-stack)
- [🗺️ Roadmap & Future Evolutions](#️-roadmap--future-evolutions)
- [📜 License](#-license)

## 🎯 Features
**Fluid** is a professional design system focused on speed, modularity, and accessibility. Built for the modern web, it leverages the power of **React 19** and **Vite 7.3** to provide a seamless development experience.

- **Atomic Design**: Small, reusable, and composable primitives.
- **Headless**: Powered by Radix UI for top-tier accessibility.
- **Modern Styling**: Built with Tailwind CSS 4 for lightning-fast builds.
- **Zero Overhead**: Minimal footprint with tree-shaking support.

## 💻 Installation
```npm install @florentdeborde/fluid```

## 🎨 Styling & Encapsulation

**Fluid** uses **Tailwind CSS v4** with a strict encapsulation strategy. To avoid conflicts with other CSS on your page, all Tailwind utility classes in this library are prefixed with `fluid:`.

### Rule of the Prefix
If you want to override or extend styles via `className`, you **must** use the `fluid:` prefix for any Tailwind utility:

```tsx
// ❌ Won't work (ignored by the library engine)
<Button className="bg-red-500">Click me</Button>

// ✅ Correct usage
<Button className="fluid:bg-red-500">Click me</Button>
```

### Variants Ordering
When using variants like `hover`, `focus`, or `dark`, the `fluid:` prefix must always come **first**:

- ✅ `fluid:hover:bg-blue-700`
- ✅ `fluid:dark:bg-neutral-800`
- ❌ `hover:fluid:bg-blue-700`

### CSS Import
To use the library styles, import the CSS file in your main entry point:

```tsx
import "@florentdeborde/fluid/style.css";
```

## 🔧 Environment Configuration

To start contributing or customizing the library locally:

1. **Clone the repository**
```git clone https://github.com/florentdeborde/fluid.git```

2. **Install dependencies**
```npm install```

3. **Start development server**
```npm run dev```

4. **Build the library**
```npm run build```

## 📂 Project Structure

- **src/components/**: UI components (Button, Input, Grid, etc.)
- **src/index.ts**: Main library entry point
- **src/index.css**: Global Tailwind 4 directives

## 🧱 Tech Stack

- **React 19** (`react`, `react-dom`) — Core framework utilizing the latest features and hooks.
- **Vite 7** — High-performance build tool and development server.
- **TypeScript 5.9** — Strong static typing for a robust developer experience.
- **Tailwind CSS 4** — Next-generation CSS engine for lightning-fast styling.
- **Radix UI** — Unstyled, accessible primitives for high-quality UI foundations.
- **Lucide React** — Clean and consistent iconography.
- **Class Variance Authority (CVA)** — Efficient management of component variants and states.
- **Vite Plugin DTS** — Automated generation of TypeScript declaration files.

## 🗺️ Roadmap & Future Evolutions

- [ ] **Core Components**:
  - [x] Implement a polymorphic `Button` using Radix Slot.
  - [x] Build responsive `Shell` (PageLayout) with advanced custom props.
  - [ ] Develop accessible `Input` components with validation states.
  - [ ] Build responsive `Grid` and `Stack` layout systems.
- [x] **Documentation**:
  - [x] Setup **Storybook 10** for interactive component documentation and testing.
  - [x] Integrate comprehensive JSDoc comments for all component properties.
- [ ] **Quality Assurance**:
  - [ ] Reach 100% unit test coverage for core component logic.
  - [ ] Implement **Visual Regression Testing** to ensure UI consistency.
- [ ] **Distribution & CI/CD**:
  - [ ] Automate NPM publishing via GitHub Actions.
  - [ ] Support for native Dark/Light mode out of the box.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.