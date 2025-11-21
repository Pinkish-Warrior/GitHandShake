"use client";
import React, { useState, useEffect } from 'react';
import IssueList from '../components/IssueList';
import LanguageFilter from '../components/LanguageFilter';
import LoginButton from '../components/LoginButton';

const Dashboard = () => {
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('http://localhost:3001/issues');
        if (!response.ok) {
          throw new Error('Network response was not ok. Is the server running?');
        }
        const data = await response.json();
        setIssues(data);
        setFilteredIssues(data); // Initially, show all issues
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  useEffect(() => {
    if (selectedLanguage) {
      setFilteredIssues(
        issues.filter(issue => issue.language === selectedLanguage)
      );
    } else {
      setFilteredIssues(issues);
    }
  }, [selectedLanguage, issues]);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>GitHub Issues Dashboard</h1>
        <LoginButton />
      </header>
      <div className="dashboard-main">
        <aside className="filters-sidebar">
          <LanguageFilter onSelectLanguage={setSelectedLanguage} />
        </aside>
        <main className="issues-content">
          {loading && <p>Loading issues...</p>}
          {error && <p>Error fetching issues: {error}</p>}
          {!loading && !error && filteredIssues.length > 0 && (
            <IssueList issues={filteredIssues} />
          )}
          {!loading && !error && filteredIssues.length === 0 && (
            <p>No issues found. Try selecting a different language or check if the database is seeded.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;