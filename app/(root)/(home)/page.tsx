"use client";

import { useState } from "react";
import Link from "next/link";

import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";

const questions = [
  {
    _id: 1,
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: 1, name: "python" },
      { _id: 2, name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      avatar: "john-doe.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: 2,
    createdAt: new Date("2021-09-01T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "How to center a div?",
    tags: [
      { _id: 1, name: "css" },
      { _id: 2, name: "html" },
    ],
    author: {
      _id: "2",
      name: "Andrew Wang",
      avatar: "andrew-wang.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: 2,
    createdAt: new Date("2022-09-01T12:00:00.000Z"),
  },
];

const Home = () => {
  const [searchContent, setSearchContent] = useState("");

  return (
    <>
      <div className="flex w-full items-center justify-between gap-4 max-sm:flex-col">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href="/ask-question"
          className="flex justify-center max-sm:w-full"
        >
          <Button className="primary-gradient min-h-[48px] px-4 py-2 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          searchContent={searchContent}
          searchHolder={"Search questions..."}
          setSearchContent={setSearchContent}
        />

        <Filter placeholder="Select a Filter" filters={HomePageFilters} />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((q) => (
            <QuestionCard
              key={q._id}
              _id={q._id}
              title={q.title}
              tags={q.tags}
              author={q.author}
              upvotes={q.upvotes}
              views={q.views}
              answers={q.answers}
              createdAt={q.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
