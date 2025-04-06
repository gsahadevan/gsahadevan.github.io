import React from 'react';
import { Headline } from '@/components/Typography/Headline';
import { Title } from '@/components/Typography/Title';
import { Copy } from '@/components/Typography/Copy';

const Home = () => {
    return (
        <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
            <Copy>Hello &#128075;</Copy>

            <Headline>I am Gauthaman Sahadevan</Headline>

            <Copy>
                I am a Software Development Engineer. I hold a Master’s Degree in Computer Application from PSG
                College of Technology, Coimbatore - India. I have a total of 12+ years of experience in developing
                applications using Java and its associated technologies. I have played multiple roles – as a
                Technology Consultant for Fortune #1 company, as a SME in the Cards and Payments domain for a
                Netherlands based Banking Group and so on.
            </Copy>

            <Copy>
                Apart from my work, I prefer to read, review and write technical blogs, answer questions on Stack
                Overflow and work on projects involving Data Visualization. I enjoy creating mock up projects by
                reverse engineering. I also like to research and implement latest features released as part of the
                technology stack of my interest and develop personal pet projects.
            </Copy>

            <Title>My current interests include</Title>

            <Copy>
                <ul className='list-disc list-outside pl-5 leading-7'>
                    <li>Design Systems</li>
                    <li>React</li>
                    <li>Micro Frontends</li>
                    <li>Tailwind CSS</li>
                    <li>Styled Components</li>
                    <li>Next.js</li>
                </ul>
            </Copy>
        </main>
    );
}

export default Home;
