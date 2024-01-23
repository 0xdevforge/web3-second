"use client";

import Image from "next/image";
import React from 'react';

const testimonials = [
    {
        text: "Braintrust is exceptional! The pay is the best, they don't take a cut, clients are professional, and the work is fulfilling. I love that talent own a part of the platform through BTRST tokens.",
        author: "Mehedi Khan",
        role: "Senior Software Engineer, Engineering Lead"
    },
    {
        text: "Working with this team has been a game changer. They truly understand the meaning of collaboration and go above and beyond to meet project deadlines.",
        author: "Jane Doe",
        role: "Project Manager"
    },
    {
        text: "I've never felt more valued as a freelancer. The projects are interesting, and the community is incredibly supportive.",
        author: "John Smith",
        role: "Freelance UX Designer"
    },
    {
        text: "This platform has connected me with some of the most innovative companies out there. It's been an amazing opportunity to grow my portfolio.",
        author: "Alice Johnson",
        role: "Graphic Designer"
    },
    {
        text: "As a developer, it's hard to find projects that truly excite me. This platform has consistently provided challenging and rewarding work.",
        author: "Mohammed Ali",
        role: "Full Stack Developer"
    }
];

function Testimonial({ testimonial, index, total, onNext, onPrev }:any) {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gray-100">
            <div className="flex flex-col items-center text-center">
                <div className="testimonial-enter">
                    <p className="text-lg font-semibold mb-4">
                        {testimonial.text}
                    </p>
                    <div className="flex items-center mb-2">
                        <Image
                            className="w-16 h-16 rounded-full mr-4"
                            width={64}
                            height={64}
                            src={`https://placehold.co/64x64?text=${testimonial.author.charAt(0)}`}
                            alt={`Portrait of ${testimonial.author}, ${testimonial.role}`}
                        />
                        <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button className="text-gray-600 mx-2" onClick={onPrev}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <span className="text-sm text-gray-600">{`${index + 1}/${total}`}</span>
                    <button className="text-gray-600 mx-2" onClick={onNext}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

class TestimonialSlider extends React.Component<any, { current: number }> {
    timeout: NodeJS.Timeout | null;

    constructor(props: any) {
        super(props);
        this.state = {
            current: 0
        };
        this.timeout = null;
    }

    componentDidMount() {
        this.startAutoSlide();
    }

    componentWillUnmount() {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    }

    startAutoSlide = () => {
        this.timeout = setTimeout(() => {
            this.nextTestimonial();
        }, 5000); // Change slide every 5 seconds
    }

    // Assuming you have a nextTestimonial method
    nextTestimonial = () => {
        this.setState(prevState => ({
            current: (prevState.current + 1) % testimonials.length
        }));
        this.resetAutoSlide();
    }

    prevTestimonial = () => {
        this.setState(prevState => ({
            current: (prevState.current - 1 + testimonials.length) % testimonials.length
        }));
        this.resetAutoSlide();
    }

    resetAutoSlide = () => {
        clearTimeout(this.timeout!);
        this.startAutoSlide();
    }

    render() {
        return (
            <Testimonial
                testimonial={testimonials[this.state.current]}
                index={this.state.current}
                total={testimonials.length}
                onNext={this.nextTestimonial}
                onPrev={this.prevTestimonial}
            />
        );
    }
}

export default TestimonialSlider;