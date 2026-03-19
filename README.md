# Playwright Enterprise Test Framework

End-to-end test automation framework built with Playwright and TypeScript.

This project demonstrates a scalable automation architecture used in modern QA teams, including Page Object Model, fixtures-based dependency injection, CI integration, visual testing, and Allure reporting.

---

## 🚀 Tech Stack

*   **Playwright** (E2E Testing)
*   **TypeScript** (Static Typing)
*   **Node.js** (Runtime Environment)
*   **Allure Reporting** (Advanced Reporting)
*   **GitHub Actions** (CI pipeline)
*   **Docker** (Environment Isolation)

---

## 🏗️ Framework Architecture

```
├── .github/workflows   # CI/CD pipeline (GitHub Actions)
├── fixtures/           # Custom fixtures & dependency injection
├── pages/              # Page Object Model (POM)
├── storage/            # Authentication state & session storage
├── tests/              # Test suites grouped by feature (auth, cart, inventory)
├── utils/              # Helper functions and global hooks
├── .gitignore          # Files and folders excluded from version control
├── package-lock.json   # Locked versions of dependencies for reproducibility
├── package.json        # Project dependencies and custom scripts
├── playwright.config.ts # Global framework configuration
└── Dockerfile          # Containerization for consistent test runs
```


Architecture follows best practices used in enterprise automation frameworks:

* Page Object Model
* Dependency Injection via Playwright Fixtures
* Externalized Test Data
* Parallel execution support
* Visual regression testing

---

## 🧪 Test Types

This framework includes several types of automated tests:

* **Smoke tests** – critical functionality checks
* **Regression tests** – full functional coverage
* **Visual tests** – UI layout verification

---

## ⚙️ Installation

Clone repository:

```bash
git clone <>
cd playwright-enterprise-framework
```

Install dependencies:
```bash
npm install
```
Install browsers:
```bash
npx playwright install
```

---

## ▶️ Running Tests

**Run all tests:**

```bash
npx playwright test
```
**Run smoke tests only:**

```bash
npx playwright test --grep @smoke
```

**Run visual tests:**
```bash
npx playwright test --grep @visual
```

---

## 📊 Reporting

**Generate Allure report:**
```bash
allure generate allure-results --clean
allure open
```

Playwright HTML report is also generated automatically.

---

## 🔁 CI Pipeline

Tests run automatically using **GitHub Actions** on every push.

CI includes:

* dependency installation
* Playwright browser setup
* automated test execution
* artifact upload (reports)

---

## 📦 Docker Support

Framework can be executed inside Docker:

```bash
docker build -t playwright-tests .
docker run playwright-tests
```

---

## 📚 Key Features

* Page Object Model architecture
* Playwright fixtures for dependency injection
* Parallel test execution
* Storage state authentication
* Visual regression testing
* Hybrid API + UI testing
* CI/CD integration

---

## 👩‍💻 Author

**Nikola Hodásová** QA Automation Engineer (Junior), QA Automation Tester (Junior)
