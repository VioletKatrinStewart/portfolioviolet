import React from 'react';

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ol>
        <li>
          PIXL: PIXL is an application that allows the user to select grid section and modify its
          color to create a piece of pixel art. Users will be able to save and display their artwork
          on a gallery page via local storage.{' '}
          <a href="https://pixlapp.github.io/pixel-art-project">Explore PIXL!</a>
        </li>
        <li>
          Scrounger: A twist on a classic scavenger hunt! This app encourages users to explore and
          solve puzzles that lead to real-world adventures and shared experiences. Users of this app
          will be going on outdoor adventures seeking beautiful views around Portland.
          <a href="https://scrounger.netlify.app/">Jump into Scrounger!</a>
        </li>
        <li>
          friends-dot-map(): A convenient travel companion to keep your group safe and organized
          when in unfamiliar places. This app utilies the mapbox api to track and share users
          locations with their friends.{' '}
          <a href="https://friends-dot-map.netlify.app/login">Check out friends-dot-map()!</a>
        </li>
        <li>
          Gotchi-BB: Gotchi BB is an online digital pixel pet that users can feed, clean, play with,
          and chat with. The amount of times one interacts with their pet adds to an overall
          happiness score that is then ranked on a site leader board.{' '}
          <a href="https://gotchi-bb.netlify.app/">Play with Gotchi-BB!</a>
        </li>
      </ol>
    </div>
  );
}
