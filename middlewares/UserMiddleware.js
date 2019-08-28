const validateUser = (req, res, next) => {
  const userData = req.body;
  const errors = [];

  if (!userData.firstName) {
    errors.push({
      field: 'firstName',
      message: 'Must be a non-empty string'
    });
  }

  if (!userData.lastName) {
    errors.push({
      field: 'lastName',
      message: 'Must be a non-empty string'
    });
  }

  if (!userData.age || userData.age < 0) {
    errors.push({
      field: 'age',
      message: 'Must be a positive number or zero'
    });
  }

  if (errors.length > 0) {
    return res.status(400).json({
      ok: false,
      errors
    });
  }

  next();
};

module.exports = {
  validateUser
};
