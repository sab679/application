const { connect } = require('./config/db'); // Adjust the path if needed

(async () => {
  console.log('Testing database connection...');
  await connect(); // This will attempt to authenticate with the database
})();
