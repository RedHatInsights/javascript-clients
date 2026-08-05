# Security Policy

## Supported Versions

Only the latest published version of each `@redhat-cloud-services/*-client` package receives security updates. Upgrade to the latest version to ensure you have all fixes.

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly:

1. **Do NOT open a public GitHub issue** for security vulnerabilities.
2. Report via [Red Hat Product Security](https://access.redhat.com/security/team/contact/) or email `secalert@redhat.com`.
3. Include a description of the vulnerability, steps to reproduce, and any relevant logs or screenshots.

You should receive a response within 5 business days. We will work with you to understand and address the issue before any public disclosure.

## Security Practices

This project follows these security practices:

- **Pinned dependencies**: GitHub Actions use commit SHA pinning to prevent supply chain attacks.
- **CODEOWNERS protection**: CI/CD configuration, git hooks, package manifests, and npm configuration require admin review.
- **Signed releases**: Release commits and tags are GPG-signed.
- **npm provenance**: Published packages include [provenance attestations](https://docs.npmjs.com/generating-provenance-statements) for supply chain transparency.
- **Automated dependency updates**: Renovate monitors for outdated and vulnerable dependencies.
- **Pre-commit hooks**: Husky enforces test execution and commit message validation before every commit.
- **Least-privilege CI**: PR workflows run with read-only permissions; write access is scoped to the release job only.
- **Conventional commits**: Commitlint enforces structured commit messages to maintain a clear audit trail.
