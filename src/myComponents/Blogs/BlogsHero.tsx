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







"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import Modal from '@/components/ui/modal';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { useDropzone } from 'react-dropzone';


// Accepting specific file types-React DropZone

function Accept(props) {
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    });

    const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //         <ul>
    //             {errors.map(e => (
    //                 <li key={e.code}>{e.message}</li>
    //             ))}
    //         </ul>
    //     </li>
    // ));

    return (
        <section className="container px-3 py-2">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Supported format: JPG, PNG, JPEG ( Mobile phone photos )</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
            <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                {/* <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul> */}
            </aside>
        </section>
    );
}

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
            image: '/blogs/latest-blog-1.jpg'
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
            image: '/blogs/latest-blog-2.jpg'
        },
        {
            id: 3,
            category: 'Manager',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: '/blogs/latest-blog-3.png'
        },
        {
            id: 4,
            category: 'Artists',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: '/blogs/latest-blog-1.jpg'
        },
        {
            id: 5,
            category: 'Agent',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            badge: 'JAN 25',
            image: '/blogs/latest-blog-2.jpg'
        },
        {
            id: 6,
            category: 'Manager',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: '/blogs/latest-blog-3.png'
        },
        {
            id: 7,
            category: 'Artists',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: '/blogs/latest-blog-1.jpg'
        },
        {
            id: 8,
            category: 'Agent',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            badge: 'JAN 25',
            image: '/blogs/latest-blog-2.jpg'
        },
        {
            id: 9,
            category: 'Manager',
            categoryColor: 'text-blue-600',
            title: 'Behind the Stage Lights',
            description: 'A closer look at what really happens before the concert begins.',
            author: 'Lata Mangeshkar',
            date: '25 Jan, 2025',
            image: '/blogs/latest-blog-3.png'
        }
    ];

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative w-full h-[500px]">
                <Image src="/blogs/hero-background.jpg" alt="hero-background" fill className="object-cover object-center" />
                <div className="absolute top-24 w-full flex flex-col items-center justify-center gap-4 px-4">
                    <h1 className="font-semibold font-inter text-white text-3xl md:text-4xl lg:text-5xl text-center">
                        Inside the World of Collaboration
                    </h1>
                    <p className="font-inter text-white text-sm md:text-base text-center">
                        Exploring trends, challenges and opportunities that shape partnerships, platforms and communities.
                    </p>
                    <button className="px-6 py-2 bg-white text-gray-900 font-semibold font-inter rounded-lg 
                    hover:bg-gray-100 transition-colors mt-2 cursor-pointer" onClick={() => setModalOpen(true)}>
                        Share your Blog
                    </button>
                </div>
            </div>


            {/* Featured Cards Section */}
            {/* mx-auto is working for laptop and desktop display. px-3 md:px-8 is mainly for mobile and tablet. */}

            <div className="max-w-5xl mx-auto px-3 md:px-8 -mt-36 z-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                {featuredBlogs.map((blog) => (
                    <div key={blog.id} className="rounded-2xl shadow-lg overflow-hidden bg-[#F6FBFF]">
                        <div className="relative h-64">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover object-center" />
                        </div>
                        <div className="p-6">
                            <p className="font-medium font-inter text-[#2C73B8]">{blog.category}</p>
                            <h2 className="font-bold font-inter text-2xl text-[#000000] mt-2">{blog.title}</h2>
                            <p className="font-inter text-[#4D4D4D] text-sm mt-2">{blog.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image src="/blogs/profile-pic.jpg" alt="profile-pic" fill
                                        className="object-cover object-center" />
                                </div>
                                <div>
                                    <p className="font-medium font-inter text-[#000000] text-sm">{blog.author}</p>
                                    <p className="font-inter text-xs text-[#838383]">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="font-bold font-inter text-[#235789] text-3xl text-center mt-24">Latest Blog</h2>
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-12">
                <div className="relative">
                    <input type="text" placeholder="Search" className="w-full px-4 py-3 pr-12 border border-gray-300 
                        rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-inter text-sm"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <IoSearch className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Latest Blog Section */}
            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-3 md:px-8 mt-24 mb-24 z-20 grid grid-cols-1 md:grid-cols-2 
            xl:grid-cols-3 gap-16">
                {latestBlogs.map((blog) => (
                    <div key={blog.id} className="rounded-2xl shadow-lg overflow-hidden bg-[#F6FBFF]">
                        <div className="relative h-64">
                            <Image src={blog.image} alt={blog.title} fill className="object-cover object-top" />
                        </div>
                        <div className="p-6">
                            <p className="font-medium font-inter text-[#2C73B8]">{blog.category}</p>
                            <h2 className="font-bold font-inter text-2xl text-[#000000] mt-2">{blog.title}</h2>
                            <p className="font-inter text-[#4D4D4D] text-sm mt-2">{blog.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image src="/blogs/profile-pic.jpg" alt="profile-pic" fill
                                        className="object-cover object-center" />
                                </div>
                                <div>
                                    <p className="font-medium font-inter text-[#000000] text-sm">{blog.author}</p>
                                    <p className="font-inter text-[#838383] text-xs">{blog.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    animation="bounce"
                    size="lg"
                >
                    <form className="flex flex-col items-center justify-center">
                        <h1 className='font-inter font-medium md:font-semibold text-xl md:text-2xl'>Add New Blog</h1>

                        <div className="w-full grid gap-3 items-center mt-6 mx-8">
                            <label htmlFor="blogTitle" className="font-medium font-inter">Blog Title</label>
                            <Input type="text" id="blogTitle" placeholder="Enter blog title"
                                className="font-inter bg-[#F2F2F2] text-black" />
                            {/* {errors.emailAddress && (
                            <p className="text-red-500 text-sm font-poppins">{errors.emailAddress.message}</p>
                        )} */}
                        </div>

                        <div className="w-full grid gap-3 items-center mt-6 mx-8">
                            <label htmlFor="blogDetails" className="font-medium font-inter">Blog Details</label>
                            <Textarea id="blogDetails" placeholder="Enter blog title"
                                className="font-inter bg-[#F2F2F2] text-black" />
                            {/* {errors.emailAddress && (
                            <p className="text-red-500 text-sm font-poppins">{errors.emailAddress.message}</p>
                        )} */}
                        </div>

                        <div className='mt-12 mx-2 border-4 border-dashed'>
                            <Accept />
                        </div>

                        <button className="mt-8 px-8 py-1 font-inter bg-[#235789] text-white rounded-4xl cursor-pointer">
                            Submit
                        </button>
                    </form>
                </Modal>
            )}
        </div>
    );
};
