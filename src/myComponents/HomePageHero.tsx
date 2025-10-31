import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';

// Added TypeScript interface for Artist
interface Artist {
    id: number;
    name: string;
}

interface Location {
    id: number;
    name: string;
}

const artists: Artist[] = [
    { id: 1, name: 'Pablo Picasso' },
    { id: 2, name: 'Vincent van Gogh' },
    { id: 3, name: 'Leonardo da Vinci' },
    { id: 4, name: 'Claude Monet' },
    { id: 5, name: 'Frida Kahlo' },
    { id: 6, name: 'Michelangelo' },
    { id: 7, name: 'Salvador Dalí' },
    { id: 8, name: 'Rembrandt' },
    { id: 9, name: 'Andy Warhol' },
    { id: 10, name: 'Georgia O Keeffe' }
];

const locations: Location[] = [
    { id: 1, name: 'Rajshahi' },
    { id: 2, name: 'Dhaka' },
    { id: 3, name: 'Nilphamari' },
    { id: 4, name: 'Dinajpur' },
    { id: 5, name: 'Mohakhali' },
    { id: 6, name: 'New York' },
    { id: 7, name: 'Badda' },
    { id: 8, name: 'Gulshan' },
    { id: 9, name: 'Puran Dhaka' },
    { id: 10, name: 'Shyamoly' }
];

export default function HomePageHero() {
    // ✏️ CHANGED: Added type annotations to state
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [selected, setSelected] = useState<Artist | null>(null);
    // ✏️ CHANGED: Added type to useRef
    const ref = useRef<HTMLDivElement>(null);

    const filtered = artists.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        // ✏️ CHANGED: Added type to event parameter
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);


    // ✏️ CHANGED: Added type annotations to state
    const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);
    const [searchLocation, setSearchLocation] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<Artist | null>(null);
    // ✏️ CHANGED: Added type to useRef
    const refLocation = useRef<HTMLDivElement>(null);

    const filteredLocation = locations.filter(a =>
        a.name.toLowerCase().includes(searchLocation.toLowerCase())
    );

    useEffect(() => {
        // ✏️ CHANGED: Added type to event parameter
        const handleClickLocation = (e: MouseEvent) => {
            if (refLocation.current && !refLocation.current.contains(e.target as Node)) setIsOpenLocation(false);
        };
        document.addEventListener('mousedown', handleClickLocation);
        return () => document.removeEventListener('mousedown', handleClickLocation);
    }, []);

    return (
        <div className="p-16 flex gap-12">
            <div className="w-1/2 ">
                <h1 className="font-medium font-IBM-plex-sans text-5xl">Smarter Talent Booking, All in One Place</h1>
                <p className="text-[#6B7280] mt-6 text-xl">The all-in-one platform for agents, artists, venues, and buyers to search,
                    book and grow - smarter and faster.</p>
                <button className="bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-4xl flex gap-2 mt-6 cursor-pointer">
                    Join Now
                    <FaArrowRightLong className="translate-y-1/3" />
                </button>


                <div className="w-full p-8 mt-7 border-2 rounded-md">
                    {/* Search for Artists */}
                    <div ref={ref} className="relative">
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="w-full bg-white rounded-full shadow hover:shadow-md transition-shadow px-6 py-4 
                            flex items-center justify-between border-2 border-transparent hover:border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <span className={selected ? "text-gray-800 font-medium" : "text-gray-500"}>
                                    {selected ? selected.name : 'Search for Artists'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                {selected && (
                                    < X onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelected(null); }}
                                        className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                                )}
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>
                        </button>

                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50">
                                <div className="p-4 border-b">
                                    <input type="text" placeholder="Search artists..." value={search}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        autoFocus
                                    />
                                </div>

                                <div className="max-h-80 overflow-y-auto py-2">
                                    {filtered.length > 0 ? (
                                        filtered.map((a) => (
                                            <button
                                                key={a.id}
                                                onClick={() => { setSelected(a); setSearch(''); setIsOpen(false); }}
                                                className="w-full px-6 py-3 text-left hover:bg-gray-50 flex justify-between 
                                                items-center"
                                            >
                                                <div className="font-medium text-gray-800">{a.name}</div>
                                                {selected?.id === a.id && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-6 py-8 text-center text-gray-500">
                                            <p>No artists found</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* {selected && (
                        <div className="mt-8 p-6 bg-white rounded-2xl shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Selected Artist</h2>
                            <p className="text-xl font-bold">{selected.name}</p>
                        </div>
                    )} */}


                    {/* Select Location */}
                    <div ref={refLocation} className="relative mt-4">
                        <button onClick={() => setIsOpenLocation(!isOpenLocation)}
                            className="w-full bg-white rounded-full shadow hover:shadow-md transition-shadow px-6 py-4 
                            flex items-center justify-between border-2 border-transparent hover:border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <span className={selectedLocation ? "text-gray-800 font-medium" : "text-gray-500"}>
                                    {selectedLocation ? selectedLocation.name : 'Search for Locations..'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                {selectedLocation && (
                                    < X onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedLocation(null); }}
                                        className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                                )}
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpenLocation ? 'rotate-180' : ''}`} />
                            </div>
                        </button>

                        {isOpenLocation && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50">
                                <div className="p-4 border-b">
                                    <input type="text" placeholder="Search artists..." value={searchLocation}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchLocation(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        autoFocus
                                    />
                                </div>

                                <div className="max-h-80 overflow-y-auto py-2">
                                    {filteredLocation.length > 0 ? (
                                        filteredLocation.map((a) => (
                                            <button
                                                key={a.id}
                                                onClick={() => { setSelected(a); setSearch(''); setIsOpen(false); }}
                                                className="w-full px-6 py-3 text-left hover:bg-gray-50 flex justify-between 
                                                items-center"
                                            >
                                                <div className="font-medium text-gray-800">{a.name}</div>
                                                {selectedLocation?.id === a.id && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-6 py-8 text-center text-gray-500">
                                            <p>No artists found</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-1/2">

            </div>
        </div>
    );
}
