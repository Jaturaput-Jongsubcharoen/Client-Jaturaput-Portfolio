*** Settings ***
Documentation    Five beginner-friendly UI tests for the portfolio landing page ("/" route),
...              which renders the BentoGridDesignPage component.
...              Tests use SeleniumLibrary + Selenium WebDriver with Google Chrome.
...              Selenium 4's built-in "Selenium Manager" downloads ChromeDriver automatically.

Library          SeleniumLibrary

# Runs before EVERY test: open a fresh Chrome window on the landing page.
Test Setup       Open Portfolio In Chrome
# Runs after EVERY test: close the browser so each test stays independent.
Test Teardown    Close Browser


*** Variables ***
# Local URL of the running portfolio (Vite dev server default port is 5173).
${URL}              http://localhost:5173/
${BROWSER}          chrome

# CSS/XPath selectors taken directly from the existing React components.
${PROJECT_PANEL}    css:.project-panel
${NEXT_BUTTON}      css:.project-panel__arrow--right
${PREV_BUTTON}      css:.project-panel__arrow--left
${PAGER}            css:.project-panel__pager
${DETAILS_BUTTON}   css:.project-panel__details-btn
${DETAILS_PANEL}    css:.detail-panel.is-open
# The "AI & Machine Learning" filter button (matched by its visible text).
${AI_FILTER}        xpath=//button[contains(@class,'project-panel__filter-btn') and normalize-space()='AI & Machine Learning']


*** Test Cases ***
Landing Page Loads
    [Documentation]    Opens the portfolio and checks that the project panel is visible.
    # Wait until the main project panel appears on screen.
    Wait Until Element Is Visible    ${PROJECT_PANEL}

Next Project Button Works
    [Documentation]    Clicking the Next arrow should change the counter from 1 to 2.
    # Make sure the counter starts at project 1.
    Wait Until Element Contains    ${PAGER}    1 /
    # Click the Next (right) arrow.
    Click Element    ${NEXT_BUTTON}
    # The counter should now show project 2.
    Wait Until Element Contains    ${PAGER}    2 /

Previous Project Button Works
    [Documentation]    Click Next, then Previous, and the counter should return to 1.
    Wait Until Element Contains    ${PAGER}    1 /
    # Go forward to project 2.
    Click Element    ${NEXT_BUTTON}
    Wait Until Element Contains    ${PAGER}    2 /
    # Go back to project 1.
    Click Element    ${PREV_BUTTON}
    Wait Until Element Contains    ${PAGER}    1 /

Project Filter Works
    [Documentation]    Clicking the "AI & Machine Learning" filter should select it.
    # Click the AI & Machine Learning filter button.
    Wait Until Element Is Visible    ${AI_FILTER}
    Click Element    ${AI_FILTER}
    # The selected filter sets aria-pressed="true" (existing attribute in the component).
    Element Attribute Value Should Be    ${AI_FILTER}    aria-pressed    true

View Details Button Works
    [Documentation]    Clicking "View Details" should open the details panel.
    # Click the View Details button.
    Wait Until Element Is Visible    ${DETAILS_BUTTON}
    Click Element    ${DETAILS_BUTTON}
    # The details panel gets the "is-open" class and becomes visible.
    Wait Until Element Is Visible    ${DETAILS_PANEL}


*** Keywords ***
Open Portfolio In Chrome
    [Documentation]    Opens Google Chrome at the local portfolio URL and maximizes the window.
    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    # Wait for the landing page project panel so every test starts from a known state.
    Wait Until Element Is Visible    ${PROJECT_PANEL}
