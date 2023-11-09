
'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Tiles from './Tiles.jsx';
import Descriptions from './Descriptions.jsx';

const data = [
    {
        title: "UI UX",
        title2: "Designing",
        description: "Designing experiences that captivate, UI/UX mastery that resonates.",
        img:"ui.jpg",
        speed: 0.5
    },
    {
        title: "Social Media",
        title2: "Marketing",
        description: "Elevate your brand's presence and drive engagement with our strategic social media marketing solutions.",
        img:"social.jpg",
        speed: 0.5
    },
    {
        title: "Digital",
        title2: "Marketing",
        description: "Pixel-perfect solutions: Transforming ideas into engaging realities through digital marketing, web and app expertise, and visual storytelling.",
        img:"digital.jpg",
        speed: 0.67
    },
    {
        title: "Website & App",
        title2: "Development",
        description: "We make your brand look great online with ads, websites, and cool photos and videos.",
        img:"dev.jpg",
        speed: 0.8
    },
    {
        title: "Photography &",
        title2: "Videography",
        description: "Boost your business: we handle online ads, create websites, and capture amazing moments with photos and videos.",
        img:"pic.jpg",
        speed: 0.8
    },
    
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Tiles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}