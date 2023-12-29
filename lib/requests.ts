// Auth
export const signIn = async (body: { username: string; password: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const result = await response.json();
  return result;
};

export const signUp = async (body: {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/sign-up`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const result = await response.json();
  return result;
};

// Create Post
export const createPost = async (body: {
  userId: string;
  content: string;
  image: string;
}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const result = await response.json();
  return result;
};

// Fetch all posts
export const getPosts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
    {
      cache: "no-store",
    }
  );
  const result = await response.json();
  return result;
};
