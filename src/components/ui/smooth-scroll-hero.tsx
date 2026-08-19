"use client";
import * as React from "react";
import {
	motion,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";

interface ISmoothScrollHeroProps {
	/**
	 * Height of the scroll section in pixels
	 * @default 1500
	 */
	scrollHeight?: number;
	/**
	 * Background image URL for desktop view
	 */
	desktopImage?: string;
	/**
	 * Background image URL for mobile view
	 */
	mobileImage?: string;
	/**
	 * Optional Video URL to override images
	 */
	videoSrc?: string;
	/**
	 * Initial clip path percentage
	 * @default 25
	 */
	initialClipPercentage?: number;
	/**
	 * Final clip path percentage
	 * @default 75
	 */
	finalClipPercentage?: number;
}

const SmoothScrollHero: React.FC<ISmoothScrollHeroProps> = ({
	scrollHeight = 1500,
	desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
	mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	videoSrc,
	initialClipPercentage = 25,
	finalClipPercentage = 75,
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const clipStart = useTransform(
		scrollYProgress,
		[0, 1],
		[initialClipPercentage, 0]
	);
	const clipEnd = useTransform(
		scrollYProgress,
		[0, 1],
		[finalClipPercentage, 100]
	);

	const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;

	const scale = useTransform(
		scrollYProgress,
		[0, 1],
		[1.7, 1]
	);

	return (
		<div
			ref={containerRef}
			style={{ height: `calc(${scrollHeight}px + 100vh)` }}
			className="relative w-full"
		>
			<motion.div
				className="sticky top-0 h-screen w-full bg-black overflow-hidden"
				style={{
					clipPath,
					willChange: "transform, opacity",
				}}
			>
				<motion.div
					className="absolute inset-0 w-full h-full"
					style={{ scale }}
				>
					{videoSrc ? (
						<video
							src={videoSrc}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						/>
					) : (
						<>
							{/* Mobile background */}
							<div
								className="absolute inset-0 md:hidden bg-cover bg-center bg-no-repeat"
								style={{ backgroundImage: `url(${mobileImage})` }}
							/>
							{/* Desktop background */}
							<div
								className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
								style={{ backgroundImage: `url(${desktopImage})` }}
							/>
						</>
					)}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default SmoothScrollHero;
