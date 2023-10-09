"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah",
    avatar: "S",
    title: "Programmer",
    description: "As a programmer, I find this app indispensable for my work.",
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Musician",
    description:
      "I use this app to create music, and it's been a game-changer for my compositions!",
  },
  {
    name: "David",
    avatar: "D",
    title: "Manager",
    description:
      "In my managerial role, this app enhances my productivity and organization!",
  },
  {
    name: "Linda",
    avatar: "L",
    title: "Language Learner",
    description:
      "This app has been a fantastic tool for improving my English skills!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
