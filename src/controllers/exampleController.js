const getExample = (req, res) => {
  res.json({ message: 'Hello from controller!' });
};

export default {
  getExample,
};
