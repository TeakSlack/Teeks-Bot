const got = require("got");

async function find(subreddit) {
  let raw = await got(`https://www.reddit.com/r/${subreddit}/random/.json`);
  let parsed = JSON.parse(raw.body);
  let data = parsed[0].data.children[0].data;

  if (data.over_18) find();

  return data;
}

module.exports = find;
