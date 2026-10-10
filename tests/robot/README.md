# Robot Framework + SeleniumLibrary Tests

Five simple UI tests for the portfolio landing page (`/` route, `BentoGridDesignPage`).
They use **SeleniumLibrary + Selenium WebDriver + Google Chrome**.
Selenium 4's built-in **Selenium Manager** downloads the matching ChromeDriver
automatically, so no `webdriver-manager` is needed.

## The 5 tests
1. **Landing Page Loads** – the project panel is visible.
2. **Next Project Button Works** – counter changes from `1` to `2`.
3. **Previous Project Button Works** – counter returns to `1`.
4. **Project Filter Works** – the "AI & Machine Learning" filter becomes selected (`aria-pressed="true"`).
5. **View Details Button Works** – the details panel opens.

## One-time setup (from the project root)
```powershell
# Create a Python virtual environment
python -m venv .venv

# Activate it (PowerShell)
.\.venv\Scripts\Activate.ps1

# Install dependencies
pip install -r tests\robot\requirements.txt
```

## Running the tests
1. Start the app in one terminal:
   ```powershell
   npm run dev
   ```
2. In another terminal (with `.venv` activated), run:
   ```powershell
   robot --outputdir tests\robot\reports tests\robot\portfolio_tests.robot
   ```

## Where to find results
After a run, open these files in `tests/robot/reports/`:
- `report.html` – high-level pass/fail summary
- `log.html` – detailed step-by-step log
- `output.xml` – raw results (machine readable)
- `selenium-screenshot-*.png` – screenshots captured automatically when a test fails
