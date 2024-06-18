import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    const showServices = false;     // Set this to true to show the Testimonials section
    const showTestimonials = false; // Set this to true to show the Testimonials section
    const showAchievements = false; // Set this to true to show the Achievements section
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            {showAchievements && <Achievement />} {/* Conditionally render the Achievements component */}
            {showServices && <Services />} {/* Conditionally render the Services component */}
            {showTestimonials && <Testimonials />} {/* Conditionally render the Testimonials component */}
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
