

export function validateProblem(data) {
    const errors = [];
  
    if (!data.title || typeof data.title !== 'string') {
      errors.push('Title is required and must be a string.');
    }
  
    //  no more than 500 characters generate error.
    if (data.description !== undefined) {
      if (typeof data.description !== 'string') {
        errors.push('Description must be a string.');
      } else if (data.description.length > 500) {
        errors.push('Description must not exceed 500 characters.');
      }
    }
  
    if (data.link !== undefined) {
      if (typeof data.link !== 'string') {
        errors.push('Link must be a string.');
      } else {
        const urlRegex = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+[/#?]?.*$/;
        if (!urlRegex.test(data.link)) {
          errors.push('Link must be a valid URL.');
        }
      }
    }
  
    if (data.tags !== undefined) {
      if (!Array.isArray(data.tags)) {
        errors.push('Tags must be an array.');
      } else {
        for (const tag of data.tags) {
          if (typeof tag !== 'string') {
            errors.push('Each tag must be a string.');
            break;
          }
        }
      }
    }
  
    if (data.revisitDate !== undefined) {
      data.revisitDate = new Date();
      const parsedDate = Date.parse(data.revisitDate);
      if (isNaN(parsedDate)) {
        errors.push('Revisit Date must be a valid date.');
      }
    }
  
    return errors;
  }