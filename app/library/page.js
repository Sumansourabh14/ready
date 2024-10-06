"use client";
import DocCard from "@/components/ui/general/DocCard";
import { GlobalContext } from "@/services/GlobalContext";
import { pinata } from "@/utils/config";
import Link from "next/link";
import { useEffect, useContext, useState } from "react";

const Library = () => {
  const { getDocs } = useContext(GlobalContext);
  const [docs, setDocs] = useState([]);

  const getFiles = async () => {
    const files = await pinata.files.list();
  };

  useEffect(() => {
    let mounted = true;

    const fetchDocs = async () => {
      const res = await getDocs();

      if (mounted) {
        console.log(res);
        setDocs(res.documents);
      }
    };

    fetchDocs();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto p-8 pt-32 pb-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="md:text-4xl">Library</h1>

      <div className="mt-8">
        {docs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {docs.map((doc) => (
              <DocCard
                key={doc.$id}
                id={doc.$id}
                title={doc.title}
                description={doc.description}
                url={doc.url}
                thumbnail={doc.thumbnail}
              />
            ))}
          </div>
        ) : (
          <div>Nothing</div>
        )}
      </div>
    </div>
  );
};

export default Library;
