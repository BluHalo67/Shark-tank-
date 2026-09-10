exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 455,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const { email, password, code } = JSON.parse(event.body);

    // Secret verification details stored securely on backend
    const SECRET_ACCESS_CODE = "SHARK2026"; // Replace with your code

    // Validate access code
    if (code !== SECRET_ACCESS_CODE) {
      return {
        statusCode: 401,
        body: JSON.stringify({ message: 'Invalid access code.' })
      };
    }

    // Here you can add user/password authentication logic or integration with Netlify Identity/Supabase/Firebase
    if (email && password) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Access granted!' })
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Email and password required.' })
      };
    }

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server error.' })
    };
  }
};
