# Playwright Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-2e8b57?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

A comprehensive end-to-end testing framework built with Playwright for automated testing of web applications. This project demonstrates modern testing practices using the Page Object Model pattern and covers multiple test scenarios including authentication, employee management, and file upload functionality.

## 🚀 Features

- **Cross-browser Testing**: Supports Chrome, Firefox, and Safari
- **Page Object Model**: Clean, maintainable test architecture
- **Parallel Test Execution**: Fast test execution with parallel running capabilities
- **Visual Testing**: Screenshot and trace collection for debugging
- **CI/CD Integration**: GitHub Actions workflow for automated testing
- **HTML Reporting**: Comprehensive test reports with screenshots and traces
- **Test Data Management**: Organized test data and fixtures
- **Authentication Testing**: Login validation with various scenarios
- **Employee Management**: CRUD operations for employee data
- **File Upload Testing**: Validation of file upload functionality with different file types

## 🎯 Test Coverage

### Authentication Tests (`auth.spec.js`)
- **TC-001**: Login with valid credentials
- **TC-002**: Login with invalid password validation

### Employee Management Tests
- **TC-003**: Add new employee with profile picture (`employees.add.spec.js`)
- **TC-004**: File type validation for employee photo upload
- **TC-005**: Edit employee personal details (`employees.edit.spec.js`)
- **TC-006**: Delete employee and confirm removal (`employee.delete.spec.js`)

### Additional Test Scenarios
- Shopping cart functionality testing (DemoBlaze application)
- Basic Playwright demo tests (`example.spec.js`):
  - Page title verification
  - Navigation and element interaction tests

## 🛠 Technology Stack

