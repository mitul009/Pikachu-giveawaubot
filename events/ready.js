module.exports = (client) => {
  console.log(
    `Ready to do Giveaway `
  );

  const activities = [`Watching in ${client.guilds.cache.size} guilds`,"g!help"];
  setInterval(() => {
    let activity = activities[Math.floor(Math.random() * activities.length)];
    client.user.setActivity(activity, { type: "WATCHING" });
  }, 20000);

};
