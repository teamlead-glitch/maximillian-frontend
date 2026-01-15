"use client";

import { useEffect, useState  } from "react";
import api from "@/services/api";
import { simpleType } from '@/types/simpleType';
import Card from '@/components/Card';

export default function Home() {
  const [posts, setPosts] = useState<simpleType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get<simpleType[]>("/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </main>
  );
}
