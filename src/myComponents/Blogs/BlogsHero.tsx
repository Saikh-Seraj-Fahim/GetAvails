// import Image from "next/image";
// import Link from "next/link";

// export default function BlogsHero() {
//     return (
//         <div>
//             <div className="relative w-full h-[600px]">
//                 <Image src="/blogs/hero-background.jpg" alt="hero-background" fill className="object-cover object-center" />
//                 <div className="absolute top-24 w-full flex flex-col items-center justify-center gap-3">
//                     <h1 className="font-semibold font-inter text-white text-5xl text-center">Inside the World of Collaboration</h1>
//                     <p className="font-inter text-white text-lg text-center">Exploring trends, challenges and opportunities that shape
//                         partnerships, platforms and communities.</p>
//                     <Link href="">
//                         <button className="px-3 py-1 bg-[#FFFFFF] text-[#222222] font-semibold font-inter rounded-lg 
//                     cursor-pointer">
//                             Share your Blog
//                         </button>
//                     </Link>
//                 </div>
//             </div>


//         </div>
//     );
// }








import Image from 'next/image';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';

export default function BlogsHero() {
    const featuredBlogs = [
        {
            id: 1,
            category: 'Agent',
            title: 'Behind the Stage Lights',
            description: `Discover trends, updates and conversations around platforms, people and opportunities that shape 
            the way we connect.`,
            author: 'Runa Laila',
            date: '25 Jan, 2025',
            image: '/blogs/hero-1.jpg'
        },
        {
            id: 2,
            category: 'Artist',
            title: 'Behind the Music',
            description: `Discover trends, updates and conversations around platforms, people and opportunities that shape 
            the way we connect.`,
            author: 'James',
            date: '28 Jan, 2025',
            image: '/blogs/hero-2.jpg'
            // image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80'
        }
    ];

    const latestBlogs = [
        {
            id: 1,
            category: 'Artists',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80'
        },
        {
            id: 2,
            category: 'Agent',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            badge: 'JAN 25',
            image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80'
        },
        {
            id: 3,
            category: 'Manager',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-[500px]">
                <Image
                    src="/blogs/hero-background.jpg"
                    alt="hero-background"
                    fill
                    className="object-cover object-center"
                />
                <div className="absolute top-24 w-full flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-semibold font-inter text-white text-3xl md:text-4xl lg:text-5xl text-center">
                        Inside the World of Collaboration
                    </h1>
                    <p className="font-inter text-white text-sm md:text-base text-center">
                        Exploring trends, challenges and opportunities that shape partnerships, platforms and communities.
                    </p>
                    <button className="px-6 py-2 bg-white text-gray-900 font-semibold font-inter rounded-lg 
                    hover:bg-gray-100 transition-colors mt-2 cursor-pointer">
                        Share your Blog
                    </button>
                </div>
            </div>

            {/* Featured Cards Section */}
            <div className="max-w-5xl mx-auto -mt-36 z-10 grid grid-cols-1 md:grid-cols-2 gap-16 px-3 md:px-8">
                {featuredBlogs.map((blog) => (
                    <div key={blog.id} className="rounded-2xl shadow-lg overflow-hidden bg-[#F6FBFF]">
                        <div className="relative h-64">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="p-6">
                            <span className="font-medium font-inter text-blue-600">{blog.category}</span>
                            <h2 className="text-2xl font-bold font-inter text-gray-900 mt-2">{blog.title}</h2>
                            <p className="text-gray-600 text-sm mt-2 font-inter">{blog.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                    <span className="text-sm font-medium text-gray-700">LM</span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 font-inter">{blog.author}</p>
                                    <p className="text-xs text-gray-500 font-inter">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Latest Blog Section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-20 mb-12">
                <h2 className="text-3xl font-bold text-center text-blue-800 font-inter mb-8">Latest Blog</h2>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-12">
                    <div className="relative">
                        <input type="text" placeholder="Search"
                            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 font-inter text-sm"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <IoSearch className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {latestBlogs.map((blog) => (
                        <div key={blog.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                        hover:scale-105 transition-shadow">
                            <div className="relative h-52">
                                <Image src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="p-5">
                                <span className={`text-sm font-semibold ${blog.categoryColor} font-inter`}>{blog.category}</span>
                                <h3 className="text-xl font-bold text-gray-900 mt-2 font-inter">{blog.title}</h3>
                                <p className="text-gray-600 text-sm mt-2 font-inter">{blog.description}</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                                        <span className="text-xs font-medium text-gray-700">LM</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900 font-inter">{blog.author}</p>
                                        <p className="text-xs text-gray-500 font-inter">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
