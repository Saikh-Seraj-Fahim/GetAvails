interface OnePlatformProps {
    title: string;
    description: string;
}
export default function OnePlatform({ title, description }: OnePlatformProps) {
    return (
        <div className="border-2 rounded-lg p-4 md:p-8">
            <h1 className="text-[#235789] text-xl font-inter">{title}</h1>
            <p>{description}</p>
        </div>
    );
}
