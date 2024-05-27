import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import SearchView from "@/components/SearchView";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata('posts')
  return (
    <main>
      <div className="test h-4 w-6">
        <SearchView postMetadata={postMetadata} />
      </div>


    </main>
  );
}
