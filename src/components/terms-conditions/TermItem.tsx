"use client";

interface TermItemProps {
    title: string;
    description: string;
}

export default function TermItem({ title, description }: TermItemProps) {
    return (
        <div>
            <span className="text-base text-black font-bold uppercase">{title}:</span>
            <p className="text-gray mt-2">{description}</p>
            <br />
        </div>
    );
}
