const generateStatus = (code) => {
  return {
    status: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
        },
        code: {
          type: 'string',
          default: code,
        },
      },
    },
    data: {
      type: 'array',
    },
  };
};

export default generateStatus;
