// import { useState, useRef, useEffect } from 'react';
// import { ChevronDown, Search, X } from 'lucide-react';

// // Added TypeScript interface for Artist
// interface Artist {
//     id: number;
//     name: string;
// }

// const artists: Artist[] = [
//     { id: 1, name: 'Pablo Picasso' },
//     { id: 2, name: 'Vincent van Gogh' },
//     { id: 3, name: 'Leonardo da Vinci' },
//     { id: 4, name: 'Claude Monet' },
//     { id: 5, name: 'Frida Kahlo' },
//     { id: 6, name: 'Michelangelo' },
//     { id: 7, name: 'Salvador Dalí' },
//     { id: 8, name: 'Rembrandt' },
//     { id: 9, name: 'Andy Warhol' },
//     { id: 10, name: 'Georgia O Keeffe' }
// ];

// export default function SelectWithDropDown() {
//     // ✏️ CHANGED: Added type annotations to state
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [search, setSearch] = useState<string>('');
//     const [selected, setSelected] = useState<Artist | null>(null);
//     // ✏️ CHANGED: Added type to useRef
//     const ref = useRef<HTMLDivElement>(null);

//     const filtered = artists.filter(a =>
//         a.name.toLowerCase().includes(search.toLowerCase())
//     );

//     useEffect(() => {
//         // ✏️ CHANGED: Added type to event parameter
//         const handleClick = (e: MouseEvent) => {
//             if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
//         };
//         document.addEventListener('mousedown', handleClick);
//         return () => document.removeEventListener('mousedown', handleClick);
//     }, []);

//     return (
//         <div ref={ref} className="relative">
//             <button onClick={() => setIsOpen(!isOpen)}
//                 className="w-full bg-white rounded-full shadow hover:shadow-md transition-shadow px-6 py-4 
//                             flex items-center justify-between border-2 border-transparent hover:border-gray-200"
//             >
//                 <div className="flex items-center gap-3">
//                     <Search className="w-5 h-5 text-gray-400" />
//                     <span className={selected ? "text-gray-800 font-medium" : "text-gray-500"}>
//                         {selected ? selected.name : 'Search for Artists'}
//                     </span>
//                 </div>

//                 <div className="flex items-center gap-2">
//                     {selected && (
//                         < X onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSelected(null); }}
//                             className="w-4 h-4 text-gray-500 hover:text-gray-700" />
//                     )}
//                     <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//                 </div>
//             </button>

//             {isOpen && (
//                 <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border z-50">
//                     <div className="p-4 border-b">
//                         <input type="text" placeholder="Search artists..." value={search}
//                             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             autoFocus
//                         />
//                     </div>

//                     <div className="max-h-80 overflow-y-auto py-2">
//                         {filtered.length > 0 ? (
//                             filtered.map((a) => (
//                                 <button
//                                     key={a.id}
//                                     onClick={() => { setSelected(a); setSearch(''); setIsOpen(false); }}
//                                     className="w-full px-6 py-3 text-left hover:bg-gray-50 flex justify-between 
//                                                 items-center"
//                                 >
//                                     <div className="font-medium text-gray-800">{a.name}</div>
//                                     {selected?.id === a.id && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
//                                 </button>
//                             ))
//                         ) : (
//                             <div className="px-6 py-8 text-center text-gray-500">
//                                 <p>No artists found</p>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>

//     );
// }



// {/* {selected && (
//         <div className="mt-8 p-6 bg-white rounded-2xl shadow-md">
//             <h2 className="text-lg font-semibold mb-2">Selected Artist</h2>
//             <p className="text-xl font-bold">{selected.name}</p>
//         </div>
// )} */}