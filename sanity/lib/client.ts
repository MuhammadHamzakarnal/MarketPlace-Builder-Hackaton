import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1iy102dq",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: "skidjiktQCtytWgcotiwR3agzUbshzserOHh3A3AkQ5oJwv53BHccxBBQY26HKkzeQ2rbONY1gx03rHCIbJ1HIHKwDwzKOAGSD6rCm7xlFA6KzznuXbau3QtzjbqaSxbEuTJPZ30CztnMBAySjKxN2KAhI0C6w9VtIy6BMbj8j5XW994mToJ", // Use token for private data
});
