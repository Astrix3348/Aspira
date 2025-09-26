import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import {InterviewCard} from "@/components/InterviewCard";

const Page = () => {
    return (
        <>
           <section className="card-cta">
              <div className="flex flex-col gap-5 max-w-lg ">
                  <h2>Get Interview Ready with Aspira</h2>
                  <p className="text-lg font-light">
                      Practice on real interview questions and get instant feedback.
                  </p>
                  <Button asChild className="btn-primary
                   max-sm:max-w-full">
                      <Link href="/interview">Start an Interview</Link>
                      
                  </Button>
              </div>

               <Image src="/robot.png" alt="robo-dude" width={300}
                      height={150} className="max-sm:hidden" />
           </section>

            <section className="flex flex-col gap-6 mask-b-to-8">
                <h2>Your Interviews</h2>

                <div className="Interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} />
                    ))}

                    {/*<p>You Haven&apos;t tqken any interview yet</p>*/}
                </div>
            </section>

            <section className="flex flex-col gap-6 mask-b-to-8">
                <h2>Take an Interview</h2>

                <div className="Interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} />
                    ))}
                </div>
            </section>
            
        </>
    )
}

export default Page;