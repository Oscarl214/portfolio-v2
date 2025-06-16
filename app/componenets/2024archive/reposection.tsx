import React from 'react';
import RepoCard from './aboutpage/repocard';
import getRepos from '../lib/getRepos';
const RepoSection = async () => {
  const username = 'oscarl214';
  const repos = await getRepos(username);

  return (
    <div>
      <RepoCard repos={repos} />
    </div>
  );
};

export default RepoSection;
