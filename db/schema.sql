-- Initial schema for the Open Source Navigator application
-- Database: PostgreSQL

-- Table to store user information, linked to their GitHub account
CREATE TABLE users (
    id BIGINT PRIMARY KEY, -- Using the user's GitHub ID as the primary key
    github_username VARCHAR(255) NOT NULL UNIQUE,
    avatar_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login TIMESTAMPTZ
);

-- Table to store aggregated beginner-friendly issues from GitHub
CREATE TABLE issues (
    id BIGSERIAL PRIMARY KEY, -- Internal auto-incrementing primary key
    github_issue_id BIGINT NOT NULL UNIQUE,
    repo_name VARCHAR(255) NOT NULL,
    issue_url TEXT NOT NULL,
    title TEXT NOT NULL,
    language VARCHAR(100),
    labels TEXT[], -- Array of strings to hold issue labels like 'good first issue'
    created_at_github TIMESTAMPTZ,
    updated_at_github TIMESTAMPTZ,
    fetched_at TIMESTAMPTZ NOT NULL DEFAULT NOW() -- When our service last fetched this issue
);

-- Optional: Create indexes for frequently queried columns
CREATE INDEX idx_issues_language ON issues(language);
CREATE INDEX idx_issues_repo_name ON issues(repo_name);

COMMENT ON COLUMN users.id IS 'GitHub user ID';
COMMENT ON COLUMN issues.github_issue_id IS 'The unique ID of the issue on GitHub';
COMMENT ON COLUMN issues.labels IS 'Labels associated with the GitHub issue, e.g., good first issue, help wanted';

