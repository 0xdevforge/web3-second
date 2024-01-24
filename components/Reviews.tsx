"use client";

import Image from "next/image";
import React from 'react';

import right from '@/public/svgs/right.svg';

const testimonials = [
    {
        text: "Braintrust is exceptional! The pay is the best, they don't take a cut, clients are professional, and the work is fulfilling. I love that talent own a part of the platform through BTRST tokens.",
        author: "Mehedi Khan",
        role: "Senior Software Engineer, Engineering Lead"
    },
    {
        text: "Working with this team has been a game changer. They truly understand the meaning of collaboration and go above and beyond to meet project deadlines..I love that talent own a part of the platform through BTRST tokens",
        author: "Jane Doe",
        role: "Project Manager"
    },
    {
        text: "I've never felt more valued as a freelancer. The projects are interesting, and the community is incredibly supportive.I love that talent own a part of the platform through BTRST tokens.",
        author: "John Smith",
        role: "Freelance UX Designer"
    },
    {
        text: "This platform has connected me with some of the most innovative companies out there. It's been an amazing opportunity to grow my portfolio.I love that talent own a part of the platform through BTRST tokens.",
        author: "Alice Johnson",
        role: "Graphic Designer"
    },
    {
        text: "As a developer, it's hard to find projects that truly excite me. This platform has consistently provided challenging and rewarding work.I love that talent own a part of the platform through BTRST tokens.",
        author: "Mohammed Ali",
        role: "Full Stack Developer"
    }
];

function Testimonial({ testimonial, index, total, onNext, onPrev }: any) {
    return (
        <div className="lg:mx-20 mx-5 py-20 bg-[#eff4e2] shadow-md rounded-md">
            <div className="flex items-start lg:items-center justify-between gap-3 px-10 lg:justify-end lg:pr-16">
                <span className="lg:text-2xl mr-2">
                    <span className="text-gray-900 font-medium">{(index + 1).toString().padStart(2, '0')}</span>
                    /
                    <span className="text-gray-400">{total.toString().padStart(2, '0')}</span>
                </span>
                <div className="flex gap-4">
                    <button onClick={onPrev}>
                        <Image src={right} alt="left" className="rotate-180" />
                    </button>
                    <button onClick={onNext}>
                        <Image src={right} alt="right" />
                    </button>
                </div>
            </div>
            <div className="flex mt-12 lg:mt-4 flex-col items-center text-start lg:pl-12  pl-10 pr-24 lg:pr-48">
                <div className="testimonial-enter">
                    <p className="lg:text-2xl text-md font-medium tracking-wide mb-4 line-clamp-[7]">
                        &quot;{testimonial.text}&quot;
                    </p>
                    <div className="lg:flex gap-2 items-center mb-2 mt-6">
                        <Image
                            className="w-16 h-16 rounded-full mr-4"
                            width={64}
                            height={64}
                            src={`https://placehold.co/64x64?text=${testimonial.author.charAt(0)}`}
                            alt={`Portrait of ${testimonial.author}, ${testimonial.role}`}
                        />
                        <div className="">
                            <p className="lg:font-semibold lg:text-xl text-sm">{testimonial.author}</p>
                            <p className="lg:font-semibold lg:text-xl text-sm">{testimonial.role}</p>
                        </div>
                    </div>
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