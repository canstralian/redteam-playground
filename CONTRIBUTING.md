# Contributing Guidelines

## Branching Strategy
- Use `main` for production-ready code.
- Create feature branches: `feature/<description>`.
- Use bugfix branches: `bugfix/<description>`.

## Coding Standards
- Follow PEP 8 for Python code.
- Use type hints and enforce them with `mypy`.

## Commit Message Conventions
- Format: `<type>: <description>`
  - Types: `feat`, `fix`, `docs`, `test`, `refactor`.

## Pull Requests
1. Fork the repository.
2. Create your feature branch.
3. Write clear commit messages.
4. Ensure tests pass.
5. Submit a pull request.

---

### **SECURITY.md**
```markdown
# Security Policy

## Supported Versions
| Version | Supported          |
|---------|--------------------|
| 1.x     | :white_check_mark: |
| 0.x     | :x:                |

## Reporting Vulnerabilities
If you discover a security vulnerability, please email [security@redteamplayground.com](mailto:security@redteamplayground.com).

---

### **CHANGELOG.md**
```markdown
# Changelog

## [Unreleased]
### Added
- CLI commands for network scanning.
- Web dashboard for managing results.

### Changed
- Updated OSINT module to support new APIs.

### Fixed
- Resolved issue with dashboard authentication.

---

### **Bug Report Template (bug_report.md)**
```markdown
---
name: Bug report
about: Report an issue to improve the project
title: ''
labels: bug
assignees: ''

---

**Describe the bug**
A clear and concise description of the issue.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error.

**Expected behavior**
Describe what you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g., Ubuntu 20.04]
- Browser: [e.g., Chrome]
- Version: [e.g., 1.0.0]

**Additional context**
Add any other context about the problem here.

---

### **Feature Request Template (feature_request.md)**
```markdown
---
name: Feature request
about: Suggest a new feature
title: ''
labels: enhancement
assignees: ''

---

**Is your feature request related to a problem?**
Describe the problem you're facing.

**Proposed Solution**
Describe the feature you'd like to see.

**Alternatives**
Discuss alternative solutions.

**Additional Context**
Add any other information.

---

If you'd like me to add more files or refine these drafts further, let me know!