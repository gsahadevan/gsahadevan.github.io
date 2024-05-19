import React from 'react';

export default function HireMePage() {
    return (
        <main className='max-w-2xl px-8 mx-auto my-10 lg:max-w-5xl'>
            <h2 className='my-6 text-2xl font-extrabold text-gray-700'>Hire me</h2>
            <p>Not looking for any new roles at the moment!!! Happy where I am right now.</p>
            <p className='py-2 leading-7'>
                You could contact me via e-mail if you are looking for someone to meet the below descriptions:
            </p>
            <ul className='list-disc list-outside pl-5 leading-7'>
                <li>Work location - Munich, Germany (or) Remote</li>
                <li>Senior Full Stack Developer</li>
                <li>
                    3+ years of <strong>Angular, TypeScript, Bootstrap</strong> experience
                </li>
                <li>
                    2+ years of <strong>Node + Express, Mongo DB</strong> experience
                </li>
                <li>Strong communication with creative writing skills</li>
                <li>Support with contructive criticism</li>
                <li>Agile and Test Driven Development</li>
                <li>
                    6+ months of <strong>WordPress + SEO</strong> experience
                </li>
                <li>
                    4+ years of <strong>Team Lead</strong> experience
                </li>
            </ul>
            {/* <img className='mx-auto h-screen py-10' src='images/resume.png' alt='Resume - Gauthaman Sahadevan' /> */}
        </main>
    );
}