- **Testing Framework**: [Playwright](https://playwright.dev/)
- **Language**: JavaScript/Node.js
- **Test Runner**: Playwright Test Runner
- **Reporting**: HTML Reporter with traces
- **CI/CD**: GitHub Actions
- **Target Applications**: 
  - [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com)
  - [DemoBlaze](https://www.demoblaze.com)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahmad321git/Playwright-Automation.git
   cd Playwright-Automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Install system dependencies (Linux only)**
   ```bash
   npx playwright install-deps
   ```

## 🚀 Quick Start

### Running All Tests
```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Running Specific Tests
```bash
# Run authentication tests only
npx playwright test tests/auth.spec.js

# Run employee management tests
npx playwright test tests/employees.add.spec.js
npx playwright test tests/employees.edit.spec.js
npx playwright test tests/employee.delete.spec.js

# Run a specific test case
npx playwright test tests/auth.spec.js --grep "TC-001"
```

### Debug Mode
```bash
# Run tests in debug mode
npx playwright test --debug

# Run specific test in debug mode
npx playwright test tests/auth.spec.js --debug
```

### Parallel Execution
```bash
# Run tests in parallel (default)
npx playwright test --workers=4

# Run tests sequentially
npx playwright test --workers=1
```

## 📊 Test Reports

### View HTML Report
```bash
# Generate and view HTML report
npx playwright show-report
```

### Trace Viewer
```bash
# View traces for failed tests
npx playwright show-trace test-results/[test-folder]/trace.zip
```

## 📁 Project Structure

```
Playwright-Automation/
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI/CD pipeline
├── data/
│   ├── output.txt                 # Test data file
│   └── qa automation.png          # Test image for upload functionality
├── fixtures/
│   └── authFixtures.js            # Authentication fixtures and setup
├── pages/
│   ├── auth.page.js               # Authentication page object
│   ├── employee-form.page.js      # Employee form page object
│   ├── login.page.js              # Login page object
│   └── pim.page.js                # PIM (Personnel Information Management) page object
├── tests/
│   ├── auth.spec.js               # Authentication test cases
│   ├── cart.spec.js               # Shopping cart test cases
│   ├── employee.delete.spec.js    # Employee deletion tests
│   ├── employees.add.spec.js      # Employee creation tests
│   ├── employees.edit.spec.js     # Employee editing tests
│   └── example.spec.js            # Example test cases
├── tests-examples/
│   └── demo-todo-app.spec.js      # Demo application examples
├── .gitignore                     # Git ignore configuration
├── package.json                   # Project dependencies and scripts
├── package-lock.json              # Locked dependency versions
├── playwright.config.js           # Playwright configuration
└── README.md                      # Project documentation
```

## 🔧 Configuration

### Playwright Configuration (`playwright.config.js`)

The framework is configured with:
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled
- **Retry Logic**: 2 retries on CI, 0 locally
- **Timeout**: Standard timeout settings
- **Browsers**: Chrome, Firefox, Safari
- **Reporting**: HTML reporter with traces
- **Trace Collection**: Enabled for debugging

### Environment Variables

The framework supports various environment variables:
- `CI`: Automatically detected for CI/CD environments
- Custom base URLs can be configured in the config file

## 🧪 Page Object Model

This project follows the Page Object Model (POM) design pattern:

### AuthPage (`pages/auth.page.js`)
- Handles login functionality
- Manages authentication-related elements
- Provides methods for login operations

### PimPage (`pages/pim.page.js`)
- Manages Personnel Information Management features
- Handles employee list operations
- Provides search and navigation methods

### EmployeeFormPage (`pages/employee-form.page.js`)
- Manages employee form operations
- Handles file upload functionality
- Provides form filling methods

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/ci.yml`)

The project includes a complete CI/CD pipeline that:
- Runs on push and pull requests to master branch
- Sets up Node.js environment
- Installs dependencies and Playwright browsers
- Executes tests in Chromium browser
- Uploads test results and HTML reports as artifacts
- Provides 30-day retention for test artifacts

### Triggering CI/CD
```bash
# Push to master branch
git push origin master

# Create pull request to master branch
gh pr create --base master --head feature-branch
```

## 🧑‍💻 Writing Tests

### Basic Test Structure
```javascript
import { test, expect } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';

test('Login test example', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('Admin', 'admin123');
    await expect(page).toHaveURL(/dashboard/);
});
```

### Using Fixtures
```javascript
import test from '../fixtures/authFixtures';

test('Test with logged in user', async ({ loggedInPage }) => {
    // loggedInPage is already authenticated
    await loggedInPage.goto('/dashboard');
});
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests to ensure everything works**
   ```bash
   npm test
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style Guidelines
- Follow existing code formatting
- Use meaningful test descriptions
- Follow the Page Object Model pattern
- Add appropriate comments for complex logic
- Ensure all tests pass before submitting

## 📝 Test Data Management

### Test Credentials
- **Valid Login**: Username: `Admin`, Password: `admin123`
- **Invalid Login**: Any incorrect credentials for negative testing

### Test Files
- **Valid Image**: `data/qa automation.png` - for successful upload tests
- **Invalid File**: `data/output.txt` - for file type validation tests

## 🐛 Debugging

### Common Issues and Solutions

1. **Browser Installation Issues**
   ```bash
   npx playwright install --force
   ```

2. **Test Timeouts**
   - Increase timeout in `playwright.config.js`
   - Use `page.waitForSelector()` for dynamic elements

3. **Element Not Found**
   - Verify selectors are correct
   - Use Playwright Inspector: `npx playwright test --debug`

4. **Trace Analysis**
   ```bash
   npx playwright show-trace test-results/[failed-test]/trace.zip
   ```

## 📈 Performance

### Optimization Tips
- Use `page.waitForLoadState()` instead of fixed waits
- Leverage parallel execution for faster test runs
- Use efficient selectors (data-testid, role-based)
- Minimize test data setup and teardown

## 🔐 Security

- Never commit real credentials to the repository
- Use environment variables for sensitive data
- Regularly update dependencies for security patches

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Playwright Test Runner](https://playwright.dev/docs/intro)

## 📞 Support

For questions, issues, or contributions:
- Create an issue in the repository
- Check existing documentation
- Review the Playwright official documentation

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

---

**Happy Testing! 🎭**