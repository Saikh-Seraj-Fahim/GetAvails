import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

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
    const [isOpenArtist, setIsOpenArtist] = useState<boolean>(false);
    const [searchArtist, setSearchArtist] = useState<string>('');
    const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
    // ✏️ CHANGED: Added type to userefArtist
    const refArtist = useRef<HTMLDivElement>(null);

    const filteredArtists = artists.filter(a =>
        a.name.toLowerCase().includes(searchArtist.toLowerCase())
    );

    useEffect(() => {
        // ✏️ CHANGED: Added type to event parameter
        // e contains info about where user clicked. e.target = the element user clicked on.
        const handleClickArtist = (e: MouseEvent) => {
            if (refArtist.current && !refArtist.current.contains(e.target as Node)) {
                setIsOpenArtist(false);
            }
        };
        document.addEventListener('mousedown', handleClickArtist); // mousedown = fires when mouse button is pressed.
        return () => document.removeEventListener('mousedown', handleClickArtist);
    }, []);


    // ✏️ CHANGED: Added type annotations to state
    const [isOpenLocation, setIsOpenLocation] = useState<boolean>(false);
    const [searchLocation, setSearchLocation] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<Artist | null>(null);
    // ✏️ CHANGED: Added type to userefArtist

    const refLocation = useRef<HTMLDivElement>(null);

    const filteredLocations = locations.filter(a =>
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

    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false); // for calender

    return (
        <div className="p-16 flex flex-col xl:flex-row gap-12">
            <div className="w-full xl:w-1/2">
                <h1 className="font-medium font-IBM-plex-sans text-2xl lg:text-5xl">Smarter Talent Booking, All in One Place</h1>
                <p className="text-[#6B7280] mt-6 text-xl">The all-in-one platform for agents, artists, venues, and buyers to searchArtist,
                    book and grow - smarter and faster.</p>
                <button className="bg-[#235789] text-[#FFFFFF] font-inter px-6 py-2 rounded-4xl flex gap-2 mt-6 cursor-pointer">
                    Join Now
                    <FaArrowRightLong className="translate-y-1/3" />
                </button>


                <div className="w-full p-8 mt-7 border-2 rounded-md">
                    {/* searchArtist for Artists */}
                    <div ref={refArtist} className="relative w-full">
                        <button onClick={() => setIsOpenArtist(!isOpenArtist)}
                            className="w-full bg-white rounded-full shadow hover:shadow-md transition-shadow px-6 py-4 
                            flex items-center justify-between border-2 border-transparent hover:border-gray-200"
                        >
                            <div className="flex items-center gap-3">
                                <Search className="w-5 h-5 text-gray-400" />
                                <span className={selectedArtist ? "text-gray-800 font-medium font-inter" : "text-gray-500 font-inter"}>
                                    {selectedArtist ? selectedArtist.name : 'Search for Artists'}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                {selectedArtist && (
                                    < X onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelectedArtist(null); }}
                                        className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                                )}
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpenArtist ? 'rotate-180' :
                                    'rotate-0'}`} />
                            </div>
                        </button>

                        {isOpenArtist && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50">
                                <div className="p-4 border-b">
                                    <input type="text" placeholder="Search Artists..." value={searchArtist}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchArtist(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                                        focus:ring-blue-400" autoFocus
                                    />
                                </div>

                                <div className="max-h-80 overflow-y-auto py-2">
                                    {filteredArtists.length > 0 ? (
                                        filteredArtists.map((a) => (
                                            <button
                                                key={a.id}
                                                onClick={() => { setSelectedArtist(a); setSearchArtist(''); setIsOpenArtist(false); }}
                                                className="w-full px-6 py-3 text-left hover:bg-gray-200 flex justify-between 
                                                items-center font-inter cursor-pointer"
                                            >
                                                <div className="font-medium text-gray-800">{a.name}</div>
                                            </button>
                                        ))
                                    ) : (
                                        <div className="px-6 py-8 text-center text-gray-500 font-inter">
                                            <p>No artists found</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    {/* {selectedArtist && (
                        <div className="mt-8 p-6 bg-white rounded-2xl shadow-md">
                            <h2 className="text-lg font-semibold mb-2">selectedArtist Artist</h2>
                            <p className="text-xl font-bold">{selectedArtist.name}</p>
                        </div>
                    )} */}


                    <div className="w-full flex flex-col lg:flex-row gap-6 mt-4">
                        {/* Select Location */}
                        <div ref={refLocation} className="relative flex-1">
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
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpenLocation ?
                                        'rotate-180' : 'rotate-0'}`} />
                                </div>
                            </button>

                            {isOpenLocation && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50">
                                    <div className="p-4 border-b">
                                        <input type="text" placeholder="Search Location..." value={searchLocation}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchLocation(e.target.value)}
                                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                                            focus:ring-blue-400 font-inter" autoFocus
                                        />
                                    </div>

                                    <div className="max-h-80 overflow-y-auto py-2">
                                        {filteredLocations.length > 0 ? (
                                            filteredLocations.map((a) => (
                                                <button
                                                    key={a.id}
                                                    onClick={() => {
                                                        setSelectedLocation(a); setSearchLocation('');
                                                        setIsOpenLocation(false);
                                                    }}
                                                    className="w-full px-6 py-3 text-left hover:bg-gray-200 flex justify-between 
                                                items-center cursor-pointer"
                                                >
                                                    <div className="font-medium text-gray-800">{a.name}</div>
                                                    {selectedLocation?.id === a.id && <div className="w-2 h-2 bg-blue-600 
                                                    rounded-full" />}
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

                        <div className="flex-1">
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" id="date" className="w-full justify-between font-normal">
                                        {date ? date.toLocaleDateString() : "Select Date Range"}
                                        <ChevronDownIcon />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setDate(date)
                                            setOpen(false)
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <Button variant="secondary" className="w-full mt-4 rounded-full bg-[#1E1E1E] text-[#FFFFFF] font-inter
                    hover:bg-[#1E1E1E] cursor-pointer">
                        Search Availability
                    </Button>
                </div>
            </div>


            <div className="w-full xl:w-1/2">
                <video src={"/home-page-images/hero-section-video.mp4"} autoPlay muted loop controls={true} className="w-full h-full  
                object-cover rounded-4xl"/>
            </div>
        </div>
    );
}
