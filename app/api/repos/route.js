export default async function handler(req, res) {
    const { username } = req.query;
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  