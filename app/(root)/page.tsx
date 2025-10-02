import React from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";


const Page = () => {
    
    return (
        <>
           <section className="card-cta">
              <div className="flex flex-col gap-5 max-w-lg ">
                  <h2>Get Interview-Ready with Aspira</h2>
                  <p className="text-lg font-light">
                      Practice on real interview questions and get instant feedback.
                  </p>
                  <Button asChild className="btn-primary
                   max-sm:max-w-full">
                      <Link href="/interview">Start an Interview</Link>
                      
                  </Button>
              </div>

               <Image src="/robot.png" alt="robo-dude" width={250}
                      height={350} className="max-sm:hidden" />
           </section>

            <section className="flex flex-col gap-6 mt-8">
                <h2>Your Interviews</h2>

                <div className="Interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}

                    {/*<p>You Haven&apos;t tqken any interview yet</p>*/}
                </div>
            </section>

            <section className="flex flex-col gap-6 mask-b-to-8">
                <h2>Take an Interview</h2>

                <div className="Interviews-section">
                    {dummyInterviews.map((interview) => (
                        <InterviewCard {...interview} key={interview.id} />
                    ))}

                    {/*<p>You haven&apos;t taken any interviews yet</p>*/}
                </div>
            </section>
            
        </>
    )
}

export default Page;